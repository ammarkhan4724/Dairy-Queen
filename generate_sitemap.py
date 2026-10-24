"""Writes public/sitemap.xml with every indexable page in its canonical form
(https, www, no trailing slash). lastmod is the date the page's source last
changed in git, or today for uncommitted changes, so Google can trust it.
Each URL also lists the content images its page shows (<image:image>), so
Google Images and Lens can tie each photo to the page about that item.

Run before `npm run build`:  python generate_sitemap.py
"""
import os, re, subprocess
from datetime import date

SRC_DIR = os.path.join('src', 'pages')
DOMAIN = 'https://www.thequeendairymenu.us'
EXCLUDE = {'/404'}  # noindex / non-canonical pages
IMAGE_RE = re.compile(r'/Images/[\w.-]+\.webp')  # content photos; og-share.png is the social card


def images(path):
    # Content photos referenced by the page source, in order, without repeats.
    with open(path, encoding='utf-8') as fp:
        found = IMAGE_RE.findall(fp.read())
    return list(dict.fromkeys(found))


def lastmod(path):
    dirty = subprocess.run(['git', 'status', '--porcelain', '--', path], capture_output=True, text=True).stdout.strip()
    if not dirty:
        out = subprocess.run(['git', 'log', '-1', '--format=%cs', '--', path], capture_output=True, text=True).stdout.strip()
        if out:
            return out
    return date.today().isoformat()


urls = []
for root, _, files in os.walk(SRC_DIR):
    for f in files:
        if not f.endswith('.astro'):
            continue
        path = os.path.join(root, f)
        rel = os.path.relpath(path, SRC_DIR).replace('\\', '/')[:-len('.astro')]
        route = '/' if rel == 'index' else '/' + rel.removesuffix('/index')
        if route in EXCLUDE:
            continue
        if route == '/':
            prio = '1.0'
        elif route in ('/categories', '/items', '/blog') or route.startswith('/categories/'):
            prio = '0.8'
        elif route.startswith(('/items/', '/blog/')) or route in ('/combos', '/price-history'):
            prio = '0.7'
        else:
            prio = '0.3'
        urls.append((DOMAIN + (route if route != '/' else '/'), lastmod(path), prio, images(path)))

urls.sort(key=lambda u: (-float(u[2]), u[0]))
lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
         '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">']
for loc, mod, prio, imgs in urls:
    lines += ['  <url>', f'    <loc>{loc}</loc>', f'    <lastmod>{mod}</lastmod>', f'    <priority>{prio}</priority>']
    lines += [f'    <image:image><image:loc>{DOMAIN}{src}</image:loc></image:image>' for src in imgs]
    lines.append('  </url>')
lines.append('</urlset>')

with open(os.path.join('public', 'sitemap.xml'), 'w', encoding='utf-8', newline='\n') as fp:
    fp.write('\n'.join(lines) + '\n')
print(f'Generated public/sitemap.xml with {len(urls)} URLs and {sum(len(u[3]) for u in urls)} image entries')
