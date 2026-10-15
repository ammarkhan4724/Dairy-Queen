"""On-page SEO check of the built site in dist/ (run after `npm run build`).

Usage:  python seo_check.py            -> summary of problems
        python seo_check.py --table    -> also prints one row per page
"""
import glob, html, json, os, re, sys

DIST = 'dist'
SITE = 'https://www.thequeendairymenu.us'
BANNED_SCHEMA = {'Product', 'Offer', 'AggregateOffer', 'AggregateRating', 'Review', 'MerchantReturnPolicy'}


def url_of(path):
    rel = os.path.relpath(path, DIST).replace(os.sep, '/')[:-len('.html')]
    return '/' if rel == 'index' else '/' + rel


pages = {url_of(p): p for p in glob.glob(f'{DIST}/**/*.html', recursive=True) if not p.endswith('404.html')}
rows, problems = [], []

for url, path in sorted(pages.items()):
    s = open(path, encoding='utf-8').read()
    def one(rx):
        m = re.search(rx, s, re.S)
        return html.unescape(m.group(1)).strip() if m else ''
    title = one(r'<title>(.*?)</title>')
    desc = one(r'<meta name="description" content="([^"]*)"')
    canon = one(r'<link rel="canonical" href="([^"]*)"')
    robots = one(r'<meta name="robots" content="([^"]*)"')
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    body = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', s.split('<main', 1)[-1].split('</main>', 1)[0], flags=re.S)
    words = len(re.sub(r'<[^>]+>', ' ', body).split())
    no_alt = len(re.findall(r'<img(?![^>]*\balt=)[^>]*>', s))
    types = set()
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        types.update(re.findall(r'"@type":"([A-Za-z]+)"', block.replace('": "', '":"')))
    links = set(re.findall(r'href="([^"#?]*)', s))
    broken = sorted(l for l in links if l.startswith('/') and not l.startswith('//')
                    and l != '/' and not os.path.exists(DIST + l)
                    and l.rstrip('/') not in pages)
    slash = sorted(l for l in links if l.startswith('/') and len(l) > 1 and l.endswith('/'))
    old = 'hostingersite.com' in s

    rows.append((url, len(title), len(desc), len(h1s), words, no_alt, ','.join(sorted(types))))
    want = SITE + ('' if url == '/' else url) if url != '/' else SITE + '/'
    if canon != want: problems.append(f'{url}: canonical is {canon!r}, expected {want!r}')
    if not 10 <= len(title) <= 60: problems.append(f'{url}: title length {len(title)}: {title}')
    if not 70 <= len(desc) <= 160: problems.append(f'{url}: description length {len(desc)}')
    if len(h1s) != 1: problems.append(f'{url}: {len(h1s)} H1 tags')
    if 'noindex' in robots: problems.append(f'{url}: noindex')
    if no_alt: problems.append(f'{url}: {no_alt} images without alt')
    if broken: problems.append(f'{url}: broken internal links {broken}')
    if slash: problems.append(f'{url}: trailing-slash links {slash}')
    if old: problems.append(f'{url}: references old hostingersite.com domain')
    if types & BANNED_SCHEMA: problems.append(f'{url}: banned schema {sorted(types & BANNED_SCHEMA)}')
    if url != '/' and 'BreadcrumbList' not in types: problems.append(f'{url}: no BreadcrumbList')
    if words < 300 and url not in ('/contact',): problems.append(f'{url}: thin content ({words} words)')

titles = {}
for url, path in pages.items():
    t = re.search(r'<title>(.*?)</title>', open(path, encoding='utf-8').read(), re.S)
    titles.setdefault(t.group(1) if t else '', []).append(url)
for t, urls in titles.items():
    if len(urls) > 1: problems.append(f'duplicate title on {urls}: {t}')

if '--table' in sys.argv:
    print('url | title len | desc len | h1 | words | img no alt | schema')
    for r in rows: print(' | '.join(map(str, r)))
print(f'\n{len(pages)} pages checked, {len(problems)} problems')
for p in problems: print(' -', p)
