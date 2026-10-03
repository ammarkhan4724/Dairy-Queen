# General SEO + AdSense Pro Tips

**How to use this file:** Treat these as standing rules when auditing, building, writing content for, or advising on any website (blog, e-commerce, business, portfolio, client site). Verify against Google's current Search Essentials, spam policies, and AdSense program policies before stating anything as fact, since guidelines change. Label findings as Verified / Likely / Needs data. Never promise rankings, traffic, or AdSense approval.

## 1. Foundation (do first)
* Use a custom domain, not a free or temporary hosting subdomain. Force HTTPS.
* Pick one canonical version (https, www or non-www) and 301-redirect all others to it.
* Verify the site in Google Search Console (Domain property if possible) and set up GA4.
* Submit one clean XML sitemap with only indexable, 200-status, canonical URLs.
* Check robots.txt doesn't block Googlebot, CSS, or JS. Never noindex pages meant to rank.
* Keep a simple, logical site structure: important pages within 3 clicks of the homepage.

## 2. Search Intent and Keyword Research
* Start from what the searcher wants (informational, commercial, transactional, navigational) and build the page to satisfy that intent.
* One page = one primary intent. Avoid several pages competing for the same keyword (cannibalization).
* Go after long-tail, lower-competition queries first; new sites rarely win head terms.
* Study the current top 10 results: what format, depth, and angle do they use? Then add something better or missing.
* Use Search Console queries to find what you already almost rank for (positions 8-20) and improve those pages first.
* Group content into topic clusters: a pillar page linked to detailed supporting pages.

## 3. Content Quality (the biggest lever)
* Write for people first. Answer the main question early, then go deeper.
* Add original value: firsthand experience, original photos, data, examples, comparisons, tools, or clear explanations that other pages lack.
* Don't copy, spin, or lightly reword other sites. Don't publish AI-generated text without human review, fact-checking, and added value.
* Avoid mass-producing thin pages. Scaled low-value content violates Google's spam policies.
* Keep content accurate and current; show published and updated dates; refresh top pages every 3-6 months.
* Use short paragraphs, descriptive headings, tables, and lists where they help readers.
* Cite reliable sources and link out when it benefits the reader.

## 4. On-Page SEO Checklist (per page)
* Title tag: unique, about 50-60 characters, main keyword near the front, written to earn the click.
* Meta description: unique, about 140-160 characters, accurate, with a reason to click.
* One H1 matching the page's intent; logical H2/H3 structure.
* Short, descriptive, lowercase, hyphenated URLs.
* Image file names and alt text that describe the image; compressed WebP/AVIF; width and height set.
* Internal links with descriptive anchor text; no orphan pages; breadcrumbs on deep sites.
* Add FAQ sections only when they genuinely help and are visible on the page.

## 5. Technical SEO and Core Web Vitals
* Targets (field data, 75th percentile): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
* Design mobile-first and test on real devices.
* Optimize the largest above-the-fold image or element; lazy-load only below-the-fold images.
* Reduce render-blocking CSS/JS, third-party scripts, and heavy fonts; use caching and a CDN.
* Reserve space for images, embeds, and ads to prevent layout shift.
* Fix 404s, redirect chains, soft 404s, duplicate URLs, and broken internal links.
* Set correct rel="canonical", and use hreflang for multilingual sites.
* Monitor Search Console: Pages (indexing), Core Web Vitals, Manual actions, Security issues.

## 6. Structured Data (only when truthful)
* Use valid JSON-LD that matches visible page content: Organization, WebSite, BreadcrumbList, Article, Product, LocalBusiness, Review, FAQ (where eligible), Recipe, Event, etc.
* Never mark up content that isn't on the page or imply things that aren't true.
* Validate with Google's Rich Results Test; fix errors and warnings.

## 7. E-E-A-T and Trust
* Show real experience and expertise: author names, bios, credentials, and sources.
* Include About, Contact (real email or phone), Privacy Policy, Terms, and a Disclaimer where needed.
* Be transparent about who runs the site, how information is gathered, and how to report errors.
* For health, finance, legal, and safety topics ("Your Money or Your Life"), use qualified authors and cite authoritative sources.
* Don't misrepresent your identity or affiliation. If a site is unofficial or independent, say so clearly. Don't use another brand's logo or design as your own.

## 8. E-Commerce SEO (if applicable)
* Write unique product descriptions; don't paste manufacturer text.
* Use clear category pages with helpful intro content and filters that don't create endless indexable URLs.
* Add Product schema with price, availability, and reviews (only real reviews).
* Handle out-of-stock and discontinued products properly (keep, redirect, or 410 as appropriate).
* Use clean URLs, breadcrumbs, and fast image-heavy pages.
* Add shipping, return, and contact info; these build trust.

## 9. Local SEO (if applicable)
* Claim and complete the Google Business Profile; keep name, address, and phone consistent everywhere.
* Collect genuine reviews and respond to them.
* Create location pages with unique, useful content (not copy-pasted city swaps).
* Add LocalBusiness schema and embed a map.

## 10. Google AdSense Approval Checklist
* Own domain with HTTPS; site fully accessible to Google's crawler.
* Original, useful, substantial content in a clear niche. Google publishes no fixed post count; quality and completeness matter more than numbers.
* Required pages: Privacy Policy (with ad and cookie disclosure), About, Contact, plus Terms/Disclaimer.
* Easy navigation, working links, no "under construction" pages, no broken layouts.
* No copyright or trademark violations, scraped content, or prohibited or restricted content.
* Pages indexed and consistent publishing history before applying.
* Add ads.txt after approval with your publisher ID.
* If you serve users in the EEA, UK, or Switzerland, use a Google-certified consent management platform (CMP).
* Place ads responsibly: no accidental-click layouts, no ads that dominate content or push it below the fold.
* If rejected, read the exact reason, fix it, then reapply. Don't resubmit unchanged.
* Never click your own ads or encourage others to.

## 11. Link Building and Authority (safe methods only)
* Earn links by creating useful assets: original research, tools, templates, guides, comparisons.
* Pitch relevant bloggers, journalists, and communities with something genuinely helpful.
* Build brand presence: social profiles, legitimate directories, partnerships, guest posts on relevant sites.
* Prioritize relevance and quality over quantity.
* Never buy links, join link schemes, or spam comments and forums. Use disavow only for confirmed toxic link patterns.

## 12. Measure and Improve
* Review Search Console monthly:
  - High impressions + low CTR: rewrite the title and meta description.
  - Positions 8-20: expand content and add internal links.
  - Queries with no matching page: create new content.
  - Pages with traffic drops: check for intent shifts, competitors, technical errors, or outdated content.
* Track indexed pages, impressions, clicks, CTR, average position, conversions, and Core Web Vitals.
* Re-audit 30 days after major changes. SEO results usually take weeks to months.
* Check Google's official ranking update announcements and review any traffic changes around them.

## 13. Things to Never Do
* Don't keyword-stuff, hide text, use cloaking, doorway pages, or sneaky redirects.
* Don't copy or scrape content or images you don't have rights to.
* Don't buy low-quality traffic or fake engagement.
* Don't launch hundreds of thin or auto-generated pages at once.
* Don't change URLs or migrate a site without redirects and a plan.
* Don't promise guaranteed rankings or guaranteed AdSense approval.

## 14. Quick Audit Order (any site)
* Indexing and crawlability (robots.txt, sitemap, noindex, canonicals)
* Technical health (HTTPS, redirects, errors, mobile)
* Speed and Core Web Vitals
* Search intent and keyword mapping
* Content quality, originality, and E-E-A-T
* On-page elements and internal linking
* Structured data
* Trust pages and policy compliance (AdSense)
* Backlinks and authority
* Analytics, tracking, and a 30/60/90-day action plan
