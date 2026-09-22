import glob, re, os

PAGES_DIR = r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\src\pages'
files = glob.glob(os.path.join(PAGES_DIR, '**', '*.astro'), recursive=True)

updated_files = []
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()

    # Pattern: <div class="container" style="max-width:...
    # or <div class="container"> that wraps article/text
    new_content = re.sub(r'<div class="container"\s+(style="max-width:[^"]+")>', r'<div class="container article-body" \1>', content)
    new_content = re.sub(r"<div class='container'\s+(style='max-width:[^']+')>", r"<div class='container article-body' \1>", new_content)

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        updated_files.append(os.path.relpath(f, PAGES_DIR))

print(f"Updated {len(updated_files)} files with 'container article-body':")
for uf in updated_files:
    print(" -", uf)
