import os
import glob
import time
import re
import google.genai
from google.genai import types

def rewrite_content(client, text, retries=5):
    if not text or len(text.strip()) < 10:
        return text
        
    prompt = f"""
Rewrite the following text to make it sound highly unique, engaging, and 100% authentic, passing Google's Helpful Content Update guidelines. 
You must retain all factual data: exact prices, calorie counts, sizes, ingredients, and any specific SEO keywords.
Properly cluster keywords naturally into the content.

IMPORTANT SEO RULES for AdSense approval:
1. Ensure strict topic focus on the current item to avoid keyword cannibalization. 
2. Follow Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness).
3. If the text mentions discontinued items, or if it makes sense contextually, you may briefly note what popular DQ items have been discontinued for historical context.
4. Do not use generic AI phrases or fluff. Write with the authentic voice of an independent fast-food expert.

Only return the rewritten text, nothing else. No markdown wrappers.

Text to rewrite:
{text}
"""
    for attempt in range(retries):
        try:
            response = client.models.generate_content(
                model='gemini-3.8-flash',
                contents=prompt,
            )
            return response.text.strip()
        except Exception as e:
            err_str = str(e)
            print(f"Error calling Gemini API: {e}")
            if '429' in err_str or 'RESOURCE_EXHAUSTED' in err_str or '503' in err_str or 'UNAVAILABLE' in err_str:
                wait_time = (attempt + 1) * 15
                print(f"Rate limited or unavailable. Waiting {wait_time} seconds before retrying...")
                time.sleep(wait_time)
            else:
                return text
    return text

def process_file(client, filepath):
    print(f"Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    parts = content.split('---')
    if len(parts) >= 3:
        frontmatter = parts[1]
        html_content = '---'.join(parts[2:])
        
        def replace_p(match):
            opening_tag = match.group(1)
            original_text = match.group(2)
            closing_tag = match.group(3)
            if len(original_text.strip()) > 30:
                 new_text = rewrite_content(client, original_text)
                 print("  Rewrote a paragraph.")
                 time.sleep(5) # Strict sleep to respect 15 RPM
                 return f"{opening_tag}{new_text}{closing_tag}"
            return match.group(0)
            
        new_html = re.sub(r'(<p[^>]*>)(.*?)(</p>)', replace_p, html_content, flags=re.DOTALL)
        
        def replace_faq(match):
            original_text = match.group(1)
            if len(original_text.strip()) > 20:
                 new_text = rewrite_content(client, original_text)
                 print("  Rewrote an FAQ answer.")
                 time.sleep(5) # Strict sleep to respect 15 RPM
                 return f'<div class="faq-a-inner">{new_text}</div>'
            return match.group(0)
            
        new_html = re.sub(r'<div class="faq-a-inner">(.*?)</div>', replace_faq, new_html, flags=re.DOTALL)
        
        final_content = f"---{frontmatter}---{new_html}"
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(final_content)
    else:
        print(f"Skipping {filepath}, unknown format.")

if __name__ == "__main__":
    if not os.environ.get("GEMINI_API_KEY"):
        print("ERROR: GEMINI_API_KEY environment variable is not set.")
        exit(1)
        
    client = google.genai.Client()
        
    item_files = glob.glob('src/pages/items/*.astro')
    category_files = glob.glob('src/pages/categories/*.astro')
    
    all_files = item_files + category_files
    
    print(f"Found {len(all_files)} files to process.")
    for file in all_files:
        process_file(client, file)
        
    print("Bulk processing complete!")
