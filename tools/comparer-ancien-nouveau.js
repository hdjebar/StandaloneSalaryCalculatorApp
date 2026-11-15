#!/usr/bin/env node
// Compare l'ancien calcul (version 3.4.3) et le nouveau sur des profils types.
// Usage : node tools/comparer-ancien-nouveau.js   (imprime les tableaux Markdown de docs/ecarts.md)
'use strict';
const path = require('path');
const L = require('../calc.js');
const { ancienCalcul } = require('./ancien-calcul-3.4.3.js');
const P25 = require('../params/2025-05.json');
const P26 = require('../params/2026-01.json');

const PROFILS = [
  { nom: 'A. Classe 1, 3 500 €/mois, sans enfant', classe: '1', brutMensuel: 3500, enfants: 0 },
  { nom: 'B. Classe 1a, 4 500 €/mois, 1 enfant', classe: '1a', brutMensuel: 4500, enfants: 1 },
  { nom: 'C. Classe 2, 6 500 €/mois, 2 enfants, conjoint sans revenu', classe: '2', brutMensuel: 6500, enfants: 2 },
  { nom: 'D. Classe 1, 9 000 €/mois, sans enfant', classe: '1', brutMensuel: 9000, enfants: 0 }
];
// Ancienne interface : mutualité « classe B » (coefficient 1,0). Nouvelle : mutualité classe 2, bonus-malus 1,00.
const EMPLOYEUR = { classeMutualite: 2, facteurAccident: 1 };

const e = (x) => x.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const ecart = (a, b) => (b - a >= 0 ? '+' : '') + (b - a).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

for (const p of PROFILS) {
  const ancien = ancienCalcul({ ...p, coefficientMutualite: 1.0 });
  const n25 = L.calculer({ ...p, ...EMPLOYEUR }, P25);
  const n26 = L.calculer({ ...p, ...EMPLOYEUR }, P26);
  const lignes = [
    ['Revenu imposable (annuel)', ancien.revenuImposable, n25.revenu.revenuImposableAjuste, n26.revenu.revenuImposableAjuste],
    ['Impôt + fonds pour l\'emploi, avant crédits (annuel)', ancien.impotAvantCredits, n25.impotAvantCredits, n26.impotAvantCredits],
    ['Crédits d\'impôt déduits (annuel)', ancien.credits, n25.credits.total, n26.credits.total],
    ['Impôt net (mensuel)', ancien.impotNetAnnuel / 12, n25.impotNetMensuel, n26.impotNetMensuel],
    ['Cotisations salarié (mensuel)', ancien.cotisationsSalarie, n25.cotisationsSalarie.total, n26.cotisationsSalarie.total],
    ['**Salaire net (mensuel)**', ancien.netMensuel, n25.netMensuel, n26.netMensuel],
    ['Coût employeur (mensuel)', ancien.coutEmployeur, n25.coutEmployeurMensuel, n26.coutEmployeurMensuel]
  ];
  console.log(`### ${p.nom}\n`);
  console.log('| | Avant (3.4.3) | Après, règles mai 2025 | Écart | Après, règles 2026 |');
  console.log('|---|---:|---:|---:|---:|');
  for (const [lib, a, b, c] of lignes) console.log(`| ${lib} | ${e(a)} | ${e(b)} | ${ecart(a, b)} | ${e(c)} |`);
  console.log('');
}
