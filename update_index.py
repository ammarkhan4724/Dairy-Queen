import re

filepath = r"D:\Dairy-Queen\src\pages\items\index.astro"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_img_src(match):
    slug = match.group(1)
    rest_of_a_tag = match.group(2)
    # Inside rest_of_a_tag, replace the src of the img
    # It might contain multiple lines, so count=1 ensures only the first src inside this a-tag is replaced.
    new_rest = re.sub(r'src="[^"]+"', f'src="/Images/{slug}.webp"', rest_of_a_tag, count=1)
    return f'<a href="/items/{slug}"{new_rest}</a>'

pattern = re.compile(r'<a href="/items/([^"]+)"(.*?)</a>', re.DOTALL)
new_content = pattern.sub(replace_img_src, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated index.astro successfully!")
