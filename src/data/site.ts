// Single source of truth for sitewide SEO/trust settings.
export const SITE_URL = 'https://www.thequeendairymenu.us';
export const SITE_NAME = 'The Queen Dairy Menu';

// Official off-site profiles (footer links + Organization sameAs).
export const SOCIAL_LINKS = [
  { name: 'Linktree', url: 'https://linktr.ee/TheQueenDairyMenu' },
];

// Update this whenever prices are re-checked (shown on every menu page).
export const LAST_CHECKED = 'October 2026';

export const DISCLAIMER =
  'Unofficial guide. Not affiliated with or endorsed by International Dairy Queen, Inc. Prices vary by location.';

// Blog author shown in the author box and in Article schema.
// TODO: replace with the real editor's name and bio for stronger E-E-A-T.
export const AUTHOR = {
  name: 'The Queen Dairy Menu Editorial Team',
  url: `${SITE_URL}/about`,
  bio: 'We are an independent team of fast-food fans who track Dairy Queen menu prices, calories and deals across U.S. locations. We compare in-store menu boards, the DQ app and nutrition information, and update our guides when prices or items change. We are not employed by or affiliated with Dairy Queen.',
};

/** Turn a site path into its canonical absolute URL (no trailing slash, no .html). */
export function canonical(path: string): string {
  let p = path.replace(/\.html$/, '').replace(/\/index$/, '');
  if (p !== '/') p = p.replace(/\/+$/, '');
  return new URL(p || '/', SITE_URL).href;
}
