import os, glob

SRC_DIR = r'src\pages'
domain = 'https://www.thequeendairymenu.us'

urls = []

# Collect all astro pages
for root, dirs, files in os.walk(SRC_DIR):
    for f in files:
        if f.endswith('.astro'):
            rel = os.path.relpath(os.path.join(root, f), SRC_DIR).replace('\\', '/')
            if rel == 'index.astro':
                route = '/'
                priority = '1.0'
                changefreq = 'daily'
            elif rel.endswith('/index.astro'):
                route = '/' + rel[:-len('/index.astro')]
                priority = '0.9'
                changefreq = 'weekly'
            else:
                route = '/' + rel[:-len('.astro')]
                if route.startswith('/categories/'):
                    priority = '0.8'
                    changefreq = 'weekly'
                elif route.startswith('/items/'):
                    priority = '0.7'
                    changefreq = 'weekly'
                elif route.startswith('/blog/'):
                    priority = '0.8'
                    changefreq = 'monthly'
                else:
                    priority = '0.5'
                    changefreq = 'monthly'
            urls.append((domain + route, priority, changefreq))

urls.sort(key=lambda x: (x[1] != '1.0', -float(x[1]), x[0]))

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for url, prio, freq in urls:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{url}</loc>')
    xml_lines.append('    <lastmod>2026-09-22</lastmod>')
    xml_lines.append(f'    <changefreq>{freq}</changefreq>')
    xml_lines.append(f'    <priority>{prio}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

with open('public/sitemap.xml', 'w', encoding='utf-8') as fp:
    fp.write('\n'.join(xml_lines) + '\n')

print(f"Generated public/sitemap.xml with {len(urls)} URLs!")
