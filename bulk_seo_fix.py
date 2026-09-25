import glob
import re

def optimize_seo(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    # Optimize Title: Remove repetitive branding or extra fluff to reach 50-60 chars
    def fix_title(match):
        title = match.group(1)
        # Try removing " | The Queen Dairy Menu"
        new_title = title.replace(" | The Queen Dairy Menu", "")
        # Try removing " & Details"
        new_title = new_title.replace(" & Details", "")
        # If still over 60, truncate safely
        if len(new_title) > 60:
            new_title = new_title[:57].strip() + "..."
        return f'title="{new_title}"'
        
    content = re.sub(r'title="([^"]+)"', fix_title, content)
    
    # Optimize Description: Keep it between 150-160 chars. If it's over 160, trim it safely.
    def fix_desc(match):
        desc = match.group(1)
        if len(desc) > 160:
            # truncate at last space before 157
            trimmed = desc[:157]
            last_space = trimmed.rfind(' ')
            if last_space > 100:
                trimmed = trimmed[:last_space]
            desc = trimmed + "..."
        return f'description="{desc}"'
        
    content = re.sub(r'description="([^"]+)"', fix_desc, content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    print("Starting side-by-side SEO Fix...")
    item_files = glob.glob('src/pages/items/*.astro')
    category_files = glob.glob('src/pages/categories/*.astro')
    
    all_files = item_files + category_files
    fixed_count = 0
    
    for file in all_files:
        if optimize_seo(file):
            fixed_count += 1
            
    print(f"SEO Fix complete! Optimized titles and descriptions in {fixed_count} files.")

if __name__ == "__main__":
    main()
