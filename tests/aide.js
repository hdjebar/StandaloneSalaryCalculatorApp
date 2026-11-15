// Outils communs aux tests.
//
// Convention de nommage des tests, pour savoir ce qui vaut preuve :
//   [officiel]   valeur attendue lue dans une publication officielle (source citée dans la fixture) ;
//   [à la main]  valeur attendue calculée à la main à partir du texte légal cité dans le test ;
//   [à valider]  valeur attendue sans source officielle : le test protège contre les régressions
//                mais ne prouve pas que le résultat est juste.
'use strict';
const path = require('path');

const racine = path.join(__dirname, '..');
const LuxPayroll = require(path.join(racine, 'calc.js'));

function charger(id) {
  return require(path.join(racine, 'params', `${id}.json`));
}

const proche = (assert, obtenu, attendu, tolerance, message) =>
  assert.ok(Math.abs(obtenu - attendu) <= tolerance, `${message} : obtenu ${obtenu}, attendu ${attendu} (± ${tolerance})`);

module.exports = { racine, LuxPayroll, charger, proche };
