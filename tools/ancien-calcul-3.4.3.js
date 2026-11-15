// Reproduction à l'identique du calcul de la version 3.4.3 (commit d8cbfc1), pour docs/ecarts.md.
// Les blocs CONFIG et les fonctions de calcul sont copiés tels quels depuis l'ancien index.html ;
// seule la fonction ancienCalcul() réécrit sans DOM l'arithmétique de l'ancienne performCalculation().
// Ce fichier n'est pas chargé par l'application.
'use strict';
    const SSM_MONTHLY_UNQUALIFIED = 2703.74; // Social Minimum Wage (Unqualified) - Example for 2025

    // Configuration object for various rates and parameters.
    // Object.freeze prevents modification of the CONFIG object after initialization.
    const CONFIG = Object.freeze({
      EMPLOYER_RATES: { 
        healthInsurance: 0.0305, 
        pensionInsurance: 0.08,  
        occupationalHealth: 0.0014, 
        accident: 0.0070, 
        mutualityBase: 0.0072 
      },
      SOCIAL_SECURITY_PARAMETERS: {
        ssmMonthlyUnqualified: SSM_MONTHLY_UNQUALIFIED,
        monthlyIncomeCeiling: SSM_MONTHLY_UNQUALIFIED * 5, 
        dependencyBaseReduction: SSM_MONTHLY_UNQUALIFIED / 4, 
        dependencyRate: 0.014 
      },
      PROFESSIONAL_EXPENSES_MIN_ANNUAL: 540,
      FAMILY_BENEFITS: {
        childAllowanceMonthly: 299.86,
        childTaxCreditAnnual: 922.56
      },
      TRANSPORT_DEDUCTION_MAX_ANNUAL: 4620,
      CHARITABLE_DONATION: {
        minAnnual: 120,
        maxPercentIncome: 0.20,
        maxAbsoluteAnnual: 1000000
      },
      DEDUCTION_LIMITS: {
        childcarePerChild: 11400,
        privatePension: 3200,
        insurancePremiums: 672,
        medicalExpensesThreshold: 0.025 
      },
      // Tax brackets for income tax calculation (example values).
      TAX_BRACKETS: [ 
        { limit: 13230, rate: 0.00 }, { limit: 15435, rate: 0.08 }, { limit: 17640, rate: 0.09 },
        { limit: 19845, rate: 0.10 }, { limit: 22050, rate: 0.11 }, { limit: 24255, rate: 0.12 },
        { limit: 26550, rate: 0.14 }, { limit: 28845, rate: 0.16 }, { limit: 31140, rate: 0.18 },
        { limit: 33435, rate: 0.20 }, { limit: 35730, rate: 0.22 }, { limit: 38025, rate: 0.24 },
        { limit: 40320, rate: 0.26 }, { limit: 42615, rate: 0.28 }, { limit: 44910, rate: 0.30 },
        { limit: 47205, rate: 0.32 }, { limit: 49500, rate: 0.34 }, { limit: 51795, rate: 0.36 },
        { limit: 54090, rate: 0.38 }, { limit: 117450, rate: 0.39 }, { limit: 176160, rate: 0.40 },
        { limit: 234870, rate: 0.41 }, { limit: Infinity, rate: 0.42 }
      ],
      // Tax credit parameters.
      TAX_CREDITS: {
        CIS: { // Employee Tax Credit
          minAnnualGross: 936, maxAnnualGross: 79999.99, threshold1: 11265,
          threshold2: 40000, amountTier1: 300, amountTier2: 600,
          rate1: 0.029, rate2: 0.015
        },
        CICO2: { // CO2 Tax Credit
          minAnnualGross: 936, maxAnnualGross: 79999.99, threshold: 40000,
          amountFull: 192, reductionRate: 0.0048
        },
        CISSM: { // Minimum Social Wage Tax Credit
            minMonthlyGross: 1800, threshold1Monthly: 3000, threshold2Monthly: 3600,
            amountFullMonthly: 81,
        }
      }
    });


    function applyMonthlyCeilingAndCalculate(grossMonthlySalary, monthlyIncomeCeiling, rate) {
        const cappedSalary = Math.min(grossMonthlySalary, monthlyIncomeCeiling);
        return cappedSalary * rate;
    }

    /**
     * Calculates total employer cost from gross salary.
     * @param {number} grossSalary - Monthly gross salary.
     * @param {number} mutualityClass - Mutuality class factor.
     * @returns {number} - Total monthly employer cost.
     */
    function calculateTotalEmployerCost(grossSalary, mutualityClass) {
      const contributions = calculateEmployerContributions(grossSalary, mutualityClass);
      return grossSalary + Object.values(contributions).reduce((sum, value) => sum + value, 0);
    }

    /**
     * Calculates gross salary from total employer cost.
     * @param {number} totalCost - Total monthly employer cost.
     * @param {number} mutualityClass - Mutuality class factor.
     * @returns {number} - Monthly gross salary.
     */
    function calculateGrossFromTotal(totalCost, mutualityClass) {
      let totalRate = CONFIG.EMPLOYER_RATES.healthInsurance + CONFIG.EMPLOYER_RATES.pensionInsurance +
                      CONFIG.EMPLOYER_RATES.occupationalHealth + CONFIG.EMPLOYER_RATES.accident +
                      (CONFIG.EMPLOYER_RATES.mutualityBase * mutualityClass);
      return totalCost / (1 + totalRate);
    }

    /**
     * Calculates employer's social security contributions.
     * @param {number} grossSalary - Monthly gross salary.
     * @param {number} mutualityFactor - Mutuality class factor.
     * @returns {object} - Object with individual employer contributions.
     */
    function calculateEmployerContributions(grossSalary, mutualityFactor) {
      const ceil = CONFIG.SOCIAL_SECURITY_PARAMETERS.monthlyIncomeCeiling;
      return {
        health: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.healthInsurance),
        pension: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.pensionInsurance),
        occupationalHealth: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.occupationalHealth),
        accident: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.accident),
        employersMutuality: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.mutualityBase * mutualityFactor)
      };
    }

    /**
     * Calculates employee's social security contributions.
     * @param {number} grossSalary - Monthly gross salary.
     * @returns {object} - Object with individual employee contributions.
     */
    function calculateEmployeeContributions(grossSalary) {
      const ceil = CONFIG.SOCIAL_SECURITY_PARAMETERS.monthlyIncomeCeiling;
      // Dependency insurance base: gross salary minus 1/4 of SSM, cannot be negative.
      const dependencyBase = Math.max(0, grossSalary - CONFIG.SOCIAL_SECURITY_PARAMETERS.dependencyBaseReduction);
      return {
        health: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.healthInsurance), 
        pension: applyMonthlyCeilingAndCalculate(grossSalary, ceil, CONFIG.EMPLOYER_RATES.pensionInsurance), 
        dependency: dependencyBase * CONFIG.SOCIAL_SECURITY_PARAMETERS.dependencyRate
      };
    }

    /**
     * Calculates income tax and solidarity surcharge.
     * @param {number} annualTaxableIncome - Annual taxable income.
     * @param {string} taxClass - Tax class ('1', '1a', '2').
     * @returns {object} - Object with incomeTax, solidaritySurcharge, and totalTax.
     */
    function calculateIncomeTax(annualTaxableIncome, taxClass) {
      let tax = 0; 
      let previousLimit = 0;
      const income = Math.max(0, annualTaxableIncome); // Ensure income is not negative.

      for (const bracket of CONFIG.TAX_BRACKETS) {
        if (income <= previousLimit) break;
        tax += (Math.min(income, bracket.limit) - previousLimit) * bracket.rate;
        previousLimit = bracket.limit;
      }
      
      // Apply tax class coefficient.
      const taxClassMultiplier = { '1': 1.0, '1a': 0.9, '2': 0.65 }[taxClass] || 1.0;
      tax *= taxClassMultiplier;

      // Calculate solidarity surcharge (7% or 9% based on income and tax class).
      let solidarityRate = 0.07;
      if (((taxClass === '1' || taxClass === '1a') && income > 150000) || (taxClass === '2' && income > 300000)) {
        solidarityRate = 0.09;
      }
      const surcharge = tax * solidarityRate;
      
      return { incomeTax: tax, solidaritySurcharge: surcharge, totalTax: tax + surcharge };
    }

    /** Calculates Employee Tax Credit (CIS). */
    function calculateCIS(annualGrossSalary) {
        const CIS_CONFIG = CONFIG.TAX_CREDITS.CIS;
        if (annualGrossSalary < CIS_CONFIG.minAnnualGross || annualGrossSalary > CIS_CONFIG.maxAnnualGross) return 0;
        if (annualGrossSalary <= CIS_CONFIG.threshold1) { 
            return Math.min(CIS_CONFIG.amountTier2, CIS_CONFIG.amountTier1 + (annualGrossSalary - CIS_CONFIG.minAnnualGross) * CIS_CONFIG.rate1);
        } else if (annualGrossSalary <= CIS_CONFIG.threshold2) { 
            return CIS_CONFIG.amountTier2;
        } else { 
            return Math.max(0, CIS_CONFIG.amountTier2 - (annualGrossSalary - CIS_CONFIG.threshold2) * CIS_CONFIG.rate2);
        }
    }

    /** Calculates CO2 Tax Credit (CI-CO2). */
    function calculateCICO2(annualGrossSalary) {
        const CICO2_CONFIG = CONFIG.TAX_CREDITS.CICO2;
        if (annualGrossSalary < CICO2_CONFIG.minAnnualGross || annualGrossSalary > CICO2_CONFIG.maxAnnualGross) return 0;
        if (annualGrossSalary <= CICO2_CONFIG.threshold) { 
            return CICO2_CONFIG.amountFull;
        } else { 
            return Math.max(0, CICO2_CONFIG.amountFull - (annualGrossSalary - CICO2_CONFIG.threshold) * CICO2_CONFIG.reductionRate);
        }
    }

    /** Calculates Minimum Social Wage Tax Credit (CISSM). */
    function calculateCISSM(monthlyGrossSalary) {
        const CISSM_CONFIG = CONFIG.TAX_CREDITS.CISSM;
        if (monthlyGrossSalary < CISSM_CONFIG.minMonthlyGross) return 0;
        if (monthlyGrossSalary <= CISSM_CONFIG.threshold1Monthly) { 
            return CISSM_CONFIG.amountFullMonthly;
        } else if (monthlyGrossSalary <= CISSM_CONFIG.threshold2Monthly) { 
            return Math.max(0, CISSM_CONFIG.amountFullMonthly * (1 - (monthlyGrossSalary - CISSM_CONFIG.threshold1Monthly) / (CISSM_CONFIG.threshold2Monthly - CISSM_CONFIG.threshold1Monthly)));
        }
        return 0; 
    }


function ancienCalcul(e) {
  const grossMonthlySalary = e.brutMensuel;
  const mutualityClassValue = e.coefficientMutualite || 1.0;
  const numChildrenValue = e.enfants || 0;
  const childcareExpensesValue = e.fraisGarde || 0;
  const annualGrossSalary = grossMonthlySalary * 12;
  const employerContributions = calculateEmployerContributions(grossMonthlySalary, mutualityClassValue);
  const employeeContributions = calculateEmployeeContributions(grossMonthlySalary);
  const totalMonthlyEmployeeSSC = Object.values(employeeContributions).reduce((s, v) => s + v, 0);
  const annualEmployeeSSC = totalMonthlyEmployeeSSC * 12;
  const professionalExpenses = Math.max(CONFIG.PROFESSIONAL_EXPENSES_MIN_ANNUAL, e.fraisObtention || 0);
  const transportDeduction = Math.min(e.deductionTransport || 0, CONFIG.TRANSPORT_DEDUCTION_MAX_ANNUAL);
  const childcareDeduction = Math.min(childcareExpensesValue, numChildrenValue * CONFIG.DEDUCTION_LIMITS.childcarePerChild);
  const totalAnnualDeductions = professionalExpenses + transportDeduction + childcareDeduction;
  const annualTaxableIncome = Math.max(0, annualGrossSalary - annualEmployeeSSC - totalAnnualDeductions);
  const taxCalculationResult = calculateIncomeTax(annualTaxableIncome, e.classe);
  const annualCISCredit = calculateCIS(annualGrossSalary);
  const annualCICO2Credit = calculateCICO2(annualGrossSalary);
  const annualCISSMCredit = calculateCISSM(grossMonthlySalary) * 12;
  const annualChildTaxCreditValue = numChildrenValue * CONFIG.FAMILY_BENEFITS.childTaxCreditAnnual;
  const totalAnnualTaxCredits = annualChildTaxCreditValue + annualCISCredit + annualCICO2Credit + annualCISSMCredit;
  const effectiveAnnualTax = Math.max(0, taxCalculationResult.totalTax - totalAnnualTaxCredits);
  const monthlyTax = effectiveAnnualTax / 12;
  return {
    revenuImposable: annualTaxableIncome,
    impotAvantCredits: taxCalculationResult.totalTax,
    credits: totalAnnualTaxCredits,
    impotNetAnnuel: effectiveAnnualTax,
    cotisationsSalarie: totalMonthlyEmployeeSSC,
    netMensuel: grossMonthlySalary - totalMonthlyEmployeeSSC - monthlyTax,
    coutEmployeur: grossMonthlySalary + Object.values(employerContributions).reduce((s, v) => s + v, 0)
  };
}

module.exports = { ancienCalcul, CONFIG };
