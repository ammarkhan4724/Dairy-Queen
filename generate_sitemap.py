"""Writes public/sitemap.xml with every indexable page in its canonical form
(https, www, no trailing slash). lastmod is the date the page's source last
changed in git, or today for uncommitted changes, so Google can trust it.

Run before `npm run build`:  python generate_sitemap.py
"""
import os, subprocess
from datetime import date

SRC_DIR = os.path.join('src', 'pages')
DOMAIN = 'https://www.thequeendairymenu.us'
EXCLUDE = {'/404'}  # noindex / non-canonical pages


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
        elif route.startswith(('/items/', '/blog/')) or route in ('/combos', '/price-history', '/blizzard-of-the-month', '/dipping-sauces', '/texas-dq-menu'):
            prio = '0.7'
        else:
            prio = '0.3'
        urls.append((DOMAIN + (route if route != '/' else '/'), lastmod(path), prio))

urls.sort(key=lambda u: (-float(u[2]), u[0]))
lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for loc, mod, prio in urls:
    lines += ['  <url>', f'    <loc>{loc}</loc>', f'    <lastmod>{mod}</lastmod>', f'    <priority>{prio}</priority>', '  </url>']
lines.append('</urlset>')

with open(os.path.join('public', 'sitemap.xml'), 'w', encoding='utf-8', newline='\n') as fp:
    fp.write('\n'.join(lines) + '\n')
print(f'Generated public/sitemap.xml with {len(urls)} URLs')
