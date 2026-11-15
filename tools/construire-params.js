#!/usr/bin/env node
// Construit params/params.js à partir des fichiers params/AAAA-MM.json.
// Les fichiers JSON restent la source ; params.js existe seulement pour que index.html
// fonctionne ouvert directement (file://), où le navigateur interdit de lire un JSON local.
// Usage : node tools/construire-params.js          (écrit le fichier)
//         node tools/construire-params.js --check  (échoue si le fichier n'est pas à jour)
'use strict';
const fs = require('fs');
const path = require('path');

const dossier = path.join(__dirname, '..', 'params');

function generer() {
  const fichiers = fs.readdirSync(dossier).filter((f) => /^\d{4}-\d{2}\.json$/.test(f)).sort();
  const jeux = {};
  for (const f of fichiers) jeux[f.replace('.json', '')] = JSON.parse(fs.readFileSync(path.join(dossier, f), 'utf8'));
  return '// Fichier généré par tools/construire-params.js à partir de params/*.json : ne pas modifier à la main.\n' +
    '(function (racine) {\n' +
    '  racine.LUX_PARAMS = ' + JSON.stringify(jeux, null, 2).replace(/\n/g, '\n  ') + ';\n' +
    "})(typeof globalThis !== 'undefined' ? globalThis : this);\n";
}

if (require.main === module) {
  const cible = path.join(dossier, 'params.js');
  const contenu = generer();
  if (process.argv.includes('--check')) {
    const actuel = fs.existsSync(cible) ? fs.readFileSync(cible, 'utf8') : '';
    if (actuel !== contenu) { console.error('params/params.js n\'est pas à jour : lancer node tools/construire-params.js'); process.exit(1); }
    console.log('params/params.js est à jour.');
  } else {
    fs.writeFileSync(cible, contenu);
    console.log('params/params.js écrit.');
  }
}
module.exports = { generer };
