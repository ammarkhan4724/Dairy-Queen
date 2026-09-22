import glob, os, re
from bs4 import BeautifulSoup

def normalize_breadcrumb_soup(bc_soup):
    # Fix the double link issue in blog if present
    for li in bc_soup.find_all('li'):
        links = li.find_all('a')
        if len(links) > 1:
            # If both blog and price-history are in one li, keep only blog
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

# Let's test on oreo-blizzard, burgers-sandwiches, best-blizzard-flavors-ranked, and privacy
test_files = [
    ('items', 'oreo-blizzard.astro'),
    ('categories', 'burgers-sandwiches.astro'),
    ('blog', 'best-blizzard-flavors-ranked.astro'),
    ('', 'privacy.astro')
]

for folder, fname in test_files:
    html_name = fname.replace('.astro', '.html')
    src_html = os.path.join(r'D:\Hermes\DairyQueenClone\url_named_pages', folder, html_name) if folder else os.path.join(r'D:\Hermes\DairyQueenClone\url_named_pages', html_name)
    with open(src_html, 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
        bc = soup.find('nav', class_='breadcrumb')
        hero = soup.find('section', class_='hero')
        
        print(f"=== {fname} ===")
        if bc:
            print("BC:", normalize_breadcrumb_soup(bc)[:120], "...")
        if hero and folder in ['categories', 'blog', '']:
            print("HERO:", normalize_hero_soup(hero)[:120], "...")
