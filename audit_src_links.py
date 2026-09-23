import os, glob, re
from urllib.parse import urlparse

SRC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), 'src', 'pages'))

# Discover all valid page paths in src/pages
valid_pages = set()
for root, dirs, files in os.walk(SRC_DIR):
    for f in files:
        if f.endswith('.astro'):
            rel = os.path.relpath(os.path.join(root, f), SRC_DIR).replace('\\', '/')
            if rel == 'index.astro':
                valid_pages.add('/')
                valid_pages.add('/index')
            elif rel.endswith('/index.astro'):
                dir_route = '/' + rel[:-len('/index.astro')]
                valid_pages.add(dir_route)
                valid_pages.add(dir_route + '/')
            else:
                base = '/' + rel[:-len('.astro')]
                valid_pages.add(base)
                valid_pages.add(base + '/')

print(f"Total valid Astro pages: {len(valid_pages)}")

# Scan all .astro files in src/pages
astro_files = glob.glob(os.path.join(SRC_DIR, '**', '*.astro'), recursive=True)

broken_links = []
malformed_links = []
total_internal = 0

link_regex = re.compile(r'href=(["\'])(.*?)\1', re.IGNORECASE)

for afile in astro_files:
    rel_source = '/' + os.path.relpath(afile, SRC_DIR).replace('\\', '/')
    with open(afile, 'r', encoding='utf-8') as fp:
        content = fp.read()

    for m in link_regex.finditer(content):
        href = m.group(2).strip()

        # Skip assets and external protocols
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', '#', '/Images/')):
            continue

        total_internal += 1

        # Check for /../ or ../
        if '/../' in href or href.startswith('/..') or href.startswith('../'):
            malformed_links.append((rel_source, href))

        # Check normalization
        parsed = urlparse(href)
        path = parsed.path
        
        # Clean path for route lookup
        clean_path = path
        # Normalize /../ or ../
        while '/../' in clean_path:
            clean_path = clean_path.replace('/../', '/')
        if clean_path.startswith('/..'):
            clean_path = clean_path[3:]
        if not clean_path.startswith('/'):
            clean_path = '/' + clean_path

        # Handle index
        if clean_path in ['/index', '/index.html']:
            clean_path = '/'

        # Check if route is valid
        if clean_path not in valid_pages and clean_path.rstrip('/') not in valid_pages:
            broken_links.append((rel_source, href, clean_path))

print(f"Total internal links scanned in src/pages: {total_internal}")
print(f"Total malformed links: {len(malformed_links)}")
print(f"Total broken links: {len(broken_links)}")

print("\n--- ALL UNIQUE BROKEN LINKS ---")
for src, href, clean in sorted(set(broken_links)):
    print(f"File: {src} -> href='{href}' (resolved: '{clean}')")
