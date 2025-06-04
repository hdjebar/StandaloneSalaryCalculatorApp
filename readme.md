# 🇱🇺 Luxembourg Payroll Calculator

A comprehensive web-based payroll calculator for Luxembourg, providing accurate calculations for gross/net salary, social security contributions, taxes, and employer costs based on legislation as of May 1st, 2025. The application is designed to be easily updated for future legislative changes.

## ✨ Features

### Core Functionality
- **Dual Input Mode**: Calculate from either gross salary or total employer cost
- **Real-time Conversion**: Instantly see the calculated counterpart value
- **Comprehensive Tax Calculations**: Full Luxembourg tax compliance
- **Social Security**: Complete employer and employee contribution calculations
- **Family Benefits**: Child allowances and tax credits integration

### Tax & Deduction Support
- **Tax Classes**: Support for Class 1, 1a, and 2
- **Mutuality Classes**: All classes from A (0.85) to E (1.5)
- **Professional Expenses**: Automatic minimum €540/year
- **Transport Deductions**: Up to €4,620/year
- **Childcare Expenses**: Up to €11,400/year per child
- **Private Pensions**: Up to €3,200/year
- **Insurance Premiums**: Up to €672/year
- **Mortgage Interest**: Home loans and energy-efficient renovations
- **Medical Expenses**: Above 2.5% of income threshold
- **Charitable Donations**: Minimum €120, maximum 20% of income

### Tax Credits Integration
- **Employee Tax Credit (CIS)**: Income-based credit with tiers
- **CO2 Tax Credit (CI-CO2)**: Environmental tax credit
- **Minimum Social Wage Tax Credit (CISSM)**: Support for lower incomes
- **Child Tax Credits**: Family support integration
- **Single Parent Credit (CIM)**: Information and guidance for Class 1a

### User Experience
- **Monthly & Annual Views**: Toggle between time periods
- **Interactive Charts**: Visual salary breakdown with pie charts
- **Real-time Validation**: Input sanitization and error handling
- **Export & Share**: JSON export and native sharing capabilities
- **Print-friendly**: Optimized print layouts
- **Responsive Design**: Mobile and desktop compatible
- **Accessibility**: ARIA labels and keyboard navigation
- **Tax Credits Display**: Comprehensive breakdown of all applicable credits
- **Visual Notifications**: Contextual information for special cases

## 🚀 Quick Start

### Installation
1. **Download**: Save the `index.html` file to your local machine
2. **Open**: Double-click the file or open in any modern web browser
3. **Use**: No installation, dependencies, or internet connection required

### Basic Usage
1. **Select Input Mode**: Choose between "Gross Salary" or "Total Employer Cost"
2. **Enter Salary**: Input your monthly amount in euros
3. **Set Tax Details**: Select your tax class and mutuality class
4. **Add Deductions** (optional): Enter any applicable deductions and benefits
5. **Calculate**: Click "Calculate Payroll" to see results
6. **View Results**: Switch between Monthly and Annual tabs

## 📊 Calculation Details

### Social Security Contributions

#### Employer Contributions
- **Health Insurance**: 3.05%
- **Pension Insurance**: 8.00%
- **Accident Insurance**: 0.70%
- **Occupational Health**: 0.14%
- **Employers' Mutuality**: 0.72% × mutuality factor

#### Employee Contributions
- **Health Insurance**: 3.05%
- **Pension Insurance**: 8.00%
- **Dependency Insurance**: 1.40% (with €675.94 reduction)

### Income Ceiling
- **Monthly Ceiling**: €13,518.70 (5 × SSM)
- **SSM (Unqualified)**: €2,703.74/month
- **Dependency Reduction**: €675.94/month

### Tax Brackets
Progressive tax system with 23 brackets ranging from 0% to 42%, with class-specific multipliers:
- **Class 1**: 100% of calculated tax
- **Class 1a**: 90% of calculated tax
- **Class 2**: 65% of calculated tax

### Solidarity Surcharge
- **Standard Rate**: 7% of income tax
- **Higher Rate**: 9% for high earners (€150k+ for Class 1/1a, €300k+ for Class 2)

### Tax Credits System
The calculator includes Luxembourg's comprehensive tax credit system:

#### Employee Tax Credit (CIS)
- **Eligibility**: Annual gross income €936 - €79,999.99
- **Tiers**: €300 base + income-based calculation up to €600 maximum
- **Reduction**: Phases out for incomes above €40,000

#### CO2 Tax Credit (CI-CO2)
- **Amount**: €192 for incomes up to €40,000
- **Reduction**: Decreases for higher incomes up to €79,999.99

#### Minimum Social Wage Tax Credit (CISSM)
- **Eligibility**: Monthly gross €1,800 - €3,600
- **Amount**: €81/month for incomes up to €3,000
- **Degressive**: Reduces proportionally between €3,000-€3,600

#### Single Parent Tax Credit (CIM)
- **For Tax Class 1a**: Information and guidance provided
- **Note**: Complex calculation requiring official consultation

### Tax Credits System
The calculator includes Luxembourg's comprehensive tax credit system:

#### Employee Tax Credit (CIS)
- **Eligibility**: Annual gross income €936 - €79,999.99
- **Tiers**: €300 base + income-based calculation up to €600 maximum
- **Reduction**: Phases out for incomes above €40,000

#### CO2 Tax Credit (CI-CO2)
- **Amount**: €192 for incomes up to €40,000
- **Reduction**: Decreases for higher incomes up to €79,999.99

#### Minimum Social Wage Tax Credit (CISSM)
- **Eligibility**: Monthly gross €1,800 - €3,600
- **Amount**: €81/month for incomes up to €3,000
- **Degressive**: Reduces proportionally between €3,000-€3,600

#### Single Parent Tax Credit (CIM)
- **For Tax Class 1a**: Information and guidance provided
- **Note**: Complex calculation requiring official consultation

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS variables and Flexbox/Grid
- **Charts**: Custom Canvas-based pie charts
- **Icons**: FontAwesome 6.0.0
- **No Dependencies**: Self-contained single-file application

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Key Components

#### State Management
```javascript
const appState = {
  currentInputMode: 'gross',
  isCalculating: false,
  currentCalculationData: null,
  salaryChartInstance: null,
  salaryExceedsCeiling: false
};
```

#### Configuration
```javascript
const CONFIG = {
  EMPLOYER_RATES: { /* rates */ },
  SOCIAL_SECURITY_PARAMETERS: { /* parameters */ },
  TAX_BRACKETS: [ /* 23 brackets */ ],
  FAMILY_BENEFITS: { /* allowances */ },
  TAX_CREDITS: { /* CIS, CI-CO2, CISSM parameters */ }
};
```

#### Core Functions
- `performCalculation()`: Main calculation engine
- `calculateEmployerContributions()`: Employer social security
- `calculateEmployeeContributions()`: Employee social security
- `calculateIncomeTax()`: Progressive tax calculation
- `calculateCIS()`: Employee tax credit calculation
- `calculateCICO2()`: CO2 tax credit calculation
- `calculateCISSM()`: Minimum social wage tax credit calculation
- `displayResults()`: UI updates and chart rendering

## 📱 Features Deep Dive

### Input Validation & Sanitization
- Real-time input cleaning and validation
- Prevents invalid characters and negative values
- Automatic formatting on blur events
- Error messaging with user-friendly feedback

### Responsive Design
- Mobile-first approach with progressive enhancement
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and inputs
- Optimized typography scaling

### Accessibility
- ARIA labels and roles for screen readers
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for all interactive elements

### Performance Optimizations
- Single-file architecture for fast loading
- Efficient DOM manipulation
- Optimized chart rendering
- Minimal external dependencies

## 💾 Data Export & Sharing

### Export Formats
- **JSON**: Complete calculation data with metadata
- **Print**: Optimized print layout for physical copies

### Sharing Options
- **Native Sharing**: Uses Web Share API when available
- **Clipboard**: Fallback copy-to-clipboard functionality
- **Summary Format**: Human-readable calculation summary

## 🔧 Customization

### Styling
The application uses CSS custom properties for easy theming:
```css
:root {
  --primary-color: #667eea;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
}
```

### Tax Law Updates
Tax brackets, rates, and tax credits are defined in the `CONFIG` object for easy updates when legislation changes:
```javascript
TAX_BRACKETS: [
  { limit: 13230, rate: 0.00 },
  { limit: 15435, rate: 0.08 },
  // ... additional brackets
],
TAX_CREDITS: {
  CIS: { /* Employee tax credit parameters */ },
  CICO2: { /* CO2 tax credit parameters */ },
  CISSM: { /* Min. social wage credit parameters */ }
}
```

This modular configuration approach ensures the calculator can be quickly adapted to new tax laws, social security rates, benefit amounts, or tax credit modifications without requiring extensive code changes.

## 📋 Supported Deductions

| Deduction Type | Maximum Amount | Notes |
|----------------|----------------|-------|
| Professional Expenses | Minimum €540/year | Automatically applied |
| Transport | €4,620/year | Commuting costs |
| Childcare | €11,400/year per child | Daycare, after-school care |
| Private Pension | €3,200/year | Pension plans and life insurance |
| Insurance Premiums | €672/year | Personal insurance premiums |
| Mortgage Interest | No limit | Home loans, energy renovations |
| Medical Expenses | Above 2.5% threshold | Healthcare costs |
| Charitable Donations | 20% of income | Minimum €120/year |

## 🎯 Use Cases

### For Employees
- Salary negotiation preparation
- Understanding take-home pay including all tax credits
- Tax planning and optimization with credit awareness
- Comparing job offers with full cost analysis

### For Employers
- Calculating total employment costs
- Budgeting for new hires with accurate tax projections
- Understanding social security obligations
- Payroll verification including tax credit impacts

### For HR Professionals
- Quick salary calculations
- Employee benefit explanations
- Compliance verification
- Training and education

## ⚖️ Legal Disclaimer

This calculator provides estimates based on Luxembourg tax laws and regulations as of May 1st, 2025. While every effort has been made to ensure accuracy:

- **Legislative Date**: Calculations reflect tax laws as of May 1st, 2025 and may need updates when legislation changes
- **Not Official**: Results are estimates, not official calculations
- **Professional Advice**: Consult a tax professional for official calculations
- **Regulation Changes**: Tax laws may change during the year
- **Individual Circumstances**: Special cases may require different calculations

## 🐛 Known Limitations

- Does not handle special tax situations (expatriate tax regime, etc.)
- No support for multiple income sources
- Limited to standard employment contracts
- Does not calculate 13th month bonus implications
- CIM (Single Parent Tax Credit) provides guidance only, not calculation

## 📈 Version History

### Version 3.3.3 (Current)
- **Tax Credits Integration**: Added CIS, CI-CO2, and CISSM tax credits
- **Enhanced Annual Summary**: Comprehensive tax credit breakdown
- **CIM Guidance**: Information notes for Single Parent Tax Credit eligibility
- **Improved Tax Display**: Separate before/after credits calculations
- **Enhanced Documentation**: Updated French translations and explanations

### Previous Versions
- 3.3.2: Enhanced monthly deductions and benefits display, chart improvements
- 3.3.x: Chart enhancements and UI improvements
- 3.2.x: Annual summary additions
- 3.1.x: Export and sharing functionality
- 3.0.x: Major refactoring and current tax updates

## 🤝 Contributing

While this is a standalone application, improvements are welcome:

1. **Bug Reports**: Document any calculation discrepancies
2. **Feature Requests**: Suggest useful additions
3. **Legislative Updates**: Help maintain compliance with new tax laws and regulations
4. **Accessibility**: Improvements for better user experience

The application's modular design makes it straightforward to update tax rates, social security contributions, and benefit amounts when Luxembourg's legislation changes.

## 📞 Support

For questions about Luxembourg tax law or payroll regulations, consult:
- **Administration des Contributions Directes**: Official tax authority
- **Chambre des Salariés**: Employee chamber
- **Local Tax Advisors**: Professional consultation

---

**Made with ❤️ for Luxembourg's workforce**  
*Accurate, accessible, and current*