"""Builds src/data/related.json: 3-5 "Related guides" links for every item and blog page.

Run after adding or renaming pages:  python generate_related.py
"""
import glob, html, json, os, re

PAGES = os.path.join('src', 'pages')

CATEGORY_NAMES = {
    '/categories/blizzard-treats': 'Blizzard Treats menu & prices',
    '/categories/breakfast': 'Breakfast menu & prices',
    '/categories/burgers-sandwiches': 'Burgers & sandwiches menu & prices',
    '/categories/chicken-strip-baskets': 'Chicken Strip Baskets menu & prices',
    '/categories/classic-treats': 'Cones, sundaes & classic treats',
    '/categories/dq-cakes': 'DQ cake sizes, servings & prices',
    '/categories/drinks': 'Shakes, drinks & MooLatté menu',
    '/categories/kids-meals': 'Kids meals menu & prices',
    '/categories/snacks-sides': 'Snacks & sides menu & prices',
    '/combos': 'DQ meal deals & combos',
}

# Best supporting article for each category hub.
CATEGORY_GUIDE = {
    '/categories/blizzard-treats': '/blog/best-blizzard-flavors-ranked',
    '/categories/breakfast': '/blog/dq-breakfast-hours-menu',
    '/categories/burgers-sandwiches': '/blog/best-dairy-queen-burgers-ranked',
    '/categories/chicken-strip-baskets': '/blog/dq-chicken-strip-baskets-review',
    '/categories/classic-treats': '/blog/dairy-queen-ice-cream-vs-soft-serve',
    '/categories/dq-cakes': '/blog/dq-cakes-complete-guide',
    '/categories/drinks': '/blog/dq-shake-moolatte-guide',
    '/categories/kids-meals': '/blog/dq-meal-deals-guide',
    '/categories/snacks-sides': '/blog/dairy-queen-calories-nutrition-guide',
    '/combos': '/blog/dq-meal-deals-guide',
}

BLOG_TITLES = {
    '/blog/best-blizzard-flavors-ranked': 'Best Blizzard flavors, ranked',
    '/blog/best-dairy-queen-burgers-ranked': 'Best Dairy Queen burgers, ranked',
    '/blog/dairy-queen-app-rewards-hacks': 'DQ app rewards guide',
    '/blog/dairy-queen-calories-nutrition-guide': 'Dairy Queen calories & nutrition guide',
    '/blog/dairy-queen-ice-cream-vs-soft-serve': 'Is DQ soft serve ice cream?',
    '/blog/dairy-queen-price-inflation-report': 'Why Dairy Queen prices went up',
    '/blog/dairy-queen-secret-menu': 'Dairy Queen secret menu',
    '/blog/dq-breakfast-hours-menu': 'DQ breakfast hours & menu',
    '/blog/dq-cakes-complete-guide': 'DQ cake flavors & serving guide',
    '/blog/dq-chicken-strip-baskets-review': 'DQ Chicken Strip Basket review',
    '/blog/dq-gluten-free-allergen-guide': 'DQ gluten-free & allergen guide',
    '/blog/dq-meal-deals-guide': 'DQ $7 Meal Deal & 2 for $5 guide',
    '/blog/dq-shake-moolatte-guide': 'DQ shakes & MooLatté guide',
}

PAGE_TITLES = {
    '/price-history': 'DQ price history tracker',
    '/blizzard-of-the-month': 'Blizzard of the Month & fall menu',
    '/dipping-sauces': 'DQ dipping sauces & calories',
    '/texas-dq-menu': 'Texas Dairy Queen menu',
}

BLOG_RELATED = {
    '/blog/best-blizzard-flavors-ranked': ['/categories/blizzard-treats', '/blizzard-of-the-month', '/items/oreo-blizzard', '/items/choco-brownie-blizzard', '/blog/dairy-queen-secret-menu'],
    '/blog/best-dairy-queen-burgers-ranked': ['/categories/burgers-sandwiches', '/items/flamethrower-stackburger', '/texas-dq-menu', '/blog/dq-meal-deals-guide', '/combos'],
    '/blog/dairy-queen-app-rewards-hacks': ['/blog/dq-meal-deals-guide', '/combos', '/items/7-meal-deal', '/blog/dairy-queen-price-inflation-report', '/categories/blizzard-treats'],
    '/blog/dairy-queen-calories-nutrition-guide': ['/blog/dq-gluten-free-allergen-guide', '/categories/burgers-sandwiches', '/categories/blizzard-treats', '/items/side-salad', '/blog/dairy-queen-ice-cream-vs-soft-serve'],
    '/blog/dairy-queen-ice-cream-vs-soft-serve': ['/categories/classic-treats', '/items/vanilla-soft-serve-cone', '/blog/best-blizzard-flavors-ranked', '/blog/dairy-queen-calories-nutrition-guide'],
    '/blog/dairy-queen-price-inflation-report': ['/price-history', '/blog/dq-meal-deals-guide', '/combos', '/blog/dairy-queen-app-rewards-hacks', '/categories/dq-cakes'],
    '/blog/dairy-queen-secret-menu': ['/blog/best-blizzard-flavors-ranked', '/categories/blizzard-treats', '/categories/drinks', '/blog/dq-shake-moolatte-guide'],
    '/blog/dq-breakfast-hours-menu': ['/categories/breakfast', '/items/breakfast-burrito', '/items/country-breakfast-platter', '/blog/dq-meal-deals-guide'],
    '/blog/dq-cakes-complete-guide': ['/categories/dq-cakes', '/items/oreo-blizzard-cake', '/items/dq-cake-round-8inch', '/items/dq-sheet-cake', '/blog/best-blizzard-flavors-ranked'],
    '/blog/dq-chicken-strip-baskets-review': ['/categories/chicken-strip-baskets', '/dipping-sauces', '/items/chicken-strip-basket-4pc', '/items/chicken-strip-basket-6pc', '/blog/dq-meal-deals-guide'],
    '/blog/dq-gluten-free-allergen-guide': ['/blog/dairy-queen-calories-nutrition-guide', '/items/non-dairy-dilly-bar', '/categories/classic-treats', '/items/side-salad'],
    '/blog/dq-meal-deals-guide': ['/combos', '/items/7-meal-deal', '/items/2-for-5-mix-match', '/blog/dairy-queen-app-rewards-hacks', '/categories/kids-meals'],
    '/blog/dq-shake-moolatte-guide': ['/categories/drinks', '/items/moolatte', '/items/chocolate-shake', '/blog/dairy-queen-calories-nutrition-guide'],
}


def route_of(path):
    r = '/' + os.path.relpath(path, PAGES).replace(os.sep, '/')[:-len('.astro')]
    return re.sub(r'/index$', '', r) or '/'


def h1_of(text):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', text, re.S)
    if not m:
        return None
    return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip()


items = {}  # route -> (title, category)
for f in sorted(glob.glob(os.path.join(PAGES, 'items', '*.astro'))):
    r = route_of(f)
    if r == '/items':
        continue
    t = open(f, encoding='utf-8').read()
    m = re.search(r'"href": "(/categories/[^"]+)"', t)
    cat = m.group(1) if m else '/combos'
    items[r] = (h1_of(t) or r.split('/')[-1].replace('-', ' ').title(), cat)


def title(r):
    if r in items:
        return items[r][0]
    return CATEGORY_NAMES.get(r) or BLOG_TITLES.get(r) or PAGE_TITLES.get(r, r)


def link(r):
    return {'title': title(r), 'href': r}


related = {}
by_cat = {}
for r, (_, cat) in items.items():
    by_cat.setdefault(cat, []).append(r)

for r, (_, cat) in items.items():
    sibs = by_cat[cat]
    i = sibs.index(r)
    # Next three siblings in a ring, so every item receives inbound links.
    picks = [sibs[(i + k) % len(sibs)] for k in range(1, min(4, len(sibs)))]
    links = [link(p) for p in picks] + [link(cat)]
    guide = CATEGORY_GUIDE.get(cat)
    if guide:
        links.append(link(guide))
    related[r] = links[:5]

for r, targets in BLOG_RELATED.items():
    related[r] = [link(t) for t in targets][:5]

os.makedirs(os.path.join('src', 'data'), exist_ok=True)
with open(os.path.join('src', 'data', 'related.json'), 'w', encoding='utf-8') as fp:
    json.dump(related, fp, ensure_ascii=False, indent=1)
print(f'Wrote related links for {len(related)} pages')
