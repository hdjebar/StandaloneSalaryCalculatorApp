// Fichier généré par tools/construire-params.js à partir de params/*.json : ne pas modifier à la main.
(function (racine) {
  racine.LUX_PARAMS = {
    "2025-05": {
      "meta": {
        "id": "2025-05",
        "libelle": "Règles en vigueur en mai 2025",
        "en_vigueur_au": "2025-05-01",
        "format": 1,
        "statuts": {
          "vérifié": "valeur lue dans le texte officiel cité et identique à l'ancienne valeur",
          "modifié": "valeur lue dans le texte officiel cité et différente de l'ancienne valeur (ou du jeu précédent)",
          "non trouvé": "aucune source officielle vérifiée : ancienne valeur conservée et signalée"
        },
        "hors_perimetre": []
      },
      "parametres": {
        "impot.bareme": {
          "description": "Tarif de l'impôt sur le revenu : taux applicable à partir de chaque seuil de revenu imposable ajusté",
          "valeur": [
            {
              "seuil": 0,
              "taux": 0
            },
            {
              "seuil": 13230,
              "taux": 0.08
            },
            {
              "seuil": 15435,
              "taux": 0.09
            },
            {
              "seuil": 17640,
              "taux": 0.1
            },
            {
              "seuil": 19845,
              "taux": 0.11
            },
            {
              "seuil": 22050,
              "taux": 0.12
            },
            {
              "seuil": 24255,
              "taux": 0.14
            },
            {
              "seuil": 26550,
              "taux": 0.16
            },
            {
              "seuil": 28845,
              "taux": 0.18
            },
            {
              "seuil": 31140,
              "taux": 0.2
            },
            {
              "seuil": 33435,
              "taux": 0.22
            },
            {
              "seuil": 35730,
              "taux": 0.24
            },
            {
              "seuil": 38025,
              "taux": 0.26
            },
            {
              "seuil": 40320,
              "taux": 0.28
            },
            {
              "seuil": 42615,
              "taux": 0.3
            },
            {
              "seuil": 44910,
              "taux": 0.32
            },
            {
              "seuil": 47205,
              "taux": 0.34
            },
            {
              "seuil": 49500,
              "taux": 0.36
            },
            {
              "seuil": 51795,
              "taux": 0.38
            },
            {
              "seuil": 54090,
              "taux": 0.39
            },
            {
              "seuil": 117450,
              "taux": 0.4
            },
            {
              "seuil": 176160,
              "taux": 0.41
            },
            {
              "seuil": 234870,
              "taux": 0.42
            }
          ],
          "unite": "EUR / taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 118",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié",
          "controle": "Identique dans les textes coordonnés au 1er janvier 2025 et au 1er janvier 2026 ; identique aux formules ACD 2025."
        },
        "impot.classe_1a": {
          "description": "Classe 1a : tarif appliqué au revenu réduit d'un quart de son complément à 79 380 €, taux d'accroissement plafonnés",
          "valeur": {
            "complement_reference": 79380,
            "fraction_complement": 0.25,
            "taux_accroissement_maximaux": [
              {
                "seuil": 51804,
                "taux": 0.39
              },
              {
                "seuil": 117450,
                "taux": 0.4
              },
              {
                "seuil": 176160,
                "taux": 0.41
              },
              {
                "seuil": 234870,
                "taux": 0.42
              }
            ]
          },
          "unite": "EUR / taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 120bis",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié",
          "controle": "Concorde au centime avec la colonne « classe 1a » des formules ACD 2025 (déduction 14 556,96 € à 39 %)."
        },
        "impot.classe_2": {
          "description": "Classe 2 : double de la cote correspondant à la moitié du revenu imposable ajusté (splitting)",
          "valeur": {
            "diviseur": 2
          },
          "unite": "nombre",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 121",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "impot.arrondi_revenu": {
          "description": "Le revenu imposable est arrondi au multiple inférieur de ce montant avant application du tarif",
          "valeur": 50,
          "unite": "EUR",
          "date_effet": "2002-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 126, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "impot.arrondi_cote": {
          "description": "Les cotes d'impôt sont arrondies au multiple inférieur d'un euro ; les cotes inférieures au seuil sont nulles",
          "valeur": {
            "arrondi": 1,
            "cote_minimale": 12
          },
          "unite": "EUR",
          "date_effet": "2008-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 124",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "cfe": {
          "description": "Contribution au fonds pour l'emploi (majoration de l'impôt)",
          "valeur": {
            "taux": 0.07,
            "taux_majore": 0.09,
            "seuil_classes_1_1a": 150000,
            "seuil_classe_2": 300000
          },
          "unite": "taux / EUR",
          "date_effet": "2013-01-01",
          "source": {
            "texte": "ACD, lexique « Fonds pour l'emploi » et formules du calcul automatisé de l'impôt 2025",
            "article": "Loi modifiée du 30 juin 1976 portant création d'un fonds pour l'emploi (article non vérifié)",
            "url": "https://impotsdirects.public.lu/fr/az/f/fond_empl.html",
            "url_formules": "https://impotsdirects.public.lu/dam-assets/fr/baremes/bareme-2025-format-excel.xlsx"
          },
          "statut": "vérifié (source ACD) ; article de loi à confirmer",
          "methode": "Au-delà du seuil, la majoration vaut I × 9 % − 2 % × I(seuil) selon les formules ACD (ex. classe 1 : I × 0,09 − 931,8) : le taux de 9 % ne s'applique qu'à la part de l'impôt au-delà de l'impôt dû au seuil, sans saut."
        },
        "credits.cis": {
          "description": "Crédit d'impôt pour salariés (CIS), annuel, selon le salaire brut annuel",
          "valeur": {
            "minimum": 936,
            "palier_1": 11265,
            "palier_2": 40000,
            "plafond_exclu": 80000,
            "montant_base": 300,
            "taux_progression": 0.029,
            "montant_plein": 600,
            "taux_degressivite": 0.015,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR / taux",
          "date_effet": "2024-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 154quater, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "credits.cico2": {
          "description": "Crédit d'impôt CO2 pour salariés (CI-CO2), annuel",
          "valeur": {
            "minimum": 936,
            "palier": 40000,
            "plafond_exclu": 80000,
            "montant_plein": 192,
            "taux_degressivite": 0.0048,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR / taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 154quater, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 558)"
          },
          "statut": "vérifié"
        },
        "credits.cissm": {
          "description": "Crédit d'impôt salaire social minimum (CISSM), mensuel, selon le salaire brut mensuel à temps plein",
          "valeur": {
            "minimum": 1800,
            "palier": 3000,
            "plafond_exclu": 3600,
            "montant_plein_mensuel": 81,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 139quater, al. 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié"
        },
        "deductions.frais_obtention_minimum": {
          "description": "Minimum forfaitaire de frais d'obtention pour un salaire (hors frais de déplacement)",
          "valeur": 540,
          "unite": "EUR / an",
          "date_effet": "1991-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 107, al. 1, n° 1",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.frais_deplacement": {
          "description": "Forfait pour frais de déplacement : 99 € par unité d'éloignement au-delà de 4, plafonné à 2 574 €",
          "valeur": {
            "par_unite": 99,
            "unites_non_comptees": 4,
            "plafond": 2574
          },
          "unite": "EUR / an",
          "date_effet": "2013-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 105bis, al. 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "modifié",
          "ancien": "Plafond de 4 620 € sans source dans la version 3.4.3."
        },
        "deductions.depenses_speciales_minimum": {
          "description": "Minimum forfaitaire de dépenses spéciales (assurances, intérêts, prévoyance-vieillesse), par salaire du ménage",
          "valeur": 480,
          "unite": "EUR / an",
          "date_effet": "1991-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 113, al. 1 et 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.plafond_assurances_interets": {
          "description": "Plafond commun primes d'assurance et intérêts débiteurs (hors logement), majoré du même montant pour le conjoint et chaque enfant",
          "valeur": 672,
          "unite": "EUR / an / personne",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 109, al. 1, n° 1a",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.prevoyance_vieillesse_plafond": {
          "description": "Plafond annuel des versements à un contrat individuel de prévoyance-vieillesse",
          "valeur": 3200,
          "unite": "EUR / an",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 111bis, al. 7",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.dons": {
          "description": "Libéralités : déductibles dans la limite de 20 % du total des revenus nets et de 1 000 000 €",
          "valeur": {
            "plafond_part_revenus": 0.2,
            "plafond_absolu": 1000000
          },
          "unite": "taux / EUR",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 109, al. 1, n° 3 et art. 112",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.dons_minimum": {
          "description": "Montant minimal de dons pour être déductible",
          "valeur": 120,
          "unite": "EUR / an",
          "date_effet": null,
          "source": {
            "texte": "Règlement grand-ducal prévu par l'art. 112, al. 3 LIR",
            "article": "non trouvé",
            "url": null
          },
          "statut": "non trouvé",
          "note": "L'art. 112, al. 3 renvoie à un règlement grand-ducal que je n'ai pas consulté. Valeur de la version 3.4.3 conservée."
        },
        "deductions.abattement_extra_professionnel": {
          "description": "Abattement extra-professionnel des époux imposés collectivement qui ont chacun un revenu professionnel",
          "valeur": 4500,
          "unite": "EUR / an",
          "date_effet": "2009-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 129b, al. 1",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.charges_extraordinaires": {
          "description": "Part du revenu imposable en dessous de laquelle les charges extraordinaires (ex. frais médicaux) ne sont pas déductibles",
          "valeur": {
            "tranches": [
              10000,
              20000,
              30000,
              40000,
              50000,
              60000
            ],
            "classe_1": [
              0.02,
              0.04,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1
            ],
            "par_nombre_de_moderations": [
              [
                0,
                0.02,
                0.04,
                0.06,
                0.07,
                0.08,
                0.09
              ],
              [
                0,
                0,
                0.02,
                0.04,
                0.05,
                0.06,
                0.07
              ],
              [
                0,
                0,
                0,
                0.02,
                0.03,
                0.04,
                0.05
              ],
              [
                0,
                0,
                0,
                0,
                0.01,
                0.02,
                0.03
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0.01
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            ]
          },
          "unite": "taux",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 127, al. 4",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "modifié",
          "lecture": "Ligne i de « par_nombre_de_moderations » = nombre de modérations d'impôt pour enfants (0 à 5), pour les classes 1a et 2 ; chaque liste suit les tranches de revenu (< 10 000, 10 000-20 000, ..., > 60 000).",
          "ancien": "Seuil fixe de 2,5 % du brut dans la version 3.4.3."
        },
        "deductions.frais_garde_par_enfant": {
          "description": "Plafond appliqué aux frais de garde d'enfants",
          "valeur": 11400,
          "unite": "EUR / an / enfant",
          "date_effet": null,
          "source": {
            "texte": "Abattement forfaitaire pour frais de domesticité et de garde (règlement grand-ducal prévu par l'art. 127, al. 6 LIR)",
            "article": "non trouvé",
            "url": null
          },
          "statut": "non trouvé",
          "note": "Valeur de la version 3.4.3 conservée ; je n'ai pas retrouvé le règlement grand-ducal qui fixe ce plafond."
        },
        "deductions.interets_logement": {
          "description": "Intérêts d'emprunt pour l'habitation personnelle : déduits sans plafond",
          "valeur": null,
          "unite": "EUR / an",
          "date_effet": null,
          "source": {
            "texte": "LIR, art. 98bis (régime des intérêts liés à l'habitation)",
            "article": "non vérifié",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf"
          },
          "statut": "non trouvé",
          "note": "Les plafonds de l'art. 98bis ne sont pas appliqués : comportement de la version 3.4.3 conservé et signalé comme approximation."
        },
        "famille.moderation_enfant": {
          "description": "Modération d'impôt pour enfant sous forme de dégrèvement (seulement si aucune allocation familiale n'est versée)",
          "valeur": 922.5,
          "unite": "EUR / an / enfant",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 122, al. 2 et 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2025.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié",
          "usage": "Non déduite de l'impôt : selon l'art. 122, al. 2, la modération est réputée incluse dans l'allocation familiale versée."
        },
        "famille.allocation_familiale": {
          "description": "Allocation familiale de base par enfant et par mois (information, hors calcul de l'impôt)",
          "valeur": 299.86,
          "unite": "EUR / mois / enfant",
          "date_effet": null,
          "source": {
            "texte": "Code de la sécurité sociale, livre IV (Caisse pour l'avenir des enfants)",
            "article": "non vérifié",
            "url": null
          },
          "statut": "non trouvé",
          "note": "Valeur de la version 3.4.3 conservée sans source officielle consultée. Des publications syndicales (OGBL, LCGB) donnent 307,35 € à l'indice 968,04, ce qui suggère que 299,86 € correspond à l'indice antérieur à mai 2025."
        },
        "secu.salaire_social_minimum": {
          "description": "Salaire social minimum mensuel, salarié non qualifié de 18 ans et plus (indice 968,04)",
          "valeur": 2703.74,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Minima et maximum cotisables au 01.05.2025 »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2025/ccss-20250711-avis-80-99-fr-de.pdf"
          },
          "statut": "vérifié"
        },
        "secu.maximum_cotisable": {
          "description": "Maximum cotisable mensuel (5 × salaire social minimum), hors assurance dépendance",
          "valeur": 13518.68,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Minima et maximum cotisables au 01.05.2025 »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2025/ccss-20250711-avis-80-99-fr-de.pdf"
          },
          "statut": "modifié",
          "ancien": "13 518,70 € (5 × 2 703,74) dans la version 3.4.3 ; le CCSS publie 13 518,68 €."
        },
        "secu.abattement_dependance": {
          "description": "Abattement sur l'assiette de la contribution dépendance (1/4 du salaire social minimum)",
          "valeur": 675.93,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Minima et maximum cotisables au 01.05.2025 »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2025/ccss-20250711-avis-80-99-fr-de.pdf"
          },
          "statut": "vérifié"
        },
        "secu.salarie": {
          "description": "Taux de cotisation à charge du salarié",
          "valeur": {
            "maladie_nature": 0.028,
            "maladie_especes": 0.0025,
            "pension": 0.08,
            "dependance": 0.014
          },
          "unite": "taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2025 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2025/ccss-20250117-avis-80-99-fr-de.pdf"
          },
          "statut": "vérifié"
        },
        "secu.employeur": {
          "description": "Taux de cotisation à charge de l'employeur (secteur privé)",
          "valeur": {
            "maladie_nature": 0.028,
            "maladie_especes": 0.0025,
            "pension": 0.08,
            "accident_taux_base": 0.007,
            "accident_facteurs_bonus_malus": [
              0.85,
              1,
              1.1,
              1.3,
              1.5
            ],
            "mutualite_classes": [
              0.0007,
              0.0099,
              0.0148,
              0.0264
            ],
            "sante_au_travail": 0.0014
          },
          "unite": "taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2025 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2025/ccss-20250117-avis-80-99-fr-de.pdf"
          },
          "statut": "modifié",
          "note": "La version 3.4.3 utilisait une mutualité de 0,72 % multipliée par un coefficient A–E de 0,85 à 1,5. Le CCSS publie quatre classes de mutualité et, séparément, un facteur bonus-malus pour l'assurance accident. La santé au travail (0,14 %) ne concerne que les employeurs affiliés au service multisectoriel (STM)."
        }
      }
    },
    "2026-01": {
      "meta": {
        "id": "2026-01",
        "libelle": "Règles en vigueur au 1er janvier 2026",
        "en_vigueur_au": "2026-01-01",
        "format": 1,
        "statuts": {
          "vérifié": "valeur lue dans le texte officiel cité et identique à l'ancienne valeur",
          "modifié": "valeur lue dans le texte officiel cité et différente de l'ancienne valeur (ou du jeu précédent)",
          "non trouvé": "aucune source officielle vérifiée : ancienne valeur conservée et signalée"
        },
        "hors_perimetre": [
          "Indexation des salaires de 2,5 % au 1er juin 2026 (indice 992,24) : non intégrée, faute d'avis CCSS consulté.",
          "Crédit d'impôt conjoncture 2026 (projet de loi n° 8775, juin à décembre 2026) : non intégré, loi pas encore publiée au moment de la mise à jour."
        ]
      },
      "parametres": {
        "impot.bareme": {
          "description": "Tarif de l'impôt sur le revenu : taux applicable à partir de chaque seuil de revenu imposable ajusté",
          "valeur": [
            {
              "seuil": 0,
              "taux": 0
            },
            {
              "seuil": 13230,
              "taux": 0.08
            },
            {
              "seuil": 15435,
              "taux": 0.09
            },
            {
              "seuil": 17640,
              "taux": 0.1
            },
            {
              "seuil": 19845,
              "taux": 0.11
            },
            {
              "seuil": 22050,
              "taux": 0.12
            },
            {
              "seuil": 24255,
              "taux": 0.14
            },
            {
              "seuil": 26550,
              "taux": 0.16
            },
            {
              "seuil": 28845,
              "taux": 0.18
            },
            {
              "seuil": 31140,
              "taux": 0.2
            },
            {
              "seuil": 33435,
              "taux": 0.22
            },
            {
              "seuil": 35730,
              "taux": 0.24
            },
            {
              "seuil": 38025,
              "taux": 0.26
            },
            {
              "seuil": 40320,
              "taux": 0.28
            },
            {
              "seuil": 42615,
              "taux": 0.3
            },
            {
              "seuil": 44910,
              "taux": 0.32
            },
            {
              "seuil": 47205,
              "taux": 0.34
            },
            {
              "seuil": 49500,
              "taux": 0.36
            },
            {
              "seuil": 51795,
              "taux": 0.38
            },
            {
              "seuil": 54090,
              "taux": 0.39
            },
            {
              "seuil": 117450,
              "taux": 0.4
            },
            {
              "seuil": 176160,
              "taux": 0.41
            },
            {
              "seuil": 234870,
              "taux": 0.42
            }
          ],
          "unite": "EUR / taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 118",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié",
          "controle": "Identique dans les textes coordonnés au 1er janvier 2025 et au 1er janvier 2026 ; identique aux formules ACD 2025."
        },
        "impot.classe_1a": {
          "description": "Classe 1a : tarif appliqué au revenu réduit d'un quart de son complément à 79 380 €, taux d'accroissement plafonnés",
          "valeur": {
            "complement_reference": 79380,
            "fraction_complement": 0.25,
            "taux_accroissement_maximaux": [
              {
                "seuil": 51804,
                "taux": 0.39
              },
              {
                "seuil": 117450,
                "taux": 0.4
              },
              {
                "seuil": 176160,
                "taux": 0.41
              },
              {
                "seuil": 234870,
                "taux": 0.42
              }
            ]
          },
          "unite": "EUR / taux",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 120bis",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié",
          "controle": "Concorde au centime avec la colonne « classe 1a » des formules ACD 2025 (déduction 14 556,96 € à 39 %)."
        },
        "impot.classe_2": {
          "description": "Classe 2 : double de la cote correspondant à la moitié du revenu imposable ajusté (splitting)",
          "valeur": {
            "diviseur": 2
          },
          "unite": "nombre",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 121",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "impot.arrondi_revenu": {
          "description": "Le revenu imposable est arrondi au multiple inférieur de ce montant avant application du tarif",
          "valeur": 50,
          "unite": "EUR",
          "date_effet": "2002-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 126, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "impot.arrondi_cote": {
          "description": "Les cotes d'impôt sont arrondies au multiple inférieur d'un euro ; les cotes inférieures au seuil sont nulles",
          "valeur": {
            "arrondi": 1,
            "cote_minimale": 12
          },
          "unite": "EUR",
          "date_effet": "2008-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 124",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "cfe": {
          "description": "Contribution au fonds pour l'emploi (majoration de l'impôt)",
          "valeur": {
            "taux": 0.07,
            "taux_majore": 0.09,
            "seuil_classes_1_1a": 150000,
            "seuil_classe_2": 300000
          },
          "unite": "taux / EUR",
          "date_effet": "2013-01-01",
          "source": {
            "texte": "ACD, lexique « Fonds pour l'emploi » et formules du calcul automatisé de l'impôt 2025",
            "article": "Loi modifiée du 30 juin 1976 portant création d'un fonds pour l'emploi (article non vérifié)",
            "url": "https://impotsdirects.public.lu/fr/az/f/fond_empl.html",
            "url_formules": "https://impotsdirects.public.lu/dam-assets/fr/baremes/bareme-2025-format-excel.xlsx"
          },
          "statut": "vérifié (source ACD) ; article de loi à confirmer",
          "methode": "Au-delà du seuil, la majoration vaut I × 9 % − 2 % × I(seuil) selon les formules ACD (ex. classe 1 : I × 0,09 − 931,8) : le taux de 9 % ne s'applique qu'à la part de l'impôt au-delà de l'impôt dû au seuil, sans saut."
        },
        "credits.cis": {
          "description": "Crédit d'impôt pour salariés (CIS), annuel, selon le salaire brut annuel",
          "valeur": {
            "minimum": 936,
            "palier_1": 11265,
            "palier_2": 40000,
            "plafond_exclu": 80000,
            "montant_base": 300,
            "taux_progression": 0.029,
            "montant_plein": 600,
            "taux_degressivite": 0.015,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR / taux",
          "date_effet": "2024-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 154quater, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "credits.cico2": {
          "description": "Crédit d'impôt CO2 pour salariés (CI-CO2), annuel",
          "valeur": {
            "minimum": 936,
            "palier": 40000,
            "plafond_exclu": 80000,
            "montant_plein": 216,
            "taux_degressivite": 0.0054,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR / taux",
          "date_effet": "2026-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 154quater, al. 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 19 décembre 2025 concernant le budget 2026 (Mémorial A 2025 n° 591)"
          },
          "statut": "modifié",
          "confirmation": "https://impotsdirects.public.lu/fr/archive/newsletter/2025/nl23122025.html"
        },
        "credits.cissm": {
          "description": "Crédit d'impôt salaire social minimum (CISSM), mensuel, selon le salaire brut mensuel à temps plein",
          "valeur": {
            "minimum": 1800,
            "palier": 3000,
            "plafond_exclu": 3600,
            "montant_plein_mensuel": 81,
            "arrondi": "cent supérieur"
          },
          "unite": "EUR",
          "date_effet": "2025-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 139quater, al. 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 20 décembre 2024 (Mémorial A 2024 n° 589)"
          },
          "statut": "vérifié"
        },
        "deductions.frais_obtention_minimum": {
          "description": "Minimum forfaitaire de frais d'obtention pour un salaire (hors frais de déplacement)",
          "valeur": 540,
          "unite": "EUR / an",
          "date_effet": "1991-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 107, al. 1, n° 1",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.frais_deplacement": {
          "description": "Forfait pour frais de déplacement : 99 € par unité d'éloignement au-delà de 4, plafonné à 2 574 €",
          "valeur": {
            "par_unite": 99,
            "unites_non_comptees": 4,
            "plafond": 2574
          },
          "unite": "EUR / an",
          "date_effet": "2013-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 105bis, al. 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "modifié",
          "ancien": "Plafond de 4 620 € sans source dans la version 3.4.3."
        },
        "deductions.depenses_speciales_minimum": {
          "description": "Minimum forfaitaire de dépenses spéciales (assurances, intérêts, prévoyance-vieillesse), par salaire du ménage",
          "valeur": 480,
          "unite": "EUR / an",
          "date_effet": "1991-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 113, al. 1 et 2",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.plafond_assurances_interets": {
          "description": "Plafond commun primes d'assurance et intérêts débiteurs (hors logement), majoré du même montant pour le conjoint et chaque enfant",
          "valeur": 672,
          "unite": "EUR / an / personne",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 109, al. 1, n° 1a",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.prevoyance_vieillesse_plafond": {
          "description": "Plafond annuel des versements à un contrat individuel de prévoyance-vieillesse",
          "valeur": 4500,
          "unite": "EUR / an",
          "date_effet": "2026-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 111bis, al. 7",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo",
            "modifie_par": "Loi du 19 décembre 2025 (L.19.12.25, art. 2)"
          },
          "statut": "modifié"
        },
        "deductions.dons": {
          "description": "Libéralités : déductibles dans la limite de 20 % du total des revenus nets et de 1 000 000 €",
          "valeur": {
            "plafond_part_revenus": 0.2,
            "plafond_absolu": 1000000
          },
          "unite": "taux / EUR",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 109, al. 1, n° 3 et art. 112",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.dons_minimum": {
          "description": "Montant minimal de dons pour être déductible",
          "valeur": 120,
          "unite": "EUR / an",
          "date_effet": null,
          "source": {
            "texte": "Règlement grand-ducal prévu par l'art. 112, al. 3 LIR",
            "article": "non trouvé",
            "url": null
          },
          "statut": "non trouvé",
          "note": "L'art. 112, al. 3 renvoie à un règlement grand-ducal que je n'ai pas consulté. Valeur de la version 3.4.3 conservée."
        },
        "deductions.abattement_extra_professionnel": {
          "description": "Abattement extra-professionnel des époux imposés collectivement qui ont chacun un revenu professionnel",
          "valeur": 4500,
          "unite": "EUR / an",
          "date_effet": "2009-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 129b, al. 1",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié"
        },
        "deductions.charges_extraordinaires": {
          "description": "Part du revenu imposable en dessous de laquelle les charges extraordinaires (ex. frais médicaux) ne sont pas déductibles",
          "valeur": {
            "tranches": [
              10000,
              20000,
              30000,
              40000,
              50000,
              60000
            ],
            "classe_1": [
              0.02,
              0.04,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1
            ],
            "par_nombre_de_moderations": [
              [
                0,
                0.02,
                0.04,
                0.06,
                0.07,
                0.08,
                0.09
              ],
              [
                0,
                0,
                0.02,
                0.04,
                0.05,
                0.06,
                0.07
              ],
              [
                0,
                0,
                0,
                0.02,
                0.03,
                0.04,
                0.05
              ],
              [
                0,
                0,
                0,
                0,
                0.01,
                0.02,
                0.03
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0.01
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            ]
          },
          "unite": "taux",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 127, al. 4",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "modifié",
          "lecture": "Ligne i de « par_nombre_de_moderations » = nombre de modérations d'impôt pour enfants (0 à 5), pour les classes 1a et 2 ; chaque liste suit les tranches de revenu (< 10 000, 10 000-20 000, ..., > 60 000).",
          "ancien": "Seuil fixe de 2,5 % du brut dans la version 3.4.3."
        },
        "deductions.frais_garde_par_enfant": {
          "description": "Plafond appliqué aux frais de garde d'enfants",
          "valeur": 11400,
          "unite": "EUR / an / enfant",
          "date_effet": null,
          "source": {
            "texte": "Abattement forfaitaire pour frais de domesticité et de garde (règlement grand-ducal prévu par l'art. 127, al. 6 LIR)",
            "article": "non trouvé",
            "url": null
          },
          "statut": "non trouvé",
          "note": "Valeur de la version 3.4.3 conservée ; je n'ai pas retrouvé le règlement grand-ducal qui fixe ce plafond."
        },
        "deductions.interets_logement": {
          "description": "Intérêts d'emprunt pour l'habitation personnelle : déduits sans plafond",
          "valeur": null,
          "unite": "EUR / an",
          "date_effet": null,
          "source": {
            "texte": "LIR, art. 98bis (régime des intérêts liés à l'habitation)",
            "article": "non vérifié",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf"
          },
          "statut": "non trouvé",
          "note": "Les plafonds de l'art. 98bis ne sont pas appliqués : comportement de la version 3.4.3 conservé et signalé comme approximation."
        },
        "famille.moderation_enfant": {
          "description": "Modération d'impôt pour enfant sous forme de dégrèvement (seulement si aucune allocation familiale n'est versée)",
          "valeur": 922.5,
          "unite": "EUR / an / enfant",
          "date_effet": "2017-01-01",
          "source": {
            "texte": "Loi modifiée du 4 décembre 1967 concernant l'impôt sur le revenu (LIR), texte coordonné ACD",
            "article": "art. 122, al. 2 et 3",
            "url": "https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf",
            "legilux": "https://legilux.public.lu/eli/etat/leg/loi/1967/12/04/n1/jo"
          },
          "statut": "vérifié",
          "usage": "Non déduite de l'impôt : selon l'art. 122, al. 2, la modération est réputée incluse dans l'allocation familiale versée."
        },
        "famille.allocation_familiale": {
          "description": "Allocation familiale de base par enfant et par mois (information, hors calcul de l'impôt)",
          "valeur": null,
          "unite": "EUR / mois / enfant",
          "date_effet": null,
          "source": {
            "texte": "Code de la sécurité sociale, livre IV (Caisse pour l'avenir des enfants)",
            "article": "non vérifié",
            "url": null
          },
          "statut": "non trouvé",
          "note": "Aucune source officielle consultée pour 2026 : le montant n'est pas affiché."
        },
        "secu.salaire_social_minimum": {
          "description": "Salaire social minimum mensuel, salarié non qualifié de 18 ans et plus (indice 968,04)",
          "valeur": 2703.74,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2026 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf"
          },
          "statut": "vérifié"
        },
        "secu.maximum_cotisable": {
          "description": "Maximum cotisable mensuel (5 × salaire social minimum), hors assurance dépendance",
          "valeur": 13518.68,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2026 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf"
          },
          "statut": "modifié",
          "ancien": "13 518,70 € (5 × 2 703,74) dans la version 3.4.3 ; le CCSS publie 13 518,68 €."
        },
        "secu.abattement_dependance": {
          "description": "Abattement sur l'assiette de la contribution dépendance (1/4 du salaire social minimum)",
          "valeur": 675.93,
          "unite": "EUR / mois",
          "date_effet": "2025-05-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2026 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf"
          },
          "statut": "vérifié"
        },
        "secu.salarie": {
          "description": "Taux de cotisation à charge du salarié",
          "valeur": {
            "maladie_nature": 0.028,
            "maladie_especes": 0.0025,
            "pension": 0.085,
            "dependance": 0.014
          },
          "unite": "taux",
          "date_effet": "2026-01-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2026 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf"
          },
          "statut": "modifié",
          "note": "Pension portée de 8 % à 8,5 % au 1er janvier 2026 (avis CCSS du 16 janvier 2026)."
        },
        "secu.employeur": {
          "description": "Taux de cotisation à charge de l'employeur (secteur privé)",
          "valeur": {
            "maladie_nature": 0.028,
            "maladie_especes": 0.0025,
            "pension": 0.085,
            "accident_taux_base": 0.0065,
            "accident_facteurs_bonus_malus": [
              0.85,
              1,
              1.1,
              1.3,
              1.5
            ],
            "mutualite_classes": [
              0.0023,
              0.0095,
              0.0156,
              0.0266
            ],
            "sante_au_travail": 0.0014
          },
          "unite": "taux",
          "date_effet": "2026-01-01",
          "source": {
            "texte": "CCSS, avis aux employeurs « Taux de cotisation au 01.01.2026 pour salariés »",
            "article": "taux publiés par le Centre commun de la sécurité sociale (article du Code de la sécurité sociale non vérifié)",
            "url": "https://ccss.public.lu/dam-assets/publications/2026/ccss-20260116-avis-80-99-fr-de.pdf"
          },
          "statut": "modifié",
          "note": "La version 3.4.3 utilisait une mutualité de 0,72 % multipliée par un coefficient A–E de 0,85 à 1,5. Le CCSS publie quatre classes de mutualité et, séparément, un facteur bonus-malus pour l'assurance accident. La santé au travail (0,14 %) ne concerne que les employeurs affiliés au service multisectoriel (STM)."
        }
      }
    }
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
