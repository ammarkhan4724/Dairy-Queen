import glob, os, re

items = []
for p in sorted(glob.glob('src/pages/items/*.astro')):
    slug = os.path.basename(p).replace('.astro', '')
    if slug == 'index':
        continue
    with open(p, 'r', encoding='utf-8') as fp:
        c = fp.read()
        h1_match = re.search(r'<h1>(.*?)</h1>', c)
        h1 = h1_match.group(1) if h1_match else slug
        price_match = re.search(r'<div class="item-price-lg">(.*?)</div>', c)
        price = price_match.group(1) if price_match else ''
        img_match = re.search(r'<img\s+src="([^"]+)"', c)
        img = img_match.group(1) if img_match else '/Images/favicon.svg'
        items.append({'slug': slug, 'title': h1, 'price': price, 'img': img})

print(f"Total items: {len(items)}")

cats = []
for p in sorted(glob.glob('src/pages/categories/*.astro')):
    slug = os.path.basename(p).replace('.astro', '')
    if slug == 'index':
        continue
    with open(p, 'r', encoding='utf-8') as fp:
        c = fp.read()
        m = re.search(r'title="([^"]+)"', c)
        title = m.group(1).split('—')[0].split('With Prices')[0].strip() if m else slug
        cats.append({'slug': slug, 'title': title})

print(f"Total categories: {len(cats)}")
for cat in cats:
    print(" -", cat)

