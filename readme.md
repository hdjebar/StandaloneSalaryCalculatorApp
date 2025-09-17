# 🇱🇺 Luxembourg Payroll Calculator - Mobile & Desktop App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-3.4.3-blue.svg)](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp)
[![Desktop App](https://img.shields.io/badge/Desktop-Electron-9cf.svg)](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp)

> **Complete Luxembourg payroll calculator for 2025 with mobile and desktop app support**

A comprehensive web-based payroll calculator for Luxembourg that works as a Progressive Web App (PWA), mobile app, and desktop application. Features accurate calculations for gross/net salary, social security contributions, taxes, and employer costs based on May 2025 legislation.

## 🚀 Live Demo & Installation

### 📱 **Progressive Web App (Recommended)**
- **Live Demo:** [Coming Soon - Deploy to GitHub Pages]
- **Install:** Visit the demo → Click "Install App" in browser
- **Works on:** iOS, Android, Windows, macOS, Linux

### 🖥️ **Desktop App**
- **Electron:** Download from [Releases](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp/releases)
- **PWA Desktop:** Install directly from browser (Chrome/Edge)

### 📱 **Mobile Apps**
- **iOS:** Install PWA from Safari → Share → Add to Home Screen
- **Android:** Install PWA from Chrome → Menu → Add to Home Screen
- **Native Apps:** Coming soon to app stores

## ✨ Features

### 📊 **Core Functionality**
- **Dual Input Mode**: Calculate from gross salary or total employer cost
- **Real-time Conversion**: Instant calculation updates
- **Luxembourg Tax Compliance**: May 2025 legislation
- **Social Security**: Complete employer/employee contributions
- **Tax Credits**: CIS, CI-CO2, CISSM integration
- **Family Benefits**: Child allowances and deductions

### 📱 **Mobile & Desktop Ready**
- **Progressive Web App**: Install like native app
- **Offline Support**: Works without internet
- **Desktop Optimized**: Enhanced layouts for larger screens
- **Touch Friendly**: Mobile-first responsive design
- **Keyboard Shortcuts**: Desktop productivity features

### 🎯 **Enhanced UX**
- **Quick Start Templates**: Professional salary presets
- **Real-time Preview**: Live calculation estimates
- **Progress Tracking**: Visual form completion indicator
- **Smart Validation**: Comprehensive input validation
- **Auto-save**: Session persistence with privacy protection

## 🏗️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **PWA**: Service Worker, Web App Manifest
- **Desktop**: Electron wrapper available
- **Mobile**: Capacitor for native apps
- **No Dependencies**: Self-contained application
- **Offline First**: Full functionality without internet

## 🚀 Quick Start

### 1. **Try the PWA (Easiest)**
```bash
# Clone repository
git clone https://github.com/hdjebar/StandaloneSalalaryCalculatorApp.git
cd StandaloneSalalaryCalculatorApp

# Serve locally
python3 -m http.server 8080
# or
npx http-server . -p 8080

# Visit http://localhost:8080
# Click "Install App" in browser
```

### 2. **Desktop App (Electron)**
```bash
# Install dependencies
npm install

# Run desktop app
npm run electron

# Build installers
npm run electron-build-win    # Windows
npm run electron-build-mac    # macOS
npm run electron-build-linux  # Linux
```

### 3. **Mobile Apps (Capacitor)**
```bash
# Install dependencies
npm install

# Add platforms
npx cap add ios      # iOS (macOS only)
npx cap add android  # Android

# Build and run
npx cap run ios
npx cap run android
```

## 📱 Installation Guide

### **Progressive Web App**
1. **Chrome/Edge/Brave**: Visit app → Click "Install" button
2. **Safari (iOS)**: Share → Add to Home Screen
3. **Chrome (Android)**: Menu → Add to Home Screen

### **Desktop Installation**
- **PWA**: Install from browser (recommended)
- **Electron**: Download installer from releases
- **Manual**: Clone repo and run `npm run electron`

## 🧮 Calculation Features

### **Tax System (May 2025)**
- **23 Progressive Tax Brackets** (0% - 42%)
- **Tax Classes**: 1, 1a, 2 with optimization guidance
- **Solidarity Surcharge**: 7% standard, 9% high earners
- **Tax Credits**: Automatic CIS, CI-CO2, CISSM calculation

### **Social Security**
- **Employer Contributions**: Health (3.05%), Pension (8%), Accident (0.7%)
- **Employee Contributions**: Health (3.05%), Pension (8%), Dependency (1.4%)
- **Income Ceiling**: €13,518.70/month (5 × SSM)
- **Mutuality Classes**: A (0.85) to E (1.5)

### **Deductions & Benefits**
- **Professional Expenses**: Minimum €540/year
- **Transport**: Up to €4,620/year
- **Childcare**: Up to €11,400/year per child
- **Private Pensions**: Up to €3,200/year
- **Medical Expenses**: Above 2.5% threshold

## 🔧 Development

### **Project Structure**
```
├── index.html          # Main application
├── manifest.json       # PWA configuration
├── sw.js              # Service worker
├── main.js            # Electron main process
├── package.json       # Dependencies & scripts
├── capacitor.config.ts # Mobile app config
├── icons/             # App icons
└── docs/              # Documentation
```

### **Available Scripts**
```bash
npm run serve          # Local development server
npm run electron       # Desktop app
npm run electron-build # Build desktop installers
npx cap run ios        # iOS app
npx cap run android    # Android app
```

### **Build Requirements**
- **PWA**: Any web server
- **Desktop**: Node.js + Electron
- **iOS**: macOS + Xcode
- **Android**: Android Studio + SDK

## 📊 Platform Support

| Platform | PWA | Desktop | Native |
|----------|-----|---------|--------|
| **iOS** | ✅ | ✅ | 🚧 |
| **Android** | ✅ | ✅ | 🚧 |
| **Windows** | ✅ | ✅ | ❌ |
| **macOS** | ✅ | ✅ | ❌ |
| **Linux** | ✅ | ✅ | ❌ |

## 🔐 Privacy & Security

- **No Data Storage**: All calculations client-side
- **No Tracking**: Zero analytics or cookies
- **GDPR Compliant**: No personal data collection
- **Offline Capable**: Works without internet
- **Open Source**: Full transparency

## 📈 Roadmap

- [ ] **App Store Deployment** (iOS/Android)
- [ ] **Enhanced Desktop Features** (system integration)
- [ ] **Multi-language Support** (French, German)
- [ ] **Advanced Tax Scenarios** (expatriate regime)
- [ ] **Bulk Calculations** (multiple employees)
- [ ] **Export Formats** (PDF, Excel)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### **Areas for Contribution**
- Tax law updates and compliance
- Mobile app enhancements
- Desktop features
- Accessibility improvements
- Translations
- Bug fixes and optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### **Technical Support**
- **Issues**: [GitHub Issues](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp/discussions)
- **Documentation**: [Wiki](https://github.com/hdjebar/StandaloneSalalaryCalculatorApp/wiki)

### **Tax Law Questions**
- **ACD**: [Administration des Contributions Directes](https://impotsdirects.public.lu/)
- **CCSS**: [Centre Commun de Sécurité Sociale](https://www.ccss.lu/)
- **Government**: [Guichet.lu](https://guichet.public.lu/)

## 🏆 Acknowledgments

- Luxembourg Administration des Contributions Directes
- Centre Commun de Sécurité Sociale
- Luxembourg Government for legislative transparency
- Open source community for tools and libraries

---

**Made with ❤️ for Luxembourg's workforce**  
*Professional • Accurate • Mobile-Ready • Privacy-First*

### 🌟 Star this repository if it helps you!