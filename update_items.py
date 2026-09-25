import os
import re

items_dir = r"D:\Dairy-Queen\src\pages\items"

for filename in os.listdir(items_dir):
    if not filename.endswith('.astro') or filename == 'index.astro':
        continue
    
    filepath = os.path.join(items_dir, filename)
    slug = filename[:-6] # remove .astro
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace `<img src="/Images/SOMETHING.webp"` with `<img src="/Images/{slug}.webp"`
    # But only for the main hero image which is usually `<div class="item-media"> ... <img>`
    # Or just replace the first img tag? No, there might be other images.
    # Let's replace the one in item-media:
    # <div class="item-media">\n      <img src="/Images/blizzard-category.webp"
    
    def replace_item_media(match):
        return f'<div class="item-media">\n      <img src="/Images/{slug}.webp"'
    
    new_content = re.sub(r'<div class="item-media">\s*<img src="/Images/[^"]+"', replace_item_media, content, count=1)
    
    # Also update the schema.org image url:
    # "image": "https://www.thequeendairymenu.us/Images/blizzard-category.webp"
    new_content = re.sub(r'"image": "https://www.thequeendairymenu.us/Images/[^"]+"', f'"image": "https://www.thequeendairymenu.us/Images/{slug}.webp"', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
