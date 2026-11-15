# Inventaire de l'existant (version 3.4.3, commit `d8cbfc1`)

Relevé fait le 15 novembre 2026, avant toute modification, par lecture complète de
`index.html` (3 540 lignes), `sw.js`, `main.js`, `manifest.json` et `package.json`.
Il décrit ce que l'application **calcule réellement**, pas ce que le README annonce.

## 1. Entrées

| Champ | Usage dans le calcul |
|---|---|
| Salaire mensuel brut, ou coût employeur total (mode « Total ») | base de tout le calcul ; en mode « Total », le brut est obtenu par division par (1 + somme des taux employeur), sans tenir compte du plafond |
| Classe d'impôt (1, 1a, 2) | coefficient appliqué à l'impôt (voir § 3) |
| « Mutuality class » A à E (0,85 ; 1,0 ; 1,1 ; 1,3 ; 1,5) | multiplie un taux de mutualité de 0,72 % |
| Nombre d'enfants | allocation familiale affichée et « crédit d'impôt enfant » déduit de l'impôt |
| Frais de garde, frais professionnels, déduction transport, épargne-pension, intérêts hypothécaires, primes d'assurance, frais médicaux, dons | déduits du revenu imposable (voir § 3) |

## 2. Cotisations sociales (`calculateEmployerContributions`, `calculateEmployeeContributions`)

- Plafond mensuel : 5 × 2 703,74 € = 13 518,70 €, appliqué à toutes les cotisations sauf la dépendance.
- Salarié : maladie 3,05 %, pension 8 %, dépendance 1,4 % sur (brut − 2 703,74 / 4), sans plafond.
- Employeur : maladie 3,05 %, pension 8 %, santé au travail 0,14 %, accident 0,70 %, mutualité 0,72 % × coefficient A–E.
- Les taux sont écrits en dur, sans source. Le schéma « mutualité 0,72 % × coefficient 0,85 à 1,5 » mélange deux
  mécanismes distincts : les quatre classes de la Mutualité des employeurs et le facteur bonus-malus de l'assurance accident.

## 3. Impôt (`performCalculation`, `calculateIncomeTax`)

1. Brut annuel = brut mensuel × 12.
2. Revenu imposable = brut annuel − **toutes** les cotisations salariales (y compris la dépendance) − déductions.
   - Frais professionnels : max(540, saisie).
   - Transport : saisie plafonnée à 4 620 €.
   - Frais de garde : min(saisie, enfants × 11 400 €).
   - Épargne-pension : plafond 3 200 € ; assurances : plafond 672 € ; intérêts hypothécaires : sans plafond.
   - Frais médicaux : part au-delà de 2,5 % du brut.
   - Dons : 0 si < 120 €, sinon min(saisie, 20 % du brut, 1 000 000 €).
   - Pas de forfait de dépenses spéciales (480 €), pas d'arrondi du revenu.
3. Impôt = barème progressif (`CONFIG.TAX_BRACKETS`, commenté « *example values* ») appliqué au revenu imposable,
   **puis multiplié par 1,0 (classe 1), 0,9 (classe 1a) ou 0,65 (classe 2)**.
4. « Solidarity surcharge » = 7 % de l'impôt, ou 9 % **de tout l'impôt** au-delà de 150 000 € (classes 1, 1a) ou
   300 000 € (classe 2) : un saut de plusieurs centaines d'euros au passage du seuil.
5. Crédits déduits de l'impôt : CIS, CI-CO2 (192 €), CISSM (81 €/mois) et **922,56 € par enfant**.
   L'impôt net est ramené à zéro s'il devient négatif (les crédits ne sont donc jamais versés).
6. Impôt mensuel = impôt annuel / 12 ; net = brut − cotisations salariales − impôt mensuel.

## 4. Autres calculs

- **Aperçu en direct** (`updateLivePreview`) : estimation indépendante, sans rapport avec le calcul principal
  (impôt = 15 % du brut × coefficient de classe ; plafond ignoré).
- **Allocation familiale** : 299,86 € par enfant et par mois, affichée à côté du salaire.
- Graphique de répartition (canvas), export JSON (version « 3.4.3 »), partage, impression.

## 5. Réseau, stockage, versions

- Requêtes externes : feuille de style Font Awesome sur cdnjs (aussi précachée par `sw.js`), icône de secours
  `placehold.co`. Les icônes `images/icon-192x192.png` et `icons/*.png` citées n'existent pas dans le dépôt.
- `sw.js` est enregistré avec un chemin absolu (`/sw.js`), qui échoue sous un sous-chemin (GitHub Pages).
- L'état du formulaire est gardé 7 jours dans `localStorage` (`luxPayrollCalculatorState`).
- Versions incohérentes : `package.json`, `sw.js`, `main.js` et l'export disent 3.4.3 ; le pied de page et la console
  disent « 3.5.0 (Enhanced UX) ».
- Aucun test automatisé ; le workflow `deploy.yml` vérifie seulement que le manifeste est un JSON valide.

## 6. Écarts avec la loi repérés à la lecture (détaillés dans `docs/sources.md`)

- Classes d'impôt par coefficients au lieu des art. 120, 120bis et 121 LIR.
- Contribution dépendance déduite du revenu imposable, alors que l'art. 110 LIR ne vise que maladie et pension.
- Crédit de 922,56 € par enfant déduit de l'impôt, alors que l'art. 122, al. 2 LIR considère la modération d'impôt
  comme incluse dans l'allocation familiale versée (double comptage).
- Plafond transport de 4 620 € sans base : l'art. 105bis LIR plafonne le forfait à 2 574 €.
- Frais médicaux à 2,5 % fixe, alors que l'art. 127, al. 4 LIR prévoit un barème selon le revenu et la classe.
- Arrondis des art. 124 et 126 LIR absents ; crédits jamais restitués alors que l'art. 154quater les dit restituables.
