# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.4.3] - 2025-06-04

### Added
- **Cross-field Business Logic Validation**: Blocking validation requiring children when childcare expenses are entered
- **Enhanced Childcare/Children Validation**: `validateChildcareRequiresChildrenRule()` function for data consistency
- **Improved Tax Class Warnings**: Enhanced tax class optimization warnings to consider childcare expenses
- **Business Logic Error Messages**: Specific error messages for childcare/children validation scenarios
- **Enhanced Form Consistency**: Prevents submission of logically inconsistent family-related data
- **Per-field Validation Integration**: Seamless integration of business logic validation with individual field validation

### Changed
- **Tax Class Warning Logic**: Updated `validateTaxClassAndChildrenRule()` to include childcare expenses in optimization suggestions
- **Form Validation Flow**: Enhanced validation sequence to handle both individual field and cross-field business logic validation
- **Footer Version**: Updated to reflect childcare/children validation enhancements (v3.4.3)
- **Validation Error Handling**: Improved error state management for cross-field validation scenarios
- **Input Event Listeners**: Enhanced blur event handling for childcare and children fields with cross-validation

### Fixed
- **Data Consistency**: Prevents users from entering childcare expenses without specifying number of children
- **Validation State Management**: Proper clearing and setting of validation states for cross-field rules
- **User Experience**: Clear error messaging guides users to resolve data inconsistencies
- **Form Submission Logic**: Enhanced validation prevents calculation with inconsistent family data
- **Accessibility**: Improved ARIA support for cross-field validation error announcements

### Technical
- **Business Logic Validation**: Added `validateChildcareRequiresChildrenRule()` for blocking cross-field validation
- **Enhanced Validation Architecture**: Improved validation flow to handle multiple validation rule types
- **Event Handler Enhancement**: Enhanced blur event listeners for real-time cross-field validation
- **Error Message Management**: Sophisticated error message handling for multiple validation scenarios
- **Validation State Tracking**: Improved tracking of validation states across multiple related fields

## [3.4.0] - 2025-06-04

### Added
- **Centralized Form Validation System**: Comprehensive input validation with real-time feedback
- **Per-field Error Messages**: Specific error guidance for each form field with accessibility support
- **Enhanced Input Sanitization**: Automatic cleaning and formatting of numeric inputs on blur events
- **Field-specific Validation Functions**: `validateRequiredSelect()` and `validateNumericInput()` for consistent validation
- **Professional Error Handling**: User-friendly error messages with clear guidance and validation states
- **Enhanced Accessibility**: Improved ARIA labels, `aria-invalid` attributes, and screen reader compatibility
- **Input State Management**: Visual feedback with `is-valid` and `is-invalid` CSS classes
- **Comprehensive Range Validation**: Min/max validation with user-friendly error messages
- **General Error Message System**: Centralized error display for form-level issues

### Changed
- **Form Validation Architecture**: Migrated from basic HTML5 validation to comprehensive JavaScript validation system
- **Error Message Display**: Enhanced visual design with better positioning and accessibility
- **Input Field Behavior**: Added blur event handlers for automatic input sanitization and formatting
- **Validation Feedback**: Immediate validation feedback on user interaction with form fields
- **Footer Version**: Updated to reflect centralized validation enhancements (v3.4.0)
- **Tax Class Warning System**: Maintained non-blocking warnings while improving integration with validation system
- **Button State Management**: Enhanced loading states and disabled states during validation and calculation

### Fixed
- **Form Submission Validation**: Prevents calculation with invalid inputs and provides clear feedback
- **Input Type Safety**: Comprehensive type checking and sanitization for all numeric inputs
- **Accessibility Compliance**: Enhanced ARIA support for screen readers and assistive technologies
- **Validation Error Persistence**: Proper clearing of validation states when form is reset
- **Input Focus Management**: Improved focus handling for validation error scenarios
- **Cross-field Validation Integration**: Better integration of tax class warnings with main validation system

### Technical
- **Validation Function Architecture**: Added centralized `validateFormInputs()` function for comprehensive form validation
- **Input Sanitization System**: Enhanced `sanitizeInput()` function with type-specific processing
- **Error State Management**: Improved `setFieldValidationState()` for consistent field-level error handling
- **Event Listener Management**: Added blur event handlers for all numeric input fields with sanitization
- **CSS Enhancement**: Added validation-specific styling with `:is-valid` and `:is-invalid` pseudo-classes
- **Accessibility Improvements**: Enhanced ARIA attributes and screen reader support throughout validation system

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

### From 3.3.x to 3.4.0
- **Enhanced Validation**: New centralized validation system provides better user guidance and error handling
- **Accessibility Improvements**: Enhanced ARIA support and screen reader compatibility
- **No Breaking Changes**: All existing functionality preserved with improved validation and user experience
- **Form Behavior**: Enhanced input sanitization and real-time validation feedback
- **Error Handling**: More user-friendly error messages and validation states

### From 3.3.3 to 3.3.4
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