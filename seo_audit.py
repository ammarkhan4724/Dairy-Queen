import os
import glob
import re

def audit_file(filepath):
    issues = []
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check Title
    title_match = re.search(r'title="([^"]+)"', content)
    if title_match:
        title_len = len(title_match.group(1))
        if title_len < 30 or title_len > 70:
            issues.append(f"Title length is {title_len} characters (ideal is 50-60).")
    else:
        issues.append("No title attribute found in Layout tag.")
        
    # Check Description
    desc_match = re.search(r'description="([^"]+)"', content)
    if desc_match:
        desc_len = len(desc_match.group(1))
        if desc_len < 100 or desc_len > 160:
            issues.append(f"Meta description length is {desc_len} chars (ideal is 150-160).")
    else:
        issues.append("No description attribute found in Layout tag.")
        
    # Check H1
    h1_matches = re.findall(r'<h1[^>]*>.*?</h1>', content, flags=re.IGNORECASE | re.DOTALL)
    if len(h1_matches) == 0:
        issues.append("No H1 tag found.")
    elif len(h1_matches) > 1:
        issues.append(f"Multiple H1 tags found ({len(h1_matches)}). Should be exactly 1.")
        
    # Check JSON-LD schema
    schema_matches = re.findall(r'type="application/ld\+json"', content)
    if len(schema_matches) == 0:
        issues.append("No Schema.org JSON-LD found. Missing critical structured data.")
        
    return issues

def main():
    print("Starting SEO Audit...")
    item_files = glob.glob('src/pages/items/*.astro')
    category_files = glob.glob('src/pages/categories/*.astro')
    
    all_files = item_files + category_files
    
    report_lines = ["# SEO Audit Report", ""]
    total_issues = 0
    
    for file in all_files:
        issues = audit_file(file)
        if issues:
            report_lines.append(f"### {file}")
            for issue in issues:
                report_lines.append(f"- {issue}")
                total_issues += 1
            report_lines.append("")
            
    report_lines.insert(2, f"**Total Issues Found:** {total_issues}")
    report_lines.insert(3, f"**Files Audited:** {len(all_files)}")
    report_lines.insert(4, "---")
    
    with open('seo_audit_report.md', 'w', encoding='utf-8') as f:
        f.write("\n".join(report_lines))
        
    print(f"Audit complete. Found {total_issues} issues. Report saved to seo_audit_report.md")

if __name__ == "__main__":
    main()
