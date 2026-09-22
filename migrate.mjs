import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const SOURCE_DIR = 'D:\\Hermes\\DairyQueenClone\\url_named_pages';
const DEST_DIR = 'src/pages';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processHtmlFile(filePath) {
  const relPath = path.relative(SOURCE_DIR, filePath);
  let targetPath = path.join(DEST_DIR, relPath);
  
  // Convert .html to .astro
  targetPath = targetPath.replace(/\.html$/, '.astro');

  // Ensure target dir exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);

  // Extract main content - looking for <main>, fallback to <body>
  let mainContentHtml = '';
  
  if ($('main').length > 0) {
    mainContentHtml = $('main').html();
  } else {
    // If no main, strip headers, footers, etc.
    const body = $('body');
    body.find('header.site-header').remove();
    body.find('footer.site-footer').remove();
    body.find('footer').remove();
    body.find('.top-bar').remove();
    body.find('.disclaimer-strip').remove();
    mainContentHtml = body.html();
  }

  // Find all links and update them
  const $fragment = cheerio.load(mainContentHtml, null, false);
  
  // Update <a> tags
  $fragment('a').each((i, el) => {
    let href = $fragment(el).attr('href');
    if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      if (href.endsWith('.html')) {
        $fragment(el).attr('href', href.replace(/\.html$/, ''));
      } else if (href.includes('.html#')) {
        $fragment(el).attr('href', href.replace(/\.html#/, '#'));
      }
      
      let newHref = $fragment(el).attr('href');
      if (newHref && !newHref.startsWith('/') && !newHref.startsWith('#')) {
         $fragment(el).attr('href', '/' + newHref);
      }
    }
  });

  // Update <img> tags to always point to root /Images/...
  $fragment('img').each((i, el) => {
    let src = $fragment(el).attr('src');
    if (src) {
      // Fix relative paths to /Images/...
      src = src.replace(/^(\.\.\/)+Images\//i, '/Images/');
      src = src.replace(/^Images\//i, '/Images/');
      
      // Fallback for 404 images
      if (src.includes('brownie-batter-blizzard.webp')) {
        src = '/Images/choco-brownie-blizzard.webp';
      } else if (src.includes('pumpkin-pie-blizzard.webp')) {
        src = '/Images/banana-cream-pie-blizzard.webp';
      } else if (src.includes('royal-reeses-blizzard.webp')) {
        src = '/Images/reeses-blizzard.webp';
      } else if (src.includes('swicy-pineapple-tajin-blizzard.webp')) {
        src = '/Images/swicy-blizzard.webp';
      }

      $fragment(el).attr('src', src);
    }
  });
  
  mainContentHtml = $fragment.html();

  // Extract title and description
  let title = $('title').text() || 'The Dairy Queen Menu With Prices 2026';
  let description = $('meta[name="description"]').attr('content') || 'Complete Dairy Queen menu with prices and calories for 2026.';
  
  // Create Astro component
  let layoutPath = path.relative(path.dirname(targetPath), 'src/layouts/Layout.astro').replace(/\\/g, '/');
  if (!layoutPath.startsWith('.')) {
    layoutPath = './' + layoutPath;
  }

  const astroCode = `---
import Layout from '${layoutPath}';
---
<Layout title="${title.replace(/"/g, '&quot;')}" description="${description.replace(/"/g, '&quot;')}">
  ${mainContentHtml}
</Layout>
`;

  fs.writeFileSync(targetPath, astroCode, 'utf8');
}

walkDir(SOURCE_DIR, (filePath) => {
  if (filePath.endsWith('.html')) {
    processHtmlFile(filePath);
  }
});
console.log('Migration complete with absolute image paths and link fixes!');
