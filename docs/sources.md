# Sources des paramètres

Mise à jour du 15 novembre 2026 (version 3.5.0). Ce document dit, pour chaque valeur utilisée par le calcul,
d'où elle vient et ce que j'ai pu vérifier. Les valeurs elles-mêmes sont dans `params/2025-05.json` et
`params/2026-01.json` ; chaque entrée y porte sa valeur, son unité, sa date d'effet, sa source et son statut.

## Méthode

- Une valeur n'est retenue que si je l'ai lue dans un document officiel téléchargé pendant la mise à jour.
- Statuts : **vérifié** (lu dans le texte cité, identique à l'ancienne valeur), **modifié** (lu dans le texte
  cité, différent de l'ancienne valeur ou du jeu précédent), **non trouvé** (aucune source officielle
  consultée : l'ancienne valeur est conservée et signalée, ou rien n'est affiché).
- Les textes coordonnés de la LIR publiés par l'ACD portent la mention « textes non officiels, élaborés à titre
  informatif ». Ils citent pour chaque article la loi modificative (avec sa référence au Mémorial) ; seule la
  publication au Journal officiel fait foi.

## Documents consultés

| Document | Émetteur | Empreinte SHA-256 (début) |
|---|---|---|
| [LIR, texte coordonné en vigueur au 1er janvier 2025](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf) (actualisé le 02/02/2026) | ACD | `9b2a420602c0f11b` |
| [LIR, texte coordonné en vigueur au 1er janvier 2026](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) (actualisé le 08/05/2026) | ACD | `eb0a141d498b4512` |
| [Formules du calcul automatisé de l'impôt 2025](https://impotsdirects.public.lu/dam-assets/fr/baremes/bareme-2025-format-excel.xlsx) (Excel, mis à jour le 17/04/2025), qui renvoie au [règlement grand-ducal du 20 décembre 2024, Mémorial A n° 590](https://legilux.public.lu/eli/etat/leg/rgd/2024/12/20/a590/jo) | ACD | `d138db5f10051a83` |
| [Lexique « Fonds pour l'emploi »](https://impotsdirects.public.lu/fr/az/f/fond_empl.html) | ACD | page web |
| [Newsletter du 23 décembre 2025 : mesures de la loi budgétaire 2026](https://impotsdirects.public.lu/fr/archive/newsletter/2025/nl23122025.html) | ACD | page web |
| [Avis aux employeurs, taux de cotisation au 01.01.2025](https://ccss.public.lu/dam-assets/publications/2025/ccss-20250117-avis-80-99-fr-de.pdf) | CCSS | `326ea941d1829881` |
| [Avis aux employeurs, minima et maximum cotisables au 01.05.2025](https://ccss.public.lu/dam-assets/publications/2025/ccss-20250711-avis-80-99-fr-de.pdf) | CCSS | `546610c6fe49c68b` |
| [Avis aux employeurs, taux de cotisation au 01.01.2026](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | CCSS | `341cae9a22dfb00c` |
| [« Entlaaschtungs-Pak », exemples concrets du barème 2025](https://gouvernement.lu/dam-assets/documents/actualites/2024/07/17-roth-paquet-fiscal/factsheets.pdf) (juillet 2024), utilisé pour les tests | Ministère des Finances | `118fd5b1c24d72f8` |

Le fichier `consolide_2026.pdf` du dépôt `hdjebar/lir` est identique, octet pour octet, au texte coordonné 2026
de l'ACD ci-dessus (même empreinte `eb0a141d…`). Les articles ont été lus dans ce PDF plutôt que dans
`consolidated_LIR_Legilux_2026.xml`, qui est une reconstruction automatique de ce même PDF.

## Vérifications demandées

| Élément | Conforme aux règles de mai 2025 ? | Changement en 2026 ? | Source |
|---|---|---|---|
| Barème (`CONFIG.TAX_BRACKETS`) | **Oui** : les 23 tranches de la version 3.4.3 sont exactement celles de l'art. 118. Le commentaire « *example values* » était faux ; il est supprimé avec l'ancien `CONFIG`. | Non : art. 118 identique au 1er janvier 2026 (dernière modification : loi du 20 décembre 2024). | LIR art. 118, textes coordonnés 2025 et 2026 ; formules ACD 2025 |
| Classe 1 | Oui (coefficient 1,0 = tarif de l'art. 120). | Non | LIR art. 120 |
| Classe 1a | **Non** : coefficient 0,9 au lieu de l'art. 120bis (tarif appliqué au revenu réduit d'un quart de son complément à 79 380 €, accroissement plafonné à 39, 40, 41 et 42 %). | Non | LIR art. 120bis ; contrôle au centime avec les 19 formules ACD de la classe 1a |
| Classe 2 | **Non** : coefficient 0,65 au lieu du splitting de l'art. 121 (double de l'impôt sur la moitié du revenu). | Non | LIR art. 121 ; contrôle avec les 23 formules ACD de la classe 2 |
| Fonds pour l'emploi | **En partie** : taux 7 % et 9 % et seuils 150 000 / 300 000 € exacts, mais la version 3.4.3 appliquait 9 % à tout l'impôt au-delà du seuil. Les formules ACD lissent : I × 9 % − 931,80 € (classe 1), − 885,36 € (1a), − 1 863,60 € (2). | Non | ACD (lexique et formules 2025). **Article de la loi modifiée du 30 juin 1976 non vérifié.** |
| CIS | Oui (300 € + 2,9 %, 600 €, dégressivité 1,5 %, bornes 936 / 11 265 / 40 000 / 80 000 €). Ajouts : arrondi au cent supérieur, restitution quand le crédit dépasse l'impôt. | Non | LIR art. 154quater, al. 2 |
| CI-CO2 | Oui pour 2025 (192 €, dégressivité 0,0048). | **Oui** : 216 € et 0,0054 à partir de l'année d'imposition 2026 (loi budgétaire du 19 décembre 2025, Mémorial A 2025 n° 591). | LIR art. 154quater, al. 2 ; newsletter ACD du 23.12.2025 |
| CISSM | Oui (81 €/mois de 1 800 à 3 000 €, dégressif jusqu'à 3 600 €). | Non au 1er janvier 2026. Le projet de loi n° 8775 prévoit 179 € puis 200 € en 2027 : non intégré. | LIR art. 139quater, al. 3 |
| Modération d'impôt pour enfant | **Non** : la version 3.4.3 déduisait 922,56 € par enfant de l'impôt. L'art. 122, al. 2 la considère comme incluse dans l'allocation familiale ; le dégrèvement de 922,5 € (al. 3) ne vaut que sans allocation. Supprimée du calcul. | Non | LIR art. 122 |

## Tous les paramètres

Tableau produit par `node tools/tableau-sources.js` (les fichiers JSON détaillent chaque valeur).

| Paramètre | 2025-05 | 2026-01 | Source | Statut 2025-05 / 2026-01 |
|---|---|---|---|---|
| `impot.bareme` : Tarif de l'impôt sur le revenu : taux applicable à partir de chaque seuil de revenu imposable ajusté | 23 tranches | 23 tranches | [art. 118](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `impot.classe_1a` : Classe 1a : tarif appliqué au revenu réduit d'un quart de son complément à 79 380 €, taux d'accroissement plafonnés | complement_reference 79380 ; fraction_complement 0.25 | complement_reference 79380 ; fraction_complement 0.25 | [art. 120bis](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `impot.classe_2` : Classe 2 : double de la cote correspondant à la moitié du revenu imposable ajusté (splitting) | diviseur 2 | diviseur 2 | [art. 121](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `impot.arrondi_revenu` : Le revenu imposable est arrondi au multiple inférieur de ce montant avant application du tarif | 50 | 50 | [art. 126, al. 2](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `impot.arrondi_cote` : Les cotes d'impôt sont arrondies au multiple inférieur d'un euro ; les cotes inférieures au seuil sont nulles | arrondi 1 ; cote_minimale 12 | arrondi 1 ; cote_minimale 12 | [art. 124](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `cfe` : Contribution au fonds pour l'emploi (majoration de l'impôt) | taux 0.07 ; taux_majore 0.09 ; seuil_classes_1_1a 150000 ; seuil_classe_2 300000 | taux 0.07 ; taux_majore 0.09 ; seuil_classes_1_1a 150000 ; seuil_classe_2 300000 | [Loi modifiée du 30 juin 1976 portant création d'un fonds pour l'emploi (article non vérifié)](https://impotsdirects.public.lu/fr/az/f/fond_empl.html) | vérifié (source ACD) ; article de loi à confirmer / vérifié (source ACD) ; article de loi à confirmer |
| `credits.cis` : Crédit d'impôt pour salariés (CIS), annuel, selon le salaire brut annuel | minimum 936 ; palier_1 11265 ; palier_2 40000 ; plafond_exclu 80000 ; montant_base 300 ; taux_progression 0.029 ; montant_plein 600 ; taux_degressivite 0.015 | minimum 936 ; palier_1 11265 ; palier_2 40000 ; plafond_exclu 80000 ; montant_base 300 ; taux_progression 0.029 ; montant_plein 600 ; taux_degressivite 0.015 | [art. 154quater, al. 2](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `credits.cico2` : Crédit d'impôt CO2 pour salariés (CI-CO2), annuel | minimum 936 ; palier 40000 ; plafond_exclu 80000 ; montant_plein 192 ; taux_degressivite 0.0048 | minimum 936 ; palier 40000 ; plafond_exclu 80000 ; montant_plein 216 ; taux_degressivite 0.0054 | [art. 154quater, al. 2](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / modifié |
| `credits.cissm` : Crédit d'impôt salaire social minimum (CISSM), mensuel, selon le salaire brut mensuel à temps plein | minimum 1800 ; palier 3000 ; plafond_exclu 3600 ; montant_plein_mensuel 81 | minimum 1800 ; palier 3000 ; plafond_exclu 3600 ; montant_plein_mensuel 81 | [art. 139quater, al. 3](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.frais_obtention_minimum` : Minimum forfaitaire de frais d'obtention pour un salaire (hors frais de déplacement) | 540 | 540 | [art. 107, al. 1, n° 1](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.frais_deplacement` : Forfait pour frais de déplacement : 99 € par unité d'éloignement au-delà de 4, plafonné à 2 574 € | par_unite 99 ; unites_non_comptees 4 ; plafond 2574 | par_unite 99 ; unites_non_comptees 4 ; plafond 2574 | [art. 105bis, al. 3](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | modifié / modifié |
| `deductions.depenses_speciales_minimum` : Minimum forfaitaire de dépenses spéciales (assurances, intérêts, prévoyance-vieillesse), par salaire du ménage | 480 | 480 | [art. 113, al. 1 et 2](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.plafond_assurances_interets` : Plafond commun primes d'assurance et intérêts débiteurs (hors logement), majoré du même montant pour le conjoint et chaque enfant | 672 | 672 | [art. 109, al. 1, n° 1a](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.prevoyance_vieillesse_plafond` : Plafond annuel des versements à un contrat individuel de prévoyance-vieillesse | 3200 | 4500 | [art. 111bis, al. 7](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / modifié |
| `deductions.dons` : Libéralités : déductibles dans la limite de 20 % du total des revenus nets et de 1 000 000 € | plafond_part_revenus 0.2 ; plafond_absolu 1000000 | plafond_part_revenus 0.2 ; plafond_absolu 1000000 | [art. 109, al. 1, n° 3 et art. 112](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.dons_minimum` : Montant minimal de dons pour être déductible | 120 | 120 | non trouvé | non trouvé / non trouvé |
| `deductions.abattement_extra_professionnel` : Abattement extra-professionnel des époux imposés collectivement qui ont chacun un revenu professionnel | 4500 | 4500 | [art. 129b, al. 1](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `deductions.charges_extraordinaires` : Part du revenu imposable en dessous de laquelle les charges extraordinaires (ex. frais médicaux) ne sont pas déductibles | voir le fichier | voir le fichier | [art. 127, al. 4](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | modifié / modifié |
| `deductions.frais_garde_par_enfant` : Plafond appliqué aux frais de garde d'enfants | 11400 | 11400 | non trouvé | non trouvé / non trouvé |
| `deductions.interets_logement` : Intérêts d'emprunt pour l'habitation personnelle : déduits sans plafond | — | — | [non vérifié](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | non trouvé / non trouvé |
| `famille.moderation_enfant` : Modération d'impôt pour enfant sous forme de dégrèvement (seulement si aucune allocation familiale n'est versée) | 922.5 | 922.5 | [art. 122, al. 2 et 3](https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf) | vérifié / vérifié |
| `famille.allocation_familiale` : Allocation familiale de base par enfant et par mois (information, hors calcul de l'impôt) | 299.86 | — | non vérifié | non trouvé / non trouvé |
| `secu.salaire_social_minimum` : Salaire social minimum mensuel, salarié non qualifié de 18 ans et plus (indice 968,04) | 2703.74 | 2703.74 | [taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | vérifié / vérifié |
| `secu.maximum_cotisable` : Maximum cotisable mensuel (5 × salaire social minimum), hors assurance dépendance | 13518.68 | 13518.68 | [taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | modifié / modifié |
| `secu.abattement_dependance` : Abattement sur l'assiette de la contribution dépendance (1/4 du salaire social minimum) | 675.93 | 675.93 | [taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | vérifié / vérifié |
| `secu.salarie` : Taux de cotisation à charge du salarié | maladie_nature 0.028 ; maladie_especes 0.0025 ; pension 0.08 ; dependance 0.014 | maladie_nature 0.028 ; maladie_especes 0.0025 ; pension 0.085 ; dependance 0.014 | [taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | vérifié / modifié |
| `secu.employeur` : Taux de cotisation à charge de l'employeur (secteur privé) | maladie_nature 0.028 ; maladie_especes 0.0025 ; pension 0.08 ; accident_taux_base 0.007 ; sante_au_travail 0.0014 | maladie_nature 0.028 ; maladie_especes 0.0025 ; pension 0.085 ; accident_taux_base 0.0065 ; sante_au_travail 0.0014 | [taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)](https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf) | modifié / modifié |

## Points ouverts (valeurs non sourcées ou approximations restantes)

1. **Article de loi du fonds pour l'emploi** : taux, seuils et lissage viennent de l'ACD (lexique et formules) ;
   l'article de la loi modifiée du 30 juin 1976 qui les fixe n'a pas été lu.
2. **Plafond des frais de garde (11 400 € par enfant)** : aucune source trouvée. L'art. 127, al. 6 LIR renvoie à
   un règlement grand-ducal pour les abattements forfaitaires (domesticité, garde) que je n'ai pas consulté.
   Valeur conservée et signalée dans l'interface.
3. **Minimum de 120 € pour les dons** : l'art. 112, al. 3 renvoie à un règlement grand-ducal non consulté.
4. **Intérêts du logement** : déduits sans les plafonds de l'art. 98bis (comportement de la version 3.4.3,
   signalé dans l'interface).
5. **Allocation familiale** : 299,86 € (2025) conservé sans source officielle consultée ; des publications
   syndicales donnent 307,35 € à l'indice 968,04. Rien n'est affiché avec les règles 2026.
6. **Articles du Code de la sécurité sociale** : les taux et plafonds sont ceux des avis du CCSS ; les articles
   du Code qui les fixent n'ont pas été lus. La loi du 18 décembre 2025 portant réforme de l'assurance pension
   (taux de 8,5 %) est citée par des sources secondaires ; le taux lui-même vient de l'avis officiel du CCSS.
7. **Retenue mensuelle** : non implémentée (voir `docs/ecarts.md`). Le règlement grand-ducal du 20 décembre 2024
   (Mémorial A n° 590) et les formules ACD de la retenue mensuelle sont identifiés ; les implémenter demande de
   reprendre les abattements inscrits sur la fiche de retenue.
8. **Hors périmètre 2026** : indexation de 2,5 % au 1er juin 2026 (indice 992,24) et crédit d'impôt conjoncture
   de juin à décembre 2026 (projet de loi n° 8775, premier vote le 28 octobre 2026, publication attendue).
9. **Crédit d'impôt monoparental (CIM), abattement pour charges extraordinaires des enfants hors ménage,
   imposition des non-résidents, salaires non périodiques** : non calculés.
10. **Classe 2** : l'interface suppose un conjoint sans revenu professionnel. Le moteur sait traiter deux salaires
    (abattement extra-professionnel de l'art. 129b, forfaits doublés de l'art. 113, al. 2) ; c'est testé sur les
    exemples du ministère des Finances, mais pas encore exposé dans l'interface.
