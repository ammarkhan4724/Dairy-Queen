import fs from 'fs';
import path from 'path';
import https from 'https';

const srcDir = 'D:/Hermes/DairyQueenClone/url_named_pages';
const outDir = path.resolve('public/Images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = new Set();

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      if (f !== '.git') walk(p);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(p, 'utf8');
      const re = /Images\/([a-zA-Z0-9_\-\.]+\.(?:webp|svg|png|jpg|jpeg|ico))/gi;
      let m;
      while ((m = re.exec(content)) !== null) {
        images.add(m[1]);
      }
    }
  }
}

walk(srcDir);
console.log(`Found ${images.size} unique image files.`);

async function downloadFile(filename) {
  const dest = path.join(outDir, filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    return;
  }
  const url = `https://www.thedairyqueenmenu.us/Images/${filename}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve(true);
        });
      } else {
        console.warn(`Failed (${res.statusCode}): ${filename}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${filename}:`, err.message);
      resolve(false);
    });
  });
}

for (const img of images) {
  await downloadFile(img);
}

console.log('All downloads finished!');
