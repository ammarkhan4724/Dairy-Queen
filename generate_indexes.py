import glob, os, re

# 1. Gather all items
items = []
for p in sorted(glob.glob('src/pages/items/*.astro')):
    slug = os.path.basename(p).replace('.astro', '')
    if slug == 'index':
        continue
    with open(p, 'r', encoding='utf-8') as fp:
        c = fp.read()
        h1_match = re.search(r'<h1>(.*?)</h1>', c)
        h1 = h1_match.group(1).strip() if h1_match else slug.replace('-', ' ').title()
        price_match = re.search(r'<div class="item-price-lg">(.*?)</div>', c)
        price = price_match.group(1).strip() if price_match else ''
        img_match = re.search(r'<img\s+src="([^"]+)"', c)
        img = img_match.group(1).strip() if img_match else '/Images/favicon.svg'
        items.append({'slug': slug, 'title': h1, 'price': price, 'img': img})

# Generate src/pages/items/index.astro
items_cards_html = ""
for it in items:
    items_cards_html += f"""    <a href="/items/{it['slug']}" class="item-card group">
      <div class="item-img relative aspect-video bg-amber-50/50 overflow-hidden flex items-center justify-center p-3">
        <img src="{it['img']}" alt="{it['title']}" loading="lazy" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="item-body p-4 flex flex-col justify-between flex-1">
        <h3 class="font-bold text-base text-[#0B1E38] group-hover:text-[#0E7490] transition-colors leading-snug mb-2">{it['title']}</h3>
        <div class="item-footer flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
          <span class="price text-lg font-bold text-[#0E7490]" style="font-family: 'Bebas Neue', sans-serif;">{it['price']}</span>
          <span class="text-xs font-semibold text-slate-500 group-hover:text-[#0E7490] flex items-center gap-1">Details &rarr;</span>
        </div>
      </div>
    </a>\n"""

items_index_content = f"""---
import Layout from '../../layouts/Layout.astro';
---
<Layout title="Dairy Queen Menu Items 2026 — All 79 Items with Prices & Calories" description="Browse the full directory of all 79 Dairy Queen menu items for 2026. Includes Blizzard Treats, Stackburgers, chicken baskets, shakes, and sides with current prices.">

<nav class="breadcrumb" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/#full-menu">Menu</a></li>
      <li aria-current="page">All Menu Items</li>
    </ol>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <span class="hero-eyebrow">Full Catalog · 2026 Prices</span>
      <h1>ALL DAIRY QUEEN MENU ITEMS</h1>
      <p class="hero-lead">Explore every single treat, burger, basket, and drink on the Dairy Queen menu with up-to-date pricing, calorie counts, and sizes.</p>
      <div class="hero-cta">
        <a href="/#full-menu" class="btn btn-accent">Jump to Category Menu</a>
        <a href="/categories" class="btn btn-outline">View Categories</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h2 class="text-3xl font-bold text-[#0B1E38]" style="font-family: 'Bebas Neue', sans-serif;">79 MENU ITEMS AVAILABLE IN 2026</h2>
        <p class="text-sm text-slate-500">Click any item for full pricing details, nutrition facts, and sizing guides.</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{items_cards_html}    </div>
  </div>
</section>

</Layout>
"""

with open('src/pages/items/index.astro', 'w', encoding='utf-8') as fp:
    fp.write(items_index_content)
print("Created src/pages/items/index.astro successfully!")

# 2. Generate src/pages/categories/index.astro
categories_meta = [
    {
        'slug': 'blizzard-treats',
        'title': 'Blizzard® Treats',
        'desc': 'DQ\'s world-famous soft serve hand-blended with cookies, candy, and fruit toppings. Thick enough to hold upside down.',
        'img': '/Images/category-blizzards.webp',
        'badge': 'Iconic Desserts'
    },
    {
        'slug': 'burgers-sandwiches',
        'title': 'Burgers & Sandwiches',
        'desc': '100% real seasoned beef Stackburgers cooked to order, crispy and grilled chicken sandwiches, and all-beef hot dogs.',
        'img': '/Images/category-burgers.webp',
        'badge': 'Signature Grill'
    },
    {
        'slug': 'chicken-strip-baskets',
        'title': 'Chicken Strip Baskets',
        'desc': 'All-white meat chicken tenderloins breaded and served with crispy fries, Texas toast, and savory country gravy.',
        'img': '/Images/category-chicken.webp',
        'badge': 'Fan Favorite'
    },
    {
        'slug': 'classic-treats',
        'title': 'Classic Treats & Cones',
        'desc': 'Original DQ soft serve cones, dipped cones, sundaes, Banana Splits, Peanut Buster Parfaits, and Dilly Bars.',
        'img': '/Images/category-cones.webp',
        'badge': 'Original Soft Serve'
    },
    {
        'slug': 'breakfast',
        'title': 'Breakfast Menu',
        'desc': 'Hearty morning platters, buttermilk pancakes, breakfast burritos, biscuit sandwiches, and crispy hash browns.',
        'img': '/Images/category-breakfast.webp',
        'badge': 'Morning Platter'
    },
    {
        'slug': 'snacks-sides',
        'title': 'Snacks & Sides',
        'desc': 'Wisconsin white cheddar cheese curds, golden onion rings, hot pretzel sticks with zesty queso, and crispy fries.',
        'img': '/Images/category-snacks.webp',
        'badge': 'Shareable Bites'
    },
    {
        'slug': 'drinks',
        'title': 'Drinks & Shakes',
        'desc': 'MooLatté frozen coffee drinks, classic hand-spun shakes, Misty Slush beverages, and refreshing fruit smoothies.',
        'img': '/Images/category-drinks.webp',
        'badge': 'Beverages'
    },
    {
        'slug': 'dq-cakes',
        'title': 'DQ® Cakes',
        'desc': 'Layered ice cream cakes with rich fudge crunch centers, custom Blizzard cakes, and sheet cakes for celebrations.',
        'img': '/Images/category-cakes.webp',
        'badge': 'Celebrations'
    },
    {
        'slug': 'kids-meals',
        'title': 'Kids\' Meals',
        'desc': 'Kid-sized burgers, hot dogs, and 2pc chicken strips served with choice of fries or applesauce, milk, and a kid cone.',
        'img': '/Images/category-kids.webp',
        'badge': 'Family Friendly'
    }
]

cats_cards_html = ""
for c in categories_meta:
    cats_cards_html += f"""    <a href="/categories/{c['slug']}" class="cat-card group">
      <div class="cat-img aspect-video bg-amber-50/50 overflow-hidden relative">
        <img src="{c['img']}" alt="{c['title']}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="cat-badge absolute top-3 left-3 bg-[#0E7490] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">{c['badge']}</span>
      </div>
      <div class="cat-body p-6">
        <h3 class="text-2xl font-bold text-[#0B1E38] group-hover:text-[#0E7490] transition-colors mb-2" style="font-family: 'Bebas Neue', sans-serif;">{c['title']}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">{c['desc']}</p>
        <span class="cat-link inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-[#0E7490]">View Category &rarr;</span>
      </div>
    </a>\n"""

cats_index_content = f"""---
import Layout from '../../layouts/Layout.astro';
---
<Layout title="Dairy Queen Menu Categories 2026 — Complete Section Directory" description="Explore all 9 Dairy Queen menu categories for 2026: Blizzard Treats, Burgers & Sandwiches, Chicken Strip Baskets, Classic Treats, Breakfast, Drinks, and Cakes.">

<nav class="breadcrumb" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/#full-menu">Menu</a></li>
      <li aria-current="page">Menu Categories</li>
    </ol>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <span class="hero-eyebrow">Menu Sections · 2026 Guide</span>
      <h1>DAIRY QUEEN MENU CATEGORIES</h1>
      <p class="hero-lead">Browse all 9 official Dairy Queen food and treat categories with full price lists, calorie counts, and nutrition guides.</p>
      <div class="hero-cta">
        <a href="/#full-menu" class="btn btn-accent">Jump to Full Menu</a>
        <a href="/items" class="btn btn-outline">Browse All 79 Items</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{cats_cards_html}    </div>
  </div>
</section>

</Layout>
"""

os.makedirs('src/pages/categories', exist_ok=True)
with open('src/pages/categories/index.astro', 'w', encoding='utf-8') as fp:
    fp.write(cats_index_content)
print("Created src/pages/categories/index.astro successfully!")
