// Vérifie qu'aucune requête ne quitte l'application au chargement et pendant un calcul.
// Outil facultatif (non lancé par `node --test`) : il demande Playwright et Chrome.
//   npx playwright install chromium   # une fois
//   node tools/verifier-reseau.mjs [url]   # par défaut : le fichier index.html local
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const cible = process.argv[2] || pathToFileURL(path.resolve('index.html')).href;
const origine = cible.startsWith('file:') ? 'file:' : new URL(cible).origin;
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });
const page = await browser.newPage();
const requetes = [];
const externes = [];
page.on('request', (r) => {
  requetes.push(r.url());
  const u = r.url();
  const locale = u.startsWith('data:') || (origine === 'file:' ? u.startsWith('file:') : u.startsWith(origine));
  if (!locale) externes.push(u);
});
const erreurs = [];
page.on('pageerror', (e) => erreurs.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') erreurs.push(m.text()); });

await page.goto(cible, { waitUntil: 'networkidle' });
await page.selectOption('#taxClass', '2');
await page.fill('#salaryInput', '6500');
await page.fill('#numChildren', '2');
await page.click('#calculateBtn');
await page.waitForSelector('#resultsSection:not(.d-none)');
await page.waitForTimeout(800);
const net = await page.textContent('#monthlyNetSalary');
await browser.close();

console.log(`Page : ${cible}`);
console.log(`Requêtes observées : ${requetes.length}`);
for (const u of requetes) console.log(`  ${u.length > 120 ? u.slice(0, 117) + '...' : u}`);
console.log(`Salaire net affiché (classe 2, 6 500 €, 2 enfants) : ${net}`);
if (erreurs.length) { console.log('Erreurs JavaScript :'); erreurs.forEach((e) => console.log('  ' + e)); }
if (externes.length) {
  console.error(`ÉCHEC : ${externes.length} requête(s) externe(s) :`);
  externes.forEach((u) => console.error('  ' + u));
  process.exit(1);
}
console.log('OK : aucune requête hors de l\'application.');
if (erreurs.length) process.exit(2);
