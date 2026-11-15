# Écarts entre l'ancien et le nouveau calcul

Comparaison de la version 3.4.3 (commit `d8cbfc1`) et de la version 3.5.0 sur quatre profils types.
L'ancien calcul est reproduit à l'identique par `tools/ancien-calcul-3.4.3.js` (code copié de l'ancien
`index.html`) ; les tableaux sont produits par `node tools/comparer-ancien-nouveau.js`.

Hypothèses communes : 12 salaires fixes, aucune déduction saisie (les forfaits légaux s'appliquent),
pas de distance domicile-travail. Côté employeur, l'ancienne « classe B » (coefficient 1,0) est comparée à la
classe de mutualité 2 du CCSS avec un facteur bonus-malus de 1,00.

## Ce qui change et pourquoi

| Changement | Effet | Base |
|---|---|---|
| Classe 2 : splitting au lieu du coefficient 0,65 | impôt avant crédits nettement plus bas pour les couples à un salaire | LIR art. 121 |
| Classe 1a : formule de l'art. 120bis au lieu du coefficient 0,9 | impôt plus bas jusqu'à environ 90 900 € de revenu imposable, plus élevé au-delà | LIR art. 120bis |
| Plus de crédit de 922,56 € par enfant | impôt net plus élevé à revenu égal pour les familles (la modération est déjà dans l'allocation familiale) | LIR art. 122, al. 2 |
| Dépendance non déduite du revenu imposable, forfait de 480 € de dépenses spéciales, revenu arrondi à 50 € | revenu imposable un peu plus haut pour les hauts salaires, un peu plus bas pour les bas salaires | LIR art. 110, 113, 126 |
| Fonds pour l'emploi lissé au-delà de 150 000 € / 300 000 € | supprime un saut d'environ 930 € (classe 1) au passage du seuil | formules ACD 2025 |
| Crédits restituables | au salaire minimum, l'impôt net devient négatif (crédit versé) au lieu d'être ramené à zéro | LIR art. 154quater |
| Mutualité en 4 classes, accident avec bonus-malus | coût employeur différent selon la classe choisie | avis CCSS |
| Règles 2026 | pension 8,5 % au lieu de 8 %, CI-CO2 216 €, accident 0,65 %, mutualité révisée | avis CCSS du 16.01.2026, LIR 2026 |

## Profils

### A. Classe 1, 3 500 €/mois, sans enfant

| | Avant (3.4.3) | Après, règles mai 2025 | Écart | Après, règles 2026 |
|---|---:|---:|---:|---:|
| Revenu imposable (annuel) | 36 344,56 € | 36 300,00 € | -44,56 | 36 100,00 € |
| Impôt + fonds pour l'emploi, avant crédits (annuel) | 3 547,58 € | 3 535,00 € | -12,58 | 3 483,00 € |
| Crédits d'impôt déduits (annuel) | 914,40 € | 914,40 € | +0,00 | 937,20 € |
| Impôt net (mensuel) | 219,43 € | 218,38 € | -1,05 | 212,15 € |
| Cotisations salarié (mensuel) | 426,29 € | 426,29 € | +0,00 | 443,79 € |
| **Salaire net (mensuel)** | 2 854,28 € | 2 855,33 € | +1,05 | 2 844,06 € |
| Coût employeur (mensuel) | 3 941,35 € | 3 950,80 € | +9,45 | 3 965,15 € |

### B. Classe 1a, 4 500 €/mois, 1 enfant

| | Avant (3.4.3) | Après, règles mai 2025 | Écart | Après, règles 2026 |
|---|---:|---:|---:|---:|
| Revenu imposable (annuel) | 46 850,56 € | 47 000,00 € | +149,44 | 46 700,00 € |
| Impôt + fonds pour l'emploi, avant crédits (annuel) | 6 035,68 € | 4 223,00 € | -1 812,68 | 4 119,00 € |
| Crédits d'impôt déduits (annuel) | 1 437,36 € | 514,80 € | -922,56 | 530,40 € |
| Impôt net (mensuel) | 383,19 € | 309,02 € | -74,17 | 299,05 € |
| Cotisations salarié (mensuel) | 550,79 € | 550,79 € | +0,00 | 573,29 € |
| **Salaire net (mensuel)** | 3 566,02 € | 3 640,19 € | +74,17 | 3 627,66 € |
| Coût employeur (mensuel) | 5 067,45 € | 5 079,60 € | +12,15 | 5 098,05 € |

### C. Classe 2, 6 500 €/mois, 2 enfants, conjoint sans revenu

| | Avant (3.4.3) | Après, règles mai 2025 | Écart | Après, règles 2026 |
|---|---:|---:|---:|---:|
| Revenu imposable (annuel) | 67 862,56 € | 68 350,00 € | +487,44 | 67 950,00 € |
| Impôt + fonds pour l'emploi, avant crédits (annuel) | 9 897,59 € | 6 046,00 € | -3 851,59 | 5 952,00 € |
| Crédits d'impôt déduits (annuel) | 1 884,72 € | 39,60 € | -1 845,12 | 40,80 € |
| Impôt net (mensuel) | 667,74 € | 500,53 € | -167,21 | 492,60 € |
| Cotisations salarié (mensuel) | 799,79 € | 799,79 € | +0,00 | 832,29 € |
| **Salaire net (mensuel)** | 5 032,47 € | 5 199,68 € | +167,21 | 5 175,11 € |
| Coût employeur (mensuel) | 7 319,65 € | 7 337,20 € | +17,55 | 7 363,85 € |

### D. Classe 1, 9 000 €/mois, sans enfant

| | Avant (3.4.3) | Après, règles mai 2025 | Écart | Après, règles 2026 |
|---|---:|---:|---:|---:|
| Revenu imposable (annuel) | 94 127,56 € | 95 000,00 € | +872,44 | 94 500,00 € |
| Impôt + fonds pour l'emploi, avant crédits (annuel) | 26 187,44 € | 26 550,00 € | +362,56 | 26 342,00 € |
| Crédits d'impôt déduits (annuel) | 0,00 € | 0,00 € | +0,00 | 0,00 € |
| Impôt net (mensuel) | 2 182,29 € | 2 212,50 € | +30,21 | 2 195,17 € |
| Cotisations salarié (mensuel) | 1 111,04 € | 1 111,04 € | +0,00 | 1 156,04 € |
| **Salaire net (mensuel)** | 5 706,68 € | 5 676,46 € | -30,22 | 5 648,79 € |
| Coût employeur (mensuel) | 10 134,90 € | 10 159,20 € | +24,30 | 10 196,10 € |

## Lecture

- **Classe 1 (A, D)** : la méthode ne change pas. Les écarts (de +1 € à −30 € par mois) viennent du revenu
  imposable : la dépendance n'est plus déduite (art. 110), le forfait de 480 € s'ajoute (art. 113) et le revenu
  est arrondi à 50 €.
- **Classe 1a (B)** : l'impôt avant crédits baisse de 1 813 € par an avec la formule légale, mais le crédit de
  922,56 € pour l'enfant disparaît. Net : +74 € par mois.
- **Classe 2 (C)** : le splitting baisse l'impôt de 3 852 € par an ; la suppression de deux crédits pour enfants
  (1 845 €) en reprend la moitié. Net : +167 € par mois.
- **Règles 2026** : à salaire égal, le net baisse de 11 à 28 € par mois, surtout à cause de la cotisation
  pension portée à 8,5 %.

## Impôt annuel estimé et retenue mensuelle officielle

L'application calcule l'**impôt annuel** du contribuable (tarif, fonds pour l'emploi, crédits) puis le divise
par douze. Ce n'est pas la **retenue d'impôt** que l'employeur prélève chaque mois : celle-ci suit les barèmes de
retenue du règlement grand-ducal du 20 décembre 2024 (Mémorial A n° 590), calculés sur le salaire du mois après
déduction des abattements inscrits sur la fiche de retenue d'impôt. L'écart se règle ensuite par le décompte
annuel ou par l'imposition par voie d'assiette.

Exemple chiffré : pour un salaire social minimum de 2 635,21 € brut en classe 1, le ministère des Finances
publie une retenue de **−10,90 €** pour janvier 2025 (fiche « Entlaaschtungs-Pak », juillet 2024). Avec les
règles de mai 2025, l'application donne un impôt net de **−12,33 €** par mois (impôt 1 511 €, fonds pour
l'emploi 105 €, crédits 1 764 € sur l'année). Les deux chiffres disent la même chose (pas d'impôt et un crédit
versé), mais ils diffèrent de 1,43 € par mois.

Les tables de retenue ne sont pas implémentées dans cette version : le règlement et les formules ACD de la
retenue mensuelle sont identifiés, mais leur mise en œuvre demande de reprendre les abattements de la fiche de
retenue (frais de déplacement, abattements pour charges extraordinaires, etc.). C'est noté dans les points
ouverts de `docs/sources.md`.
