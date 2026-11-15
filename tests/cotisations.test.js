'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { LuxPayroll: L, charger, proche } = require('./aide.js');

const P = charger('2025-05');

// Taux et plafonds : avis du CCSS cités dans params/2025-05.json.
test('[à la main : avis CCSS 2025] cotisations du salarié sous le plafond', () => {
  const c = L.cotisationsSalarie(4000, P);
  assert.equal(c.maladie, 122);                      // 4 000 × 3,05 %
  assert.equal(c.pension, 320);                      // 4 000 × 8 %
  assert.equal(c.dependance, 46.54);                 // (4 000 − 675,93) × 1,4 % = 46,537
});

test('[à la main : avis CCSS 2025] plafond de 13 518,68 € pour maladie et pension, pas pour la dépendance', () => {
  const c = L.cotisationsSalarie(20000, P);
  assert.equal(c.maladie, 412.32);                   // 13 518,68 × 3,05 % = 412,32
  assert.equal(c.pension, 1081.49);                  // 13 518,68 × 8 % = 1 081,49
  assert.equal(c.dependance, 270.54);                // (20 000 − 675,93) × 1,4 % = 270,537
});

test('[à la main : avis CCSS 2025] cotisations de l\'employeur : classe de mutualité et facteur bonus-malus', () => {
  const c = L.cotisationsEmployeur(4000, { classeMutualite: 2, facteurAccident: 1.1 }, P);
  assert.equal(c.mutualite, 39.6);                   // 4 000 × 0,99 %
  assert.equal(c.accident, 30.8);                    // 4 000 × 0,70 % × 1,1
  assert.equal(c.pension, 320);
  assert.throws(() => L.cotisationsEmployeur(4000, { classeMutualite: 5 }, P));
  assert.throws(() => L.cotisationsEmployeur(4000, { facteurAccident: 0.9 }, P));
});

test('[à la main] le passage coût employeur → brut est l\'inverse exact du calcul, plafond compris', () => {
  for (const brut of [2703.74, 5000, 13518.68, 20000]) {
    const opts = { classeMutualite: 3, facteurAccident: 1.3 };
    const cout = brut + Object.entries(L.tauxEmployeur(opts, P))
      .reduce((s, [, tx]) => s + Math.min(brut, 13518.68) * tx, 0);
    proche(assert, L.brutDepuisCoutEmployeur(cout, opts, P), brut, 1e-6, `brut ${brut}`);
  }
});

test('[à la main : LIR art. 110] seules les cotisations maladie et pension réduisent le revenu imposable', () => {
  const r = L.revenuNetSalaire(4000, {}, P);
  assert.equal(r.cotisationsDeductibles, (122 + 320) * 12);
});

test('[à la main : LIR art. 105bis] forfait de déplacement : 99 € par unité au-delà de 4, plafonné à 2 574 €', () => {
  assert.equal(L.fraisDeplacement(4, P), 0);
  assert.equal(L.fraisDeplacement(10, P), 594);
  assert.equal(L.fraisDeplacement(30, P), 2574);
  assert.equal(L.fraisDeplacement(45, P), 2574);
});

test('[à la main : LIR art. 127, al. 4] seuil des charges extraordinaires selon le revenu et la classe', () => {
  assert.equal(L.tauxChargesExtraordinaires(45000, '1', 0, P), 0.08);
  assert.equal(L.tauxChargesExtraordinaires(45000, '1a', 1, P), 0.05);
  assert.equal(L.tauxChargesExtraordinaires(65000, '2', 2, P), 0.05);
  assert.equal(L.tauxChargesExtraordinaires(9000, '2', 0, P), 0);
});
