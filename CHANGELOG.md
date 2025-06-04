# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- Improved result data structure for tax