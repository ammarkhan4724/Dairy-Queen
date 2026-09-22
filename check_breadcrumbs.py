import glob

files = glob.glob(r'D:\Hermes\DairyQueenClone\url_named_pages\**\*.html', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        if 'breadcrumb' in c:
            count += 1
print(f"Total HTML files with breadcrumb: {count} out of {len(files)}")
