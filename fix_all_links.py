import os, glob, re

SRC_DIR = r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\src\pages'

files = glob.glob(os.path.join(SRC_DIR, '**', '*.astro'), recursive=True)

modified_files = 0
total_replacements = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()

    orig = content

    # 1. Fix broken specific links
    content = content.replace('/blog/best-dq-blizzard-flavors', '/blog/best-blizzard-flavors-ranked')
    content = re.sub(r'href=["\']/cdn-cgi/l/email-protection["\']\s+class=["\']__cf_email__.*?</a>', r'href="mailto:hello@thedairyqueenmenu.us">hello@thedairyqueenmenu.us</a>', content)
    content = content.replace('href="/7-meal-deal"', 'href="/items/7-meal-deal"')
    content = content.replace("href='/7-meal-deal'", "href='/items/7-meal-deal'")
    content = content.replace('href="/turtle-pecan-blizzard"', 'href="/items/turtle-pecan-blizzard"')
    content = content.replace("href='/turtle-pecan-blizzard'", "href='/items/turtle-pecan-blizzard'")
    content = content.replace('href="/royal-oreo-blizzard"', 'href="/items/royal-oreo-blizzard"')
    content = content.replace("href='/royal-oreo-blizzard'", "href='/items/royal-oreo-blizzard'")

    # 2. Normalize /../index# to /# and /../index to /
    content = re.sub(r'href=(["\'])/+\.\./+index#', r'href=\1/#', content)
    content = re.sub(r'href=(["\'])/+index#', r'href=\1/#', content)
    content = re.sub(r'href=(["\'])/+\.\./+index(["\'])', r'href=\1/\2', content)
    content = re.sub(r'href=(["\'])/+index(["\'])', r'href=\1/\2', content)

    # 3. Normalize all other /../ paths: e.g. /../items/ -> /items/
    content = re.sub(r'href=(["\'])/+\.\./+', r'href=\1/', content)

    # 4. Normalize any leading ../ without slash
    content = re.sub(r'href=(["\'])\.\./+', r'href=\1/', content)

    if content != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(content)
        modified_files += 1

print(f"Internal links fixed across {modified_files} files.")
