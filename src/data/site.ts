// Single source of truth for sitewide SEO/trust settings.
export const SITE_URL = 'https://www.thequeendairymenu.us';
export const SITE_NAME = 'The Queen Dairy Menu';

// Update this whenever prices are re-checked (shown on every menu page).
export const LAST_CHECKED = 'October 2026';

export const DISCLAIMER =
  'Unofficial guide. Not affiliated with or endorsed by International Dairy Queen, Inc. Prices vary by location.';

// Blog author shown in the author box and in BlogPosting schema (matches the editor on /about).
export const AUTHOR = {
  name: 'Ammar',
  role: 'Editor, The Queen Dairy Menu',
  url: `${SITE_URL}/about`,
  bio: 'Ammar is the editor of The Queen Dairy Menu, a fast-food fan and deal hunter who tracks Dairy Queen prices, calories and deals across U.S. locations. He compares in-store menu boards, the DQ app and published nutrition information, and updates these guides when prices or items change. This site is not employed by or affiliated with Dairy Queen.',
};

/** Turn a site path into its canonical absolute URL (no trailing slash, no .html). */
export function canonical(path: string): string {
  let p = path.replace(/\.html$/, '').replace(/\/index$/, '');
  if (p !== '/') p = p.replace(/\/+$/, '');
  return new URL(p || '/', SITE_URL).href;
}
