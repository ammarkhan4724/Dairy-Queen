// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thequeendairymenu.us',

  // Canonical URLs never end with a slash (except "/"). Pages are emitted as
  // flat files (items/oreo-blizzard.html) and served extensionless by
  // public/.htaccess, which 301s any slash or .html variant to the clean URL.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },

  vite: {
    plugins: [tailwindcss()]
  },
});
