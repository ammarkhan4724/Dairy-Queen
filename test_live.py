import urllib.request
import re

url = 'https://seashell-lobster-105528.hostingersite.com/items/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        imgs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', html)
        print(f"Total img tags on /items/: {len(imgs)}")
        for src in imgs[:25]:
            print("  ", src)
            
        # Test checking first 10 images with HEAD/GET
        print("\nChecking first 10 image URLs:")
        for src in imgs[:10]:
            img_url = 'https://seashell-lobster-105528.hostingersite.com' + src if src.startswith('/') else src
            try:
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req) as iresp:
                    print(f"  {iresp.status}: {img_url}")
            except Exception as e:
                print(f"  FAILED ({e}): {img_url}")
except Exception as e:
    print(f"Error fetching page: {e}")
