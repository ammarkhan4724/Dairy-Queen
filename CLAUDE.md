## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## SEO rules for thequeendairymenu.us

Unofficial Dairy Queen menu and price guide. NOT affiliated with Dairy Queen and does not sell food. Production URL: https://www.thequeendairymenu.us (www, https).

- Canonical URLs never end with a trailing slash (except `/`). `astro.config.mjs` uses `trailingSlash: 'never'` + `build.format: 'file'`; `public/.htaccess` 301s slash, `.html` and `index.html` variants to the clean URL in one hop.
- Never add Product, Offer, AggregateRating, Review or Merchant schema. Use FAQPage, BlogPosting (blog), Organization/WebSite (homepage only, in `Layout.astro`). BreadcrumbList comes from `src/components/Breadcrumbs.astro`; do not hand-write it.
- Prices are "typical, vary by location" with a last-checked date: update `LAST_CHECKED` in `src/data/site.ts` after re-checking prices.
- Do not use Dairy Queen logos or copy text from dairyqueen.com.
- Item pages are generated: edit copy in `item_content/*.py`, then run `python build_item_pages.py` (do not hand-edit generated `src/pages/items/*.astro`; cake pages and a few hand-written ones use `src/layouts/ItemPage.astro` directly).
- After adding or renaming pages: `python generate_related.py`, `python generate_sitemap.py`, `npm run build`, then `python seo_check.py` (must report 0 problems).
