'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { LuxPayroll: L, charger } = require('./aide.js');

const P25 = charger('2025-05');

// LIR art. 154quater, al. 2 : CIS = 300 + (brut − 936) × 0,029 de 936 à 11 265 € ; 600 € jusqu'à 40 000 € ;
// 600 − (brut − 40 000) × 0,015 de 40 001 à 79 999 € ; rien sous 936 € ni à partir de 80 000 € ; arrondi au cent supérieur.
test('[à la main : LIR art. 154quater] CIS aux bornes 936, 11 265, 40 000 et 80 000 €', () => {
  const cas = [
    [935, 0],
    [936, 300],
    [5000, 417.86],          // 300 + 4 064 × 0,029 = 417,856 → 417,86
    [11265, 599.55],         // 300 + 10 329 × 0,029 = 599,541 → 599,55 (cent supérieur)
    [11266, 600],
    [40000, 600],
    [40001, 599.99],         // 600 − 0,015 = 599,985 → 599,99
    [60000, 300],
    [79999, 0.02],           // 600 − 39 999 × 0,015 = 0,015 → 0,02
    [80000, 0]
  ];
  for (const [brut, attendu] of cas) assert.equal(L.creditCIS(brut, P25), attendu, `brut annuel ${brut}`);
});

// LIR art. 154quater, al. 2 (texte au 1er janvier 2025) : CI-CO2 = 192 € de 936 à 40 000 €, puis 192 − (brut − 40 000) × 0,0048.
test('[à la main : LIR art. 154quater, 2025] CI-CO2 aux bornes', () => {
  const cas = [[935, 0], [936, 192], [40000, 192], [40001, 192], [60000, 96], [79999, 0.01], [80000, 0]];
  // 40 001 € : 192 − 0,0048 = 191,9952 → 192,00 (cent supérieur) ; 79 999 € : 192 − 191,9952 = 0,0048 → 0,01
  for (const [brut, attendu] of cas) assert.equal(L.creditCICO2(brut, P25), attendu, `brut annuel ${brut}`);
});

// LIR art. 139quater, al. 3 : 81 €/mois de 1 800 à 3 000 € ; 81/600 × (3 600 − brut) de 3 000 à 3 600 € ; rien hors de [1 800 ; 3 600[.
test('[à la main : LIR art. 139quater] CISSM aux bornes 1 800, 3 000 et 3 600 €', () => {
  const cas = [[1799.99, 0], [1800, 81], [2703.74, 81], [3000, 81], [3300, 40.5], [3500, 13.5], [3599.99, 0.01], [3600, 0]];
  // 3 599,99 € : 81/600 × 0,01 = 0,00135 → 0,01 (cent supérieur)
  for (const [brut, attendu] of cas) assert.equal(L.creditCISSM(brut, P25), attendu, `brut mensuel ${brut}`);
});

test('[à la main : LIR art. 154quater] les crédits sont restituables : l\'impôt net peut être négatif au salaire minimum', () => {
  // Impôt 1 623 € + fonds pour l'emploi 113 € < CIS 600 € + CI-CO2 192 € + CISSM 12 × 81 € = 1 764 €.
  const r = L.calculer({ brutMensuel: 2703.74, classe: '1', enfants: 0 }, P25);
  assert.equal(r.impot + r.fondsPourEmploi, 1736);
  assert.equal(r.credits.total, 1764);
  assert.equal(r.impotNetAnnuel, -28);
  assert.equal(r.credits.cissmMensuel, 81);
});
