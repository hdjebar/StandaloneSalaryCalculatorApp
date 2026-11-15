/*
 * calc.js : calcul de paie luxembourgeois (estimation annuelle).
 *
 * Fonctions pures, sans accès au DOM ni au réseau. Chaque fonction reçoit le jeu de
 * paramètres (params/AAAA-MM.json) en argument : aucune valeur fiscale n'est écrite ici.
 * Les références légales sont celles du texte coordonné de la LIR publié par l'ACD.
 *
 * Utilisable tel quel :
 *   - dans le navigateur : <script src="calc.js"></script> expose window.LuxPayroll ;
 *   - dans Node : const LuxPayroll = require('./calc.js').
 */
(function (racine, fabrique) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = fabrique();
  else racine.LuxPayroll = fabrique();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const EPS = 1e-9;

  /** Lit la valeur d'un paramètre ; erreur explicite s'il manque. */
  function val(params, id) {
    const p = params && params.parametres && params.parametres[id];
    if (!p) throw new Error(`Paramètre manquant : ${id}`);
    return p.valeur;
  }

  const arrondiInferieur = (x, pas) => Math.floor(x / pas + EPS) * pas;
  const centSuperieur = (x) => Math.ceil(x * 100 - EPS) / 100;
  const centEuro = (x) => Math.round(x * 100) / 100;

  // ---------------------------------------------------------------------------
  // Impôt sur le revenu (LIR, art. 118 à 124 et 126)
  // ---------------------------------------------------------------------------

  /** Tarif de l'art. 118 appliqué à un revenu, sans arrondi. */
  function tarif(revenu, params) {
    const tranches = val(params, 'impot.bareme');
    let impot = 0;
    for (let i = 0; i < tranches.length; i++) {
      const debut = tranches[i].seuil;
      const fin = i + 1 < tranches.length ? tranches[i + 1].seuil : Infinity;
      if (revenu <= debut) break;
      impot += (Math.min(revenu, fin) - debut) * tranches[i].taux;
    }
    return impot;
  }

  /** Classe 1a (art. 120bis) : tarif sur le revenu réduit d'un quart de son complément, accroissement plafonné. */
  function tarifClasse1a(revenu, params) {
    const c = val(params, 'impot.classe_1a');
    const plafonds = c.taux_accroissement_maximaux;
    const reduit = (r) => Math.max(0, r - c.fraction_complement * (c.complement_reference - r));
    const debutPlafond = plafonds[0].seuil;
    if (revenu <= debutPlafond) return tarif(reduit(revenu), params);
    let impot = tarif(reduit(debutPlafond), params);
    for (let i = 0; i < plafonds.length; i++) {
      const debut = plafonds[i].seuil;
      const fin = i + 1 < plafonds.length ? plafonds[i + 1].seuil : Infinity;
      if (revenu <= debut) break;
      impot += (Math.min(revenu, fin) - debut) * plafonds[i].taux;
    }
    return impot;
  }

  /**
   * Cote d'impôt (hors fonds pour l'emploi) pour un revenu imposable ajusté déjà arrondi.
   * Classe 1 : art. 120 ; classe 1a : art. 120bis ; classe 2 : art. 121 ; arrondis : art. 124.
   */
  function impotSurLeRevenu(revenuAjuste, classe, params) {
    let brut;
    if (classe === '1') brut = tarif(revenuAjuste, params);
    else if (classe === '1a') brut = tarifClasse1a(revenuAjuste, params);
    else if (classe === '2') {
      const d = val(params, 'impot.classe_2').diviseur;
      brut = d * tarif(revenuAjuste / d, params);
    } else throw new Error(`Classe d'impôt inconnue : ${classe}`);
    const a = val(params, 'impot.arrondi_cote');
    const cote = arrondiInferieur(brut, a.arrondi);
    return cote < a.cote_minimale ? 0 : cote;
  }

  /** Arrondi du revenu imposable avant le tarif (art. 126, al. 2). */
  function revenuImposableAjuste(revenuImposable, params) {
    return Math.max(0, arrondiInferieur(revenuImposable, val(params, 'impot.arrondi_revenu')));
  }

  /**
   * Contribution au fonds pour l'emploi, selon les formules de l'ACD :
   * 7 % de l'impôt, et au-delà du seuil, I × 9 % − 2 % × I(seuil).
   */
  function fondsPourEmploi(impot, revenuAjuste, classe, params) {
    const c = val(params, 'cfe');
    const seuil = classe === '2' ? c.seuil_classe_2 : c.seuil_classes_1_1a;
    if (revenuAjuste <= seuil) return arrondiInferieur(impot * c.taux, 1);
    const impotAuSeuil = impotSurLeRevenu(seuil, classe, params);
    return arrondiInferieur(impot * c.taux_majore - (c.taux_majore - c.taux) * impotAuSeuil, 1);
  }

  // ---------------------------------------------------------------------------
  // Crédits d'impôt (art. 154quater et 139quater)
  // ---------------------------------------------------------------------------

  /** Crédit d'impôt pour salariés, annuel (art. 154quater, al. 2). */
  function creditCIS(brutAnnuel, params) {
    const c = val(params, 'credits.cis');
    if (brutAnnuel < c.minimum || brutAnnuel >= c.plafond_exclu) return 0;
    let m;
    if (brutAnnuel <= c.palier_1) m = c.montant_base + (brutAnnuel - c.minimum) * c.taux_progression;
    else if (brutAnnuel <= c.palier_2) m = c.montant_plein;
    else m = c.montant_plein - (brutAnnuel - c.palier_2) * c.taux_degressivite;
    return centSuperieur(Math.max(0, Math.min(c.montant_plein, m)));
  }

  /** Crédit d'impôt CO2 pour salariés, annuel (art. 154quater, al. 2). */
  function creditCICO2(brutAnnuel, params) {
    const c = val(params, 'credits.cico2');
    if (brutAnnuel < c.minimum || brutAnnuel >= c.plafond_exclu) return 0;
    const m = brutAnnuel <= c.palier ? c.montant_plein
      : c.montant_plein - (brutAnnuel - c.palier) * c.taux_degressivite;
    return centSuperieur(Math.max(0, m));
  }

  /** Crédit d'impôt salaire social minimum, mensuel, pour un temps plein (art. 139quater, al. 3). */
  function creditCISSM(brutMensuel, params) {
    const c = val(params, 'credits.cissm');
    if (brutMensuel < c.minimum || brutMensuel >= c.plafond_exclu) return 0;
    const m = brutMensuel <= c.palier ? c.montant_plein_mensuel
      : (c.montant_plein_mensuel / (c.plafond_exclu - c.palier)) * (c.plafond_exclu - brutMensuel);
    return centSuperieur(m);
  }

  // ---------------------------------------------------------------------------
  // Cotisations sociales (taux publiés par le CCSS)
  // ---------------------------------------------------------------------------

  /** Cotisations mensuelles du salarié. */
  function cotisationsSalarie(brutMensuel, params) {
    const t = val(params, 'secu.salarie');
    const assiette = Math.min(brutMensuel, val(params, 'secu.maximum_cotisable'));
    const assietteDependance = Math.max(0, brutMensuel - val(params, 'secu.abattement_dependance'));
    const r = {
      maladie: centEuro(assiette * (t.maladie_nature + t.maladie_especes)),
      pension: centEuro(assiette * t.pension),
      dependance: centEuro(assietteDependance * t.dependance)
    };
    r.total = centEuro(r.maladie + r.pension + r.dependance);
    return r;
  }

  /** Taux employeur total (hors plafond) pour une classe de mutualité (1 à 4) et un facteur bonus-malus. */
  function tauxEmployeur(options, params) {
    const t = val(params, 'secu.employeur');
    const classe = Number(options.classeMutualite || 1);
    const facteur = Number(options.facteurAccident || 1);
    if (!(classe >= 1 && classe <= t.mutualite_classes.length)) throw new Error(`Classe de mutualité inconnue : ${classe}`);
    if (!t.accident_facteurs_bonus_malus.includes(facteur)) throw new Error(`Facteur bonus-malus inconnu : ${facteur}`);
    return {
      maladie: t.maladie_nature + t.maladie_especes,
      pension: t.pension,
      accident: t.accident_taux_base * facteur,
      mutualite: t.mutualite_classes[classe - 1],
      santeAuTravail: options.santeAuTravail === false ? 0 : t.sante_au_travail
    };
  }

  /** Cotisations mensuelles de l'employeur, toutes plafonnées au maximum cotisable. */
  function cotisationsEmployeur(brutMensuel, options, params) {
    const taux = tauxEmployeur(options || {}, params);
    const assiette = Math.min(brutMensuel, val(params, 'secu.maximum_cotisable'));
    const r = {};
    let total = 0;
    for (const [cle, tx] of Object.entries(taux)) { r[cle] = centEuro(assiette * tx); total += r[cle]; }
    r.total = centEuro(total);
    return r;
  }

  /** Salaire brut correspondant à un coût employeur total donné (inverse exact, plafond compris). */
  function brutDepuisCoutEmployeur(cout, options, params) {
    const tx = Object.values(tauxEmployeur(options || {}, params)).reduce((s, x) => s + x, 0);
    const max = val(params, 'secu.maximum_cotisable');
    return cout <= max * (1 + tx) ? cout / (1 + tx) : cout - max * tx;
  }

  // ---------------------------------------------------------------------------
  // Du brut au revenu imposable (art. 105bis, 107, 109 à 113, 127, 129b)
  // ---------------------------------------------------------------------------

  /** Forfait pour frais de déplacement (art. 105bis, al. 3). */
  function fraisDeplacement(unitesEloignement, params) {
    const f = val(params, 'deductions.frais_deplacement');
    const u = Math.max(0, Math.floor(Number(unitesEloignement) || 0) - f.unites_non_comptees);
    return Math.min(f.plafond, u * f.par_unite);
  }

  /** Taux de l'art. 127, al. 4 au-dessous duquel les charges extraordinaires ne sont pas déductibles. */
  function tauxChargesExtraordinaires(revenuImposable, classe, enfants, params) {
    const t = val(params, 'deductions.charges_extraordinaires');
    let i = 0;
    while (i < t.tranches.length && revenuImposable >= t.tranches[i]) i++;
    if (classe === '1' && !enfants) return t.classe_1[i];
    const n = Math.min(Math.max(0, enfants | 0), t.par_nombre_de_moderations.length - 1);
    return t.par_nombre_de_moderations[n][i];
  }

  /** Revenu net d'un salaire : brut − cotisations maladie et pension (art. 110, n° 1) − frais d'obtention. */
  function revenuNetSalaire(brutMensuel, entrees, params) {
    const cs = cotisationsSalarie(brutMensuel, params);
    const cotisationsDeductibles = (cs.maladie + cs.pension) * 12;
    const fo = Math.max(val(params, 'deductions.frais_obtention_minimum'), Number(entrees.fraisObtention) || 0);
    const fd = fraisDeplacement(entrees.unitesEloignement, params);
    return { brutAnnuel: brutMensuel * 12, cotisationsDeductibles, fraisObtention: fo, fraisDeplacement: fd,
      revenuNet: brutMensuel * 12 - cotisationsDeductibles - fo - fd };
  }

  /**
   * Revenu imposable et revenu imposable ajusté du ménage.
   * entrees : { brutMensuel, classe, enfants, fraisObtention, unitesEloignement, primesAssurance,
   *             prevoyanceVieillesse, dons, fraisMedicaux, fraisGarde, interetsLogement,
   *             conjoint: { brutMensuel, fraisObtention, unitesEloignement } (classe 2 seulement) }
   */
  function revenuImposable(entrees, params) {
    const classe = String(entrees.classe);
    const enfants = Math.max(0, entrees.enfants | 0);
    const salaires = [revenuNetSalaire(Number(entrees.brutMensuel) || 0, entrees, params)];
    const conjointSalarie = classe === '2' && entrees.conjoint && Number(entrees.conjoint.brutMensuel) > 0;
    if (conjointSalarie) salaires.push(revenuNetSalaire(Number(entrees.conjoint.brutMensuel), entrees.conjoint, params));

    // Approximation conservée de la version 3.4.3 : intérêts du logement déduits sans les plafonds de l'art. 98bis.
    const interetsLogement = Math.max(0, Number(entrees.interetsLogement) || 0);
    const totalRevenusNets = salaires.reduce((s, x) => s + x.revenuNet, 0) - interetsLogement;

    // Dépenses spéciales : forfait de 480 € par salaire (art. 113) ou montants réels plafonnés (art. 109 et 111bis).
    const personnes = 1 + (classe === '2' ? 1 : 0) + enfants;
    const assurances = Math.min(Math.max(0, Number(entrees.primesAssurance) || 0),
      val(params, 'deductions.plafond_assurances_interets') * personnes);
    const prevoyance = Math.min(Math.max(0, Number(entrees.prevoyanceVieillesse) || 0),
      val(params, 'deductions.prevoyance_vieillesse_plafond'));
    const forfaitDS = val(params, 'deductions.depenses_speciales_minimum') * salaires.length;
    const depensesSpeciales = Math.max(forfaitDS, assurances + prevoyance);
    const donsSaisis = Math.max(0, Number(entrees.dons) || 0);
    const d = val(params, 'deductions.dons');
    const dons = donsSaisis < val(params, 'deductions.dons_minimum') ? 0
      : Math.min(donsSaisis, d.plafond_part_revenus * Math.max(0, totalRevenusNets), d.plafond_absolu);

    const imposable = totalRevenusNets - depensesSpeciales - dons;

    // Abattements (art. 127 et 129b ; frais de garde : plafond non sourcé, conservé).
    const abattExtraPro = conjointSalarie ? val(params, 'deductions.abattement_extra_professionnel') : 0;
    const tauxCE = tauxChargesExtraordinaires(imposable, classe, enfants, params);
    const chargesExtraordinaires = Math.max(0, (Number(entrees.fraisMedicaux) || 0) - tauxCE * Math.max(0, imposable));
    const fraisGarde = Math.min(Math.max(0, Number(entrees.fraisGarde) || 0),
      enfants * val(params, 'deductions.frais_garde_par_enfant'));

    const avantArrondi = imposable - abattExtraPro - chargesExtraordinaires - fraisGarde;
    return {
      salaires, interetsLogement, totalRevenusNets, depensesSpeciales, dons, revenuImposable: imposable,
      abattementExtraProfessionnel: abattExtraPro, tauxChargesExtraordinaires: tauxCE, chargesExtraordinaires, fraisGarde,
      revenuImposableAjuste: revenuImposableAjuste(avantArrondi, params)
    };
  }

  // ---------------------------------------------------------------------------
  // Calcul complet
  // ---------------------------------------------------------------------------

  /**
   * Calcul annuel complet, ramené au mois.
   * entrees : voir revenuImposable(), plus { classeMutualite (1-4), facteurAccident }.
   */
  function calculer(entrees, params) {
    const classe = String(entrees.classe);
    const brutMensuel = Number(entrees.brutMensuel) || 0;
    const brutAnnuel = brutMensuel * 12;
    const enfants = Math.max(0, entrees.enfants | 0);

    const cs = cotisationsSalarie(brutMensuel, params);
    const ce = cotisationsEmployeur(brutMensuel, entrees, params);
    const ri = revenuImposable(entrees, params);
    const impot = impotSurLeRevenu(ri.revenuImposableAjuste, classe, params);
    const cfe = fondsPourEmploi(impot, ri.revenuImposableAjuste, classe, params);

    const cis = creditCIS(brutAnnuel, params);
    const cico2 = creditCICO2(brutAnnuel, params);
    const cissmMensuel = creditCISSM(brutMensuel, params);
    const credits = centEuro(cis + cico2 + cissmMensuel * 12);

    // Les crédits sont « imputables et restituables » (art. 154quater) : le solde peut être négatif (crédit versé).
    const impotNetAnnuel = centEuro(impot + cfe - credits);
    const netMensuel = centEuro(brutMensuel - cs.total - impotNetAnnuel / 12);

    const af = params.parametres['famille.allocation_familiale'];
    return {
      regles: params.meta,
      classe, enfants, brutMensuel, brutAnnuel,
      cotisationsSalarie: cs,
      cotisationsEmployeur: ce,
      coutEmployeurMensuel: centEuro(brutMensuel + ce.total),
      depassePlafond: brutMensuel > val(params, 'secu.maximum_cotisable'),
      revenu: ri,
      impot, fondsPourEmploi: cfe, impotAvantCredits: impot + cfe,
      credits: { cis, cico2, cissmMensuel, cissmAnnuel: centEuro(cissmMensuel * 12), total: credits },
      impotNetAnnuel, impotNetMensuel: centEuro(impotNetAnnuel / 12),
      netMensuel, netAnnuel: centEuro(netMensuel * 12),
      allocationFamilialeMensuelle: af && af.valeur != null ? centEuro(af.valeur * enfants) : null
    };
  }

  return {
    tarif, tarifClasse1a, impotSurLeRevenu, revenuImposableAjuste, fondsPourEmploi,
    creditCIS, creditCICO2, creditCISSM,
    cotisationsSalarie, cotisationsEmployeur, tauxEmployeur, brutDepuisCoutEmployeur,
    fraisDeplacement, tauxChargesExtraordinaires, revenuNetSalaire, revenuImposable, calculer
  };
});
