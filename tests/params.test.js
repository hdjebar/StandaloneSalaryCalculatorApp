'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { racine } = require('./aide.js');
const { generer } = require('../tools/construire-params.js');

const dossier = path.join(racine, 'params');
const jeux = fs.readdirSync(dossier).filter((f) => /^\d{4}-\d{2}\.json$/.test(f));
const STATUTS = ['vérifié', 'modifié', 'non trouvé', 'vérifié (source ACD) ; article de loi à confirmer'];

test('chaque paramètre porte description, unité, statut et source', () => {
  assert.ok(jeux.length >= 1);
  for (const f of jeux) {
    const j = JSON.parse(fs.readFileSync(path.join(dossier, f), 'utf8'));
    assert.ok(j.meta && j.meta.id && j.meta.en_vigueur_au, `${f} : meta`);
    for (const [id, p] of Object.entries(j.parametres)) {
      const ou = `${f} → ${id}`;
      for (const champ of ['description', 'unite', 'statut', 'source']) assert.ok(champ in p, `${ou} : champ ${champ} absent`);
      assert.ok('valeur' in p && 'date_effet' in p, `${ou} : valeur ou date_effet absente`);
      assert.ok(STATUTS.includes(p.statut), `${ou} : statut inconnu « ${p.statut} »`);
      if (p.statut !== 'non trouvé') {
        assert.ok(p.source.url && p.source.article && p.date_effet, `${ou} : une valeur vérifiée doit citer article, URL et date d'effet`);
      }
    }
  }
});

test('params/params.js correspond exactement aux fichiers JSON', () => {
  assert.equal(fs.readFileSync(path.join(dossier, 'params.js'), 'utf8'), generer(),
    'lancer : node tools/construire-params.js');
});
