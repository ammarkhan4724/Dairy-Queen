import os, glob, re
from urllib.parse import urlparse, unquote

DIST_DIR = r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\dist'

# Collect all valid routes in dist
valid_routes = set()
for root, dirs, files in os.walk(DIST_DIR):
    for f in files:
        if f.endswith('.html'):
            rel = os.path.relpath(os.path.join(root, f), DIST_DIR).replace('\\', '/')
            # If index.html, the route is either / or /folder/ or /folder
            if rel == 'index.html':
                valid_routes.add('/')
                valid_routes.add('/index')
            elif rel.endswith('/index.html'):
                route = '/' + rel[:-len('/index.html')]
                valid_routes.add(route)
                valid_routes.add(route + '/')
            else:
                route = '/' + rel[:-len('.html')]
                valid_routes.add(route)
                valid_routes.add('/' + rel)

print(f"Total valid routes discovered: {len(valid_routes)}")

# Scan all HTML files for <a> tags
total_links = 0
broken_links = []
malformed_links = []

link_pattern = re.compile(r'<a\s+(?:[^>]*?\s+)?href=(["\'])(.*?)\1', re.IGNORECASE)

html_files = glob.glob(os.path.join(DIST_DIR, '**', '*.html'), recursive=True)

for html_file in html_files:
    source_route = '/' + os.path.relpath(html_file, DIST_DIR).replace('\\', '/')
    if source_route.endswith('/index.html'):
        source_route = source_route[:-len('/index.html')] or '/'
    elif source_route == '/index.html':
        source_route = '/'

    with open(html_file, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    for match in link_pattern.finditer(content):
        href = match.group(2).strip()
        total_links += 1

        # Ignore external, mailto, tel, javascript
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', '#')):
            continue

        # Check for malformed paths like /../ or ./
        if '/../' in href or href.startswith('/..') or href.startswith('../'):
            malformed_links.append((source_route, href))

        # Parse path
        parsed = urlparse(href)
        path = parsed.path

        # Resolve relative to source_route if not starting with /
        if not path.startswith('/'):
            # Relative path resolution
            base_dir = os.path.dirname(source_route)
            resolved_path = os.path.normpath(os.path.join(base_dir, path)).replace('\\', '/')
        else:
            resolved_path = os.path.normpath(path).replace('\\', '/')

        # Normalize trailing slash check
        if resolved_path not in valid_routes and (resolved_path.rstrip('/') or '/') not in valid_routes:
            broken_links.append((source_route, href, resolved_path))

print(f"\nTotal internal links scanned: {total_links}")
print(f"Total malformed links (/../ etc.): {len(malformed_links)}")
print(f"Total broken links: {len(broken_links)}")

if malformed_links:
    print("\nSample Malformed Links (first 10):")
    for s, h in malformed_links[:10]:
        print(f"  In {s} -> href='{h}'")

if broken_links:
    print("\nSample Broken Links (first 10):")
    for s, h, r in broken_links[:10]:
        print(f"  In {s} -> href='{h}' (resolved to '{r}')")
