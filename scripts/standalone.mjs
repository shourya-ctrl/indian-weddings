// Builds a self-contained HTML file of one page of the site.
//   npm run standalone            -> standalone/indianweddings-noor.html
//   npm run standalone -- /vendors -> standalone/indianweddings-vendors.html
// Script, styles and fonts are inlined; photographs still load from the
// photographer's site, so viewing them needs a connection.
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const page = process.argv[2] || '/noor';
const name = page.replace(/^\/+|\/+$/g, '').replace(/\//g, '-') || 'home';
execSync('npx vite build --config vite.standalone.config.js', {
  stdio: 'inherit',
  env: { ...process.env, VITE_START_PATH: page },
});

const dist = 'dist-standalone';
const files = readdirSync(join(dist, 'assets'));
const js = readFileSync(join(dist, 'assets', files.find(f => f.endsWith('.js'))), 'utf8');
let css = readFileSync(join(dist, 'assets', files.find(f => f.endsWith('.css'))), 'utf8');

// Fonts referenced from /fonts/ become data URIs.
css = css.replace(/url\(["']?\/fonts\/([^"')]+)["']?\)/g, (_, f) =>
  `url(data:font/woff2;base64,${readFileSync(join('public/fonts', f)).toString('base64')})`);

let html = readFileSync(join(dist, 'index.html'), 'utf8')
  .replace(/<script[^>]*src="[^"]+"[^>]*><\/script>/, '')
  .replace(/<link[^>]*rel="stylesheet"[^>]*>/, '')
  .replace(/<link[^>]*rel="(preload|modulepreload)"[^>]*>\s*/g, ''); // fonts are inlined below
html = html
  .replace('</head>', () => `<style>${css}</style>\n</head>`)
  .replace('</body>', () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>\n</body>`);

mkdirSync('standalone', { recursive: true });
const out = join('standalone', `indianweddings-${name}.html`);
writeFileSync(out, html);
console.log(`\nWrote ${out} (${Math.round(html.length / 1024)} KB)`);
