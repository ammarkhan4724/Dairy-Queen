import glob, os, re
from bs4 import BeautifulSoup

def normalize_breadcrumb_soup(bc_soup):
    # Fix the double link issue in blog if present
    for li in bc_soup.find_all('li'):
        links = li.find_all('a')
        if len(links) > 1:
            for l in links[1:]:
                l.decompose()

    for a in bc_soup.find_all('a'):
        href = a.get('href', '')
        if href in ['../index.html', 'index.html', '../', './']:
            a['href'] = '/'
        elif href in ['../index.html#full-menu', 'index.html#full-menu', '/index#full-menu', '/index.html#full-menu']:
            a['href'] = '/#full-menu'
        else:
            h = href
            h = re.sub(r'^\.\./', '/', h)
            h = re.sub(r'^\./', '/', h)
            if not h.startswith('/') and not h.startswith('http') and not h.startswith('#'):
                h = '/' + h
            if h.endswith('.html'):
                h = h[:-5]
            a['href'] = h
    return str(bc_soup)

def normalize_hero_soup(hero_soup):
    for a in hero_soup.find_all('a'):
        href = a.get('href', '')
        if href in ['../index.html', 'index.html', '../', './']:
            a['href'] = '/'
        elif href in ['../index.html#full-menu', 'index.html#full-menu', '/index#full-menu', '/index.html#full-menu']:
            a['href'] = '/#full-menu'
        else:
            h = href
            h = re.sub(r'^\.\./', '/', h)
            h = re.sub(r'^\./', '/', h)
            if not h.startswith('/') and not h.startswith('http') and not h.startswith('#'):
                h = '/' + h
            if h.endswith('.html'):
                h = h[:-5]
            a['href'] = h
    return str(hero_soup)

def process_file(astro_path, folder):
    slug = os.path.basename(astro_path).replace('.astro', '')
    if slug == 'index':
        return # Skip index pages
    
    html_name = f"{slug}.html"
    src_html = os.path.join(r'D:\Hermes\DairyQueenClone\url_named_pages', folder, html_name) if folder else os.path.join(r'D:\Hermes\DairyQueenClone\url_named_pages', html_name)
    
    if not os.path.exists(src_html):
        print(f"Warning: source file not found: {src_html}")
        return

    with open(src_html, 'r', encoding='utf-8', errors='ignore') as fp:
        source_soup = BeautifulSoup(fp.read(), 'html.parser')

    with open(astro_path, 'r', encoding='utf-8') as fp:
        astro_content = fp.read()

    bc = source_soup.find('nav', class_='breadcrumb')
    hero = source_soup.find('section', class_='hero')

    inject_blocks = []

    # 1. Breadcrumb
    if bc and ('<nav class="breadcrumb"' not in astro_content and '<nav aria-label="Breadcrumb"' not in astro_content):
        clean_bc = normalize_breadcrumb_soup(bc)
        inject_blocks.append(clean_bc)

    # 2. Hero (only for categories, blog, and specific root pages like blog, disclaimer, privacy, terms)
    should_have_hero = folder in ['categories', 'blog'] or slug in ['blog', 'disclaimer', 'privacy', 'terms']
    if hero and should_have_hero and ('<section class="hero"' not in astro_content and "<section class='hero'" not in astro_content):
        clean_hero = normalize_hero_soup(hero)
        inject_blocks.append(clean_hero)

    if not inject_blocks:
        return

    injection_str = "\n\n" + "\n\n".join(inject_blocks) + "\n\n"

    # Insert after <Layout ...>
    layout_match = re.search(r'(<Layout[^>]*>)', astro_content)
    if layout_match:
        pos = layout_match.end()
        new_content = astro_content[:pos] + injection_str + astro_content[pos:].lstrip('\n')
        with open(astro_path, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        print(f"Updated: {astro_path} (injected: {[b[:20] for b in inject_blocks]})")
    else:
        print(f"Warning: Could not find <Layout> in {astro_path}")

# Run across all directories
for astro_file in glob.glob('src/pages/items/*.astro'):
    process_file(astro_file, 'items')

for astro_file in glob.glob('src/pages/categories/*.astro'):
    process_file(astro_file, 'categories')

for astro_file in glob.glob('src/pages/blog/*.astro'):
    process_file(astro_file, 'blog')

for astro_file in glob.glob('src/pages/*.astro'):
    process_file(astro_file, '')

print("Breadcrumbs and heroes injection completed!")
