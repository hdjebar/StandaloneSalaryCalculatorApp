'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { LuxPayroll: L, charger } = require('./aide.js');

const P25 = charger('2025-05');
const P26 = charger('2026-01');

// LIR art. 154quater, al. 2, texte coordonné au 1er janvier 2026 : 216 € de 936 à 40 000 €,
// puis 216 − (brut − 40 000) × 0,0054 jusqu'à 79 999 € (hausse de 24 € confirmée par la newsletter ACD du 23.12.2025).
test('[à la main : LIR art. 154quater, 2026] CI-CO2 aux bornes', () => {
  const cas = [[935, 0], [936, 216], [40000, 216], [60000, 108], [79999, 0.01], [80000, 0]];
  for (const [brut, attendu] of cas) assert.equal(L.creditCICO2(brut, P26), attendu, `brut annuel ${brut}`);
});

test('[à la main : LIR art. 118, 120bis, 121] barème et classes identiques en 2025 et 2026', () => {
  for (const classe of ['1', '1a', '2']) {
    for (const R of [20000, 45000, 80000, 160000, 320000]) {
      assert.equal(L.impotSurLeRevenu(R, classe, P26), L.impotSurLeRevenu(R, classe, P25), `classe ${classe}, ${R}`);
    }
  }
});

test('[à la main : avis CCSS du 16.01.2026] pension à 8,5 % pour le salarié et l\'employeur', () => {
  assert.equal(L.cotisationsSalarie(4000, P26).pension, 340);
  assert.equal(L.cotisationsEmployeur(4000, { classeMutualite: 1, facteurAccident: 1 }, P26).pension, 340);
  assert.equal(L.cotisationsEmployeur(4000, { classeMutualite: 1, facteurAccident: 1 }, P26).accident, 26);   // 0,65 %
  assert.equal(L.cotisationsEmployeur(4000, { classeMutualite: 1, facteurAccident: 1 }, P26).mutualite, 9.2); // 0,23 %
});

test('[à la main : LIR art. 111bis, 2026] plafond de prévoyance-vieillesse porté à 4 500 €', () => {
  const r = L.revenuImposable({ brutMensuel: 5000, classe: '1', enfants: 0, prevoyanceVieillesse: 6000 }, P26);
  assert.equal(r.depensesSpeciales, 4500);
});

test('[à la main] l\'allocation familiale 2026 n\'est pas affichée faute de source officielle consultée', () => {
  assert.equal(L.calculer({ brutMensuel: 4000, classe: '2', enfants: 2 }, P26).allocationFamilialeMensuelle, null);
});
