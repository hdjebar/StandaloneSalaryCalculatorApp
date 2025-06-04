# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.3.4] - 2025-05-02

### Added
- Smart tax class validation with contextual warnings for family optimization
- Cross-field validation for Tax Class 1 with children scenarios
- Professional warning system with clean visual design and accessibility
- Enhanced user guidance for tax optimization recommendations
- Real-time form validation improvements with immediate contextual feedback
- CSS variables for consistent warning styling across all components
- `validateTaxClassAndChildren()` function for intelligent tax class recommendations

### Changed
- Improved tax class selection user experience with smart recommendations
- Enhanced form validation logic with cross-field dependency checking
- Better visual feedback system for user guidance and warnings
- Updated footer version information to reflect validation enhancements
- Refined warning message styling for better accessibility and mobile responsiveness
- Enhanced clear form functionality to properly handle warning states

### Fixed
- Tax class recommendation accuracy for complex family situations
- Form validation edge cases with multiple field interactions
- Mobile responsiveness for warning notifications and alerts
- Warning message positioning and overflow handling on small screens
- Accessibility improvements for screen reader compatibility with warnings
- Event listener management for tax class and children field validation

### Technical
- Added intelligent validation function with real-time cross-field checking
- Enhanced CSS with semantic warning-specific color variables
- Improved event listener management for form validation states
- Updated clear form functionality to handle all warning states properly
- Optimized warning display logic for better performance

## [3.3.3] - 2025-05-01

### Added
- Comprehensive tax credits system (CIS, CI-CO2, CISSM)
- Single parent tax credit (CIM) guidance for Tax Class 1a
- Enhanced monthly tax credits display card with detailed breakdown
- Annual tax credits breakdown in comprehensive annual summary
- Professional documentation and compliance matrix for audit readiness
- Audit-ready export functionality with complete calculation data

### Changed
- Improved tax calculation display with before/after credits separation
- Enhanced French translations and explanations throughout interface
- Updated README with comprehensive professional documentation
- Refined chart layouts and legends for better data visualization
- Improved result card organization and information hierarchy

### Fixed
- Tax credit calculation accuracy across all income ranges
- Mobile responsiveness for new tax credit components
- Print layout optimization for professional documentation
- Chart rendering performance improvements

### Technical
- Added `calculateCIS()`, `calculateCICO2()`, `calculateCISSM()` functions
- Enhanced configuration object with tax credit parameters
- Improved result data structure for tax credit storage
- Updated chart rendering for better performance and accuracy

## [3.3.2] - 2025-04-15

### Added
- Enhanced monthly deductions and benefits display with detailed breakdown
- Social security ceiling notifications for salary calculations
- Improved chart layouts and legends with better visual hierarchy
- Responsive design improvements for mobile and tablet devices
- Additional visual indicators for important calculation notes

### Changed
- Updated summary calculations display for better user comprehension
- Refined UI components for improved accessibility and usability
- Enhanced color scheme consistency across all components
- Improved spacing and typography for better readability

### Fixed
- Chart rendering issues on high-DPI displays
- Mobile layout problems with result cards
- Print stylesheet compatibility across browsers

## [3.3.1] - 2025-04-01

### Added
- Chart enhancements with better visual representation
- Improved error handling and user feedback systems
- Better responsive behavior for chart containers
- Enhanced accessibility features for visual elements

### Fixed
- Minor calculation edge cases for very high salaries
- Mobile display issues with chart legend positioning
- Form validation edge cases with empty inputs
- Browser compatibility issues with chart rendering

### Changed
- Improved chart color palette for better contrast
- Enhanced mobile navigation and interaction patterns

## [3.2.0] - 2025-03-15

### Added
- Comprehensive annual summary calculations with detailed breakdowns
- Enhanced results display with tabbed interface for monthly/annual views
- Export functionality improvements with better data formatting
- Professional result presentation with clear categorization

### Changed
- Restructured results display for better information organization
- Improved calculation performance for complex scenarios
- Enhanced user interface consistency across all components

### Fixed
- Annual calculation accuracy for tax credit scenarios
- Export functionality across different browsers
- Results display formatting for edge cases

## [3.1.0] - 2025-03-01

### Added
- Export and sharing functionality with JSON data export
- Print-friendly layouts optimized for professional documentation
- Enhanced accessibility features with ARIA labels and keyboard navigation
- Social sharing capabilities with Web Share API integration

### Changed
- Improved button styling and interaction feedback
- Enhanced form layout for better user experience
- Better error message presentation and handling

### Fixed
- Print layout issues with chart components
- Accessibility improvements for screen readers
- Cross-browser compatibility for sharing features

## [3.0.0] - 2025-02-01

### Added
- Major refactoring for 2025 Luxembourg tax year
- Updated all tax brackets and rates according to 2025 legislation
- Modern responsive design with improved mobile experience
- Comprehensive error handling and input validation
- Professional styling with consistent design system

### Changed
- Complete rewrite of calculation engine for improved accuracy
- Updated UI/UX design with modern styling and interactions
- Improved mobile compatibility and responsive behavior
- Enhanced accessibility features throughout the application

### Breaking Changes
- Updated for 2025 Luxembourg tax law with new rates and brackets
- Changed calculation methodology for improved accuracy and compliance
- New social security parameters and contribution rates
- Updated family benefit amounts and tax credit calculations

### Technical
- Migrated to modern JavaScript patterns and ES6+ features
- Improved code organization with better separation of concerns
- Enhanced configuration system for easy legislative updates
- Better error handling and input sanitization

## [2.x.x] - 2024

### Legacy Versions
Previous versions supported 2024 tax calculations and featured:
- Basic payroll calculations
- Simple tax bracket implementations
- Limited social security calculations
- Basic user interface

---

## Migration Notes

### From 3.3.x to 3.3.4
- No breaking changes
- Enhanced validation provides better user guidance
- All existing functionality preserved with improved user experience

### From 3.2.x to 3.3.x
- Tax credits system addition requires no user action
- Enhanced results display may affect custom styling if modified
- All calculation accuracy improvements are backward compatible

### From 2.x to 3.x
- Major update with 2025 tax law changes
- All calculations updated for current legislation
- User interface improvements may require adjustment for customized deployments

## Support

For questions about specific changes or migration assistance:
- Check GitHub Issues for known problems
- Review the README.md for detailed feature documentation
- Consult official Luxembourg tax resources for regulatory questions
- Contact maintainers for technical support

---

**Note**: This changelog follows semantic versioning. For detailed technical changes, see individual commit messages and pull request descriptions.