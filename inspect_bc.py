import glob, re
from bs4 import BeautifulSoup

samples = [
    r'D:\Hermes\DairyQueenClone\url_named_pages\items\oreo-blizzard.html',
    r'D:\Hermes\DairyQueenClone\url_named_pages\categories\burgers-sandwiches.html',
    r'D:\Hermes\DairyQueenClone\url_named_pages\blog\best-blizzard-flavors-ranked.html',
    r'D:\Hermes\DairyQueenClone\url_named_pages\about.html'
]

for s in samples:
    try:
        with open(s, 'r', encoding='utf-8') as fp:
            soup = BeautifulSoup(fp.read(), 'html.parser')
            bc = soup.find('nav', class_='breadcrumb')
            print(f"=== {s.split('\\')[-1]} ===")
            if bc:
                print(bc.prettify())
            else:
                print("No breadcrumb found")
    except Exception as e:
        print(f"Error {s}: {e}")
