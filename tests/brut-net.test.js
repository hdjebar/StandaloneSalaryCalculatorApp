'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { LuxPayroll: L, charger } = require('./aide.js');

const P = charger('2025-05');

// Profil : classe 1, 4 000 €/mois, aucune déduction saisie, règles de mai 2025.
//   Cotisations : maladie 122 ; pension 320 ; dépendance (4 000 − 675,93) × 1,4 % = 46,54 → 488,54 €/mois
//   Revenu net : 48 000 − (122 + 320) × 12 − 540 (art. 107) = 42 156 ; − 480 (art. 113) = 41 676 → 41 650 (art. 126)
//   Impôt (art. 118 et 120) : 28 % × 41 650 − 6 974,10 = 4 687,90 → 4 687 (art. 124)
//   Fonds pour l'emploi : 7 % × 4 687 = 328,09 → 328
//   CIS : 600 − 8 000 × 0,015 = 480 ; CI-CO2 : 192 − 8 000 × 0,0048 = 153,60 ; CISSM : 0 (brut ≥ 3 600)
//   Impôt net : 4 687 + 328 − 480 − 153,60 = 4 381,40 €/an, soit 365,12 €/mois
//   Net : 4 000 − 488,54 − 4 381,40 / 12 = 3 146,34 €
test('[à la main : LIR et avis CCSS] du brut au net, classe 1, 4 000 €/mois', () => {
  const r = L.calculer({ brutMensuel: 4000, classe: '1', enfants: 0 }, P);
  assert.equal(r.cotisationsSalarie.total, 488.54);
  assert.equal(r.revenu.revenuImposableAjuste, 41650);
  assert.equal(r.impot, 4687);
  assert.equal(r.fondsPourEmploi, 328);
  assert.equal(r.credits.cis, 480);
  assert.equal(r.credits.cico2, 153.6);
  assert.equal(r.impotNetAnnuel, 4381.4);
  assert.equal(r.netMensuel, 3146.34);
});

test('[à la main : LIR art. 122, al. 2] les enfants ne réduisent pas l\'impôt : la modération est incluse dans l\'allocation familiale', () => {
  const sans = L.calculer({ brutMensuel: 5000, classe: '2', enfants: 0 }, P);
  const avec = L.calculer({ brutMensuel: 5000, classe: '2', enfants: 2 }, P);
  assert.equal(avec.impot, sans.impot);
});

test('[à la main : LIR art. 109 et 113] dépenses spéciales : forfait de 480 € ou montants réels plafonnés', () => {
  const base = { brutMensuel: 4000, classe: '1', enfants: 0 };
  assert.equal(L.revenuImposable(base, P).depensesSpeciales, 480);
  assert.equal(L.revenuImposable({ ...base, primesAssurance: 1000 }, P).depensesSpeciales, 672);
  assert.equal(L.revenuImposable({ ...base, primesAssurance: 1000, prevoyanceVieillesse: 5000 }, P).depensesSpeciales, 672 + 3200);
  // Plafond de 672 € majoré pour le conjoint et chaque enfant (art. 109, al. 1, n° 1a) : 4 personnes → 2 688 €.
  assert.equal(L.revenuImposable({ brutMensuel: 4000, classe: '2', enfants: 2, primesAssurance: 5000 }, P).depensesSpeciales, 2688);
});

test('[à valider] le calcul complet reste stable sur quatre profils types (garde-fou de régression)', () => {
  // Valeurs relevées sur cette version, sans source officielle : elles servent à détecter un changement involontaire.
  const profils = [
    [{ brutMensuel: 3500, classe: '1', enfants: 0 }, 2855.33],
    [{ brutMensuel: 4500, classe: '1a', enfants: 1 }, 3640.19],
    [{ brutMensuel: 6500, classe: '2', enfants: 2 }, 5199.68],
    [{ brutMensuel: 12000, classe: '2', enfants: 2 }, 8279.38]
  ];
  for (const [entrees, net] of profils) assert.equal(L.calculer(entrees, P).netMensuel, net, JSON.stringify(entrees));
});
