import glob, os

files = glob.glob(r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\src\pages\**\*.astro', recursive=True)
print(f"Total Astro files: {len(files)}")

categories = []
items = []
others = []

for f in files:
    rel = os.path.relpath(f, r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\src\pages')
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    if 'categories' in rel:
        categories.append((rel, 'article-body' in c))
    elif 'items' in rel:
        items.append((rel, 'article-body' in c))
    else:
        others.append((rel, 'article-body' in c))

print(f"Categories ({len(categories)}):", categories[:5])
print(f"Items ({len(items)}):", items[:5])
print(f"Others ({len(others)}):", others)
