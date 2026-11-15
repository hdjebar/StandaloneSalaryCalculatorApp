# 🇱🇺 Luxembourg Payroll Estimator / Estimateur de paie luxembourgeois

[![Tests](https://github.com/hdjebar/StandaloneSalaryCalculatorApp/actions/workflows/tests.yml/badge.svg)](https://github.com/hdjebar/StandaloneSalaryCalculatorApp/actions/workflows/tests.yml)
[![Version](https://img.shields.io/badge/version-3.5.0-blue.svg)](CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Français](#français) · [English](#english)

---

## Français

Outil **indicatif** qui estime, pour un salarié résident au Luxembourg : le salaire net, le coût employeur, les
cotisations sociales, l'impôt sur le revenu, la contribution au fonds pour l'emploi et les crédits d'impôt
CIS, CI-CO2 et CISSM. Tout le calcul se fait dans le navigateur, sans serveur ni connexion.

### Ce que l'outil calcule

1. Cotisations sociales du salarié et de l'employeur (taux publiés par le CCSS, plafond de 5 × le salaire social
   minimum, abattement de la contribution dépendance).
2. Revenu imposable : cotisations maladie et pension (art. 110 LIR), frais d'obtention (art. 107), forfait de
   déplacement (art. 105bis), dépenses spéciales (art. 109, 111bis, 113), charges extraordinaires (art. 127),
   arrondi à 50 € (art. 126).
3. Impôt selon la classe : classe 1 (art. 120), classe 1a (art. 120bis), classe 2 par splitting (art. 121) ;
   arrondis de l'art. 124.
4. Contribution au fonds pour l'emploi : 7 %, ou 9 % au-delà de 150 000 € (classes 1 et 1a) ou 300 000 €
   (classe 2), avec le lissage des formules de l'ACD.
5. Crédits d'impôt CIS et CI-CO2 (art. 154quater) et CISSM (art. 139quater), restituables : l'impôt net peut être
   négatif.
6. Impôt annuel divisé par douze, puis salaire net mensuel.

Deux jeux de règles sont proposés : **mai 2025** et **1er janvier 2026**. Le détail de chaque valeur et de sa
source est dans [`docs/sources.md`](docs/sources.md) ; l'effet de cette version par rapport à la précédente est
dans [`docs/ecarts.md`](docs/ecarts.md).

### Exactitude

Le barème et le calcul des trois classes d'impôt sont vérifiés au centime par des tests automatiques contre les
65 formules publiées par l'ACD pour 2025 et contre 26 exemples chiffrés publiés par le ministère des Finances.
Les crédits d'impôt, les cotisations et le passage du brut au net sont testés à partir des textes cités, aux
bornes de chaque tranche. Les autres valeurs suivent les textes listés dans `docs/sources.md` ; celles que je
n'ai pas pu sourcer y sont signalées.

### Limites

- **Outil indicatif.** Il ne remplace ni la retenue d'impôt calculée par l'employeur, ni le décompte annuel, ni
  l'imposition établie par l'Administration des contributions directes (ACD).
- **Impôt annuel, pas retenue mensuelle.** L'impôt affiché est l'impôt annuel divisé par douze. La retenue sur la
  fiche de paie suit les barèmes du règlement grand-ducal et peut différer de quelques euros par mois
  (exemple chiffré dans `docs/ecarts.md`).
- **Règles datées.** Mai 2025 et 1er janvier 2026. Non intégrés : l'indexation du 1er juin 2026 et le crédit
  d'impôt conjoncture 2026 (projet de loi n° 8775).
- **Approximations restantes** : plafond des frais de garde (11 400 € par enfant) et minimum de 120 € pour les
  dons sans source vérifiée ; intérêts du logement déduits sans les plafonds de l'art. 98bis ; classe 2 calculée
  avec un conjoint sans revenu ; crédit d'impôt monoparental (CIM), non-résidents et salaires non périodiques
  non traités ; allocation familiale affichée à titre d'information et non vérifiée.

### Confidentialité

- Le calcul est fait entièrement sur votre appareil. **Aucune donnée n'est transmise** : l'application ne fait
  aucune requête réseau, ne charge aucune police, feuille de style ou image externe, et n'utilise ni cookie ni
  outil de mesure d'audience.
- Le formulaire est gardé dans le `localStorage` du navigateur (clé `luxPayrollCalculatorState.v2`) pour le
  retrouver à la prochaine ouverture. Il expire après 7 jours et s'efface avec le bouton **Clear Form**, ou en
  supprimant les données du site dans le navigateur.
- L'export produit un fichier JSON enregistré localement ; le partage passe par le menu de partage de
  l'appareil ou par le presse-papiers.

### Utilisation hors ligne

- **Ouvrir directement** : télécharger le dépôt et ouvrir `index.html` dans un navigateur. Aucune installation,
  aucune compilation.
- **Comme application web (PWA)** : servir le dossier en local (`python3 -m http.server 8080`), ouvrir
  `http://localhost:8080`, puis « Installer » dans Chrome ou Edge (ou « Ajouter à l'écran d'accueil » sur
  mobile). Le service worker garde une copie des fichiers pour l'usage hors ligne.
- **Application de bureau** : `npm install` puis `npm run electron` (enveloppe Electron dans `main.js`).

### Vérifier qu'aucune requête ne sort

1. **Par le code** : `grep -nE "https?://" index.html calc.js sw.js manifest.json params/params.js`. Les seules
   URL sont des commentaires, l'espace de noms SVG et les adresses des sources légales rangées dans les paramètres
   (des données, jamais chargées). Le workflow CI fait ce contrôle à chaque modification.
2. **Par le navigateur** : la page déclare une politique de sécurité (CSP) qui interdit toute ressource hors du
   dossier de l'application. Ouvrir les outils de développement, onglet **Réseau**, recharger la page et lancer
   un calcul : seuls des fichiers du dossier de l'application apparaissent (`index.html`, `params/params.js`,
   `calc.js`, l'icône, et en http `manifest.json` et `sw.js`).
3. **Automatiquement** : `node tools/verifier-reseau.mjs` ouvre la page dans Chrome (Playwright), lance un
   calcul et échoue si une requête sort de l'application.

Seule exception, côté application de bureau : le menu Aide d'Electron contient un lien vers le site de l'ACD,
qui ne s'ouvre dans le navigateur que si on clique dessus.

### Paramètres et tests

- `params/2025-05.json` et `params/2026-01.json` : une entrée par paramètre, avec `valeur`, `unite`,
  `date_effet`, `source` (`texte`, `article`, `url`) et `statut` (`vérifié`, `modifié`, `non trouvé`). Ce
  format est voisin des fichiers de paramètres OpenFisca (valeur, unité, date, référence), pour pouvoir le
  relier aux fichiers YAML prévus dans le dépôt [`hdjebar/lir`](https://github.com/hdjebar/lir).
- `params/params.js` est généré par `node tools/construire-params.js` : il permet d'ouvrir `index.html`
  directement (le navigateur interdit de lire un JSON local). Les tests vérifient qu'il est à jour.
- `calc.js` contient tout le calcul en fonctions pures, sans DOM.
- Tests : `npm test` (ou `node --test tests/*.test.js`), sans dépendance. Le nom de chaque test dit si l'attendu
  vient d'une source officielle, d'un calcul à la main à partir du texte, ou s'il reste « à valider ».

### Prochaine évolution

Le projet de loi n° 8676 prévoit une **classe d'impôt unique** à partir de l'année d'imposition 2028. Elle n'est
pas implémentée ici : ce sera la prochaine évolution, à mener avec le socle de calcul du dépôt
[`hdjebar/lir`](https://github.com/hdjebar/lir), dont ce dépôt servira de référence de test.

---

## English

An **indicative** tool that estimates, for an employee resident in Luxembourg: net salary, employer cost, social
contributions, income tax, the employment fund contribution and the CIS, CI-CO2 and CISSM tax credits. Everything
runs in the browser, with no server and no connection.

### What it computes

1. Employee and employer social contributions (rates published by the CCSS, ceiling of 5 × the minimum social
   wage, dependency insurance allowance).
2. Taxable income: health and pension contributions (art. 110 LIR), employment expenses (art. 107), commuting
   allowance (art. 105bis), special expenses (art. 109, 111bis, 113), extraordinary charges (art. 127), rounding
   down to €50 (art. 126).
3. Tax by class: class 1 (art. 120), class 1a (art. 120bis), class 2 by income splitting (art. 121); rounding
   rules of art. 124.
4. Employment fund contribution: 7 %, or 9 % above €150,000 (classes 1 and 1a) or €300,000 (class 2), smoothed as
   in the ACD formulas.
5. CIS and CI-CO2 (art. 154quater) and CISSM (art. 139quater) tax credits, which are refundable: net tax can be
   negative.
6. Annual tax divided by twelve, then monthly net salary.

Two rule sets are available: **May 2025** and **1 January 2026**. Each value and its legal source are listed in
[`docs/sources.md`](docs/sources.md); the effect of this version compared with the previous one is in
[`docs/ecarts.md`](docs/ecarts.md) (both in French).

### Accuracy

The tax scale and the three tax classes are checked to the cent by automated tests against the 65 formulas
published by the tax administration (ACD) for 2025 and against 26 worked examples published by the Ministry of
Finance. Tax credits, contributions and the gross-to-net path are tested against the cited legal texts at every
bracket boundary. Other values follow the texts listed in `docs/sources.md`; the ones I could not source are
flagged there.

### Limitations

- **Indicative only.** It does not replace the employer's withholding, the annual adjustment, or the assessment
  issued by the ACD.
- **Annual tax, not monthly withholding.** The tax shown is the annual tax divided by twelve. Payslip withholding
  follows the grand-ducal regulation's tables and can differ by a few euros a month.
- **Dated rules.** May 2025 and 1 January 2026. Not included: the 1 June 2026 wage indexation and the 2026
  temporary tax credit (bill no. 8775).
- **Remaining approximations**: childcare ceiling (€11,400 per child) and €120 minimum for donations without a
  verified source; home-loan interest deducted without the art. 98bis caps; class 2 computed with a spouse who has
  no income; single-parent tax credit (CIM), non-residents and non-periodic pay not handled; family allowance
  shown for information only and not verified.

### Privacy

- All computation happens on your device. **No data is sent**: the app makes no network request, loads no
  external font, stylesheet or image, and uses no cookies or analytics.
- The form is kept in the browser's `localStorage` (key `luxPayrollCalculatorState.v2`) so it is there next time.
  It expires after 7 days and is erased by the **Clear Form** button, or by clearing the site's data in the
  browser.
- Export writes a local JSON file; sharing uses the device's share sheet or the clipboard.

### Offline use

- **Open directly**: download the repository and open `index.html` in a browser. No install, no build step.
- **As a web app (PWA)**: serve the folder locally (`python3 -m http.server 8080`), open
  `http://localhost:8080`, then "Install" in Chrome or Edge (or "Add to Home Screen" on mobile). The service
  worker keeps a copy of the files for offline use.
- **Desktop app**: `npm install`, then `npm run electron` (Electron wrapper in `main.js`).

### Checking that nothing leaves the device

1. **In the code**: `grep -nE "https?://" index.html calc.js sw.js manifest.json params/params.js`. The only URLs
   are comments, the SVG namespace and the addresses of legal sources stored in the parameters (data, never
   loaded). CI runs this check
   on every change.
2. **In the browser**: the page declares a Content Security Policy that forbids any resource outside the app
   folder. Open the developer tools, **Network** tab, reload and run a calculation: only files from the
   app folder appear (`index.html`, `params/params.js`, `calc.js`, the icon, and over http `manifest.json` and
   `sw.js`).
3. **Automatically**: `node tools/verifier-reseau.mjs` opens the page in Chrome (Playwright), runs a calculation
   and fails if any request leaves the app.

One exception in the desktop app: Electron's Help menu has a link to the ACD website, which opens in the browser
only when clicked.

### Parameters and tests

- `params/2025-05.json` and `params/2026-01.json`: one entry per parameter with `valeur` (value), `unite` (unit),
  `date_effet` (effective date), `source` (text, article, URL) and `statut` (verified, changed, not found).
- `params/params.js` is generated by `node tools/construire-params.js` so that `index.html` can be opened
  directly; the tests check it is up to date.
- `calc.js` holds the whole calculation as pure functions, with no DOM access.
- Tests: `npm test` (or `node --test tests/*.test.js`), no dependencies. Each test name says whether the expected
  value comes from an official source, from a hand calculation based on the legal text, or is still "to be
  validated".

### Next step

Bill no. 8676 introduces a **single tax class** from tax year 2028. It is not implemented here; it is the next
planned change, to be built with the calculation core of [`hdjebar/lir`](https://github.com/hdjebar/lir), for
which this repository will serve as a test reference.

---

## Structure

```
index.html              interface (HTML, CSS, JS de l'interface uniquement)
calc.js                 calcul (fonctions pures)
params/*.json           paramètres légaux sourcés ; params/params.js généré
tests/                  tests node --test et fixtures officielles
tools/                  génération de params.js, vérification réseau, comparaison avec la 3.4.3
docs/                   inventaire, sources, écarts
sw.js, manifest.json    application web hors ligne
main.js                 enveloppe Electron
icons/                  icônes de l'application
```

## Licence

MIT, voir [LICENSE](LICENSE). Icônes : [Font Awesome Free](https://fontawesome.com) 6.7.2, licence
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), intégrées en SVG.

## Contact

Questions et signalements : [issues du dépôt](https://github.com/hdjebar/StandaloneSalaryCalculatorApp/issues).
Pour l'impôt : [Administration des contributions directes](https://impotsdirects.public.lu/) ; pour les
cotisations : [Centre commun de la sécurité sociale](https://ccss.public.lu/).
