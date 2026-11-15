#!/usr/bin/env node
// Imprime le tableau des paramètres (valeurs 2025 et 2026, source, statut) repris dans docs/sources.md.
'use strict';
const fs = require('fs');
const path = require('path');
const dossier = path.join(__dirname, '..', 'params');
const jeux = fs.readdirSync(dossier).filter((f) => /^\d{4}-\d{2}\.json$/.test(f)).sort()
  .map((f) => JSON.parse(fs.readFileSync(path.join(dossier, f), 'utf8')));

const court = (v) => {
  if (v === null || v === undefined) return '—';
  if (Array.isArray(v)) return v.length > 4 ? `${v.length} tranches` : v.map(court).join(' / ');
  if (typeof v === 'object') return Object.entries(v).filter(([, x]) => typeof x !== 'object' && typeof x !== 'string')
    .map(([k, x]) => `${k} ${x}`).join(' ; ') || 'voir le fichier';
  return String(v);
};
const lien = (s) => (s.url ? `[${s.article}](${s.url})` : s.article);

console.log(`| Paramètre | ${jeux.map((j) => j.meta.id).join(' | ')} | Source | Statut ${jeux.map((j) => j.meta.id).join(' / ')} |`);
console.log(`|---|${jeux.map(() => '---').join('|')}|---|---|`);
for (const id of Object.keys(jeux[jeux.length - 1].parametres)) {
  const ps = jeux.map((j) => j.parametres[id]);
  const der = ps[ps.length - 1];
  console.log(`| \`${id}\` : ${der.description} | ${ps.map((p) => (p ? court(p.valeur) : 'absent')).join(' | ')} | ${lien(der.source)} | ${ps.map((p) => (p ? p.statut : '—')).join(' / ')} |`);
}
