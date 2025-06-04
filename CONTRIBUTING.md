# Contributing to Luxembourg Payroll Calculator

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the Luxembourg Payroll Calculator.

## Code of Conduct

This project adheres to professional standards. By participating, you agree to:
- Be respectful and inclusive in all interactions
- Focus on accurate calculations and regulatory compliance
- Provide constructive feedback and suggestions
- Help maintain high code quality and documentation standards
- Respect the project's goals of accuracy and accessibility
- Support the enhanced validation and user experience standards

## How to Contribute

### Reporting Bugs

When reporting calculation errors or bugs:
- Use GitHub Issues with the "bug" label
- Include specific input values and expected vs. actual results
- Specify browser and version if the issue is browser-specific
- Provide steps to reproduce the issue
- Include screenshots if relevant for UI issues
- **For validation issues**: Describe expected validation behavior vs. actual behavior
- **For accessibility issues**: Specify assistive technology used and behavior observed

### Suggesting Enhancements

For feature requests and improvements:
- Open a GitHub Issue with the "enhancement" label
- Clearly describe the improvement and its benefits
- Consider impact on existing functionality and users
- Provide use cases and examples where possible
- Reference official Luxembourg tax documentation when applicable
- **For validation enhancements**: Describe how the improvement would help users avoid errors
- **For accessibility improvements**: Reference WCAG guidelines when applicable

### Legislative Updates

Luxembourg tax law changes regularly. When contributing updates:
- Monitor official sources (ACD, CCSS, Government portal)
- Submit updates with official documentation references
- Include effective dates for all changes
- Test changes thoroughly against official examples
- Maintain backward compatibility when possible
- Document all changes in commit messages with reference links
- **Update validation rules** when legislative changes affect input requirements or limits

### Code Contributions

#### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement-name`)
3. Make your changes with clear, descriptive commits
4. Test thoroughly across major browsers and devices
5. **Test with assistive technologies** (screen readers, keyboard navigation)
6. Update documentation as needed
7. Submit a pull request with detailed description

#### Code Standards

**JavaScript Style**
- Follow existing code patterns and conventions
- Use clear, descriptive variable names (prefer clarity over brevity)
- Include comprehensive comments for tax calculations and validation logic
- Maintain consistent indentation (2 spaces)
- Use modern ES6+ features appropriately
- Keep functions focused and single-purpose

**Validation Standards (v3.4.0+)**
- Use the centralized validation system for all new form inputs
- Follow the established pattern: `validateNumericInput()` for numbers, `validateRequiredSelect()` for dropdowns
- Provide specific, user-friendly error messages for each validation case
- Ensure all validation functions support accessibility features (ARIA attributes)
- Test validation with keyboard navigation and screen readers
- Include appropriate min/max validation with clear error messaging

**Tax Calculation Standards**
- Reference official sources in comments
- Include formula explanations for complex calculations
- Use meaningful variable names that reflect tax terminology
- Validate calculations against official examples
- Handle edge cases and boundary conditions
- Maintain precision in financial calculations

**Accessibility Standards**
- Follow WCAG 2.1 AA guidelines
- Use proper ARIA labels and attributes
- Ensure keyboard navigation works for all interactive elements
- Provide meaningful error messages for screen readers
- Test with actual assistive technologies
- Use semantic HTML elements appropriately

**Documentation Standards**
- Update README.md for new features
- Document any configuration changes
- Include examples for complex calculations
- Maintain French translations where applicable
- Update version history and changelog
- **Document validation behavior** for new form fields

#### Testing Requirements

Before submitting changes:
- Test calculations against official tax tables
- Verify browser compatibility (Chrome, Firefox, Safari, Edge)
- Check mobile responsiveness on various devices
- **Validate accessibility features** (screen readers, keyboard navigation)
- Test print functionality and export features
- Verify error handling and edge cases
- **Test form validation** with various input scenarios (valid, invalid, edge cases)
- **Test input sanitization** with potentially problematic inputs

#### Validation Testing (v3.4.0+)
When contributing validation enhancements:
- Test all validation scenarios (valid inputs, invalid inputs, edge cases)
- Verify error messages are clear and actionable
- Test with assistive technologies to ensure accessibility
- Verify validation doesn't block legitimate use cases
- Test cross-field validation (e.g., tax class warnings)
- Ensure validation performance doesn't impact user experience

### Quality Assurance

#### Calculation Accuracy
- Cross-reference all calculations with official Luxembourg sources
- Test boundary conditions (minimum wage, ceiling amounts, etc.)
- Validate tax credit calculations with official examples
- Ensure rounding follows Luxembourg tax administration standards

#### User Experience
- Test form validation and error messages
- Verify accessibility compliance (WCAG 2.1 AA)
- Check responsive design on mobile devices
- Validate print layouts and export functionality
- **Test validation user experience** (error clarity, recovery paths)
- **Verify input sanitization** behavior and user feedback

#### Accessibility Testing
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard-only navigation
- Check color contrast ratios
- Test focus indicators and tab order
- Verify ARIA labels and descriptions are meaningful
- Test validation error announcements to screen readers

## Development Guidelines

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `validation/improvement` - Validation system improvements
- `accessibility/enhancement` - Accessibility improvements
- `update/tax-law-change` - Legislative updates
- `docs/improvement` - Documentation updates

### Commit Messages
Follow conventional commit format:
```
type(scope): description

- Detailed explanation if needed
- Reference to official sources for tax changes
- Breaking changes noted in footer
```

Examples:
```
feat(validation): add centralized form validation system

- Implement comprehensive input validation with real-time feedback
- Add per-field error messages with accessibility support
- Include input sanitization on blur events
- Enhance ARIA labels for screen reader compatibility

fix(validation): correct CISSM threshold calculation

- Fix monthly threshold from €3,500 to €3,600
- Update validation ranges accordingly
- Reference: CCSS notification 2025-05-01

accessibility(forms): enhance screen reader support

- Add comprehensive ARIA labels to all form controls
- Improve error message announcements
- Fix keyboard navigation tab order
- Reference: WCAG 2.1 AA compliance requirements
```

### Pull Request Guidelines

**Required Information**
- Clear description of changes and motivation
- Reference to related issues or official documentation
- Screenshots for UI changes
- **Accessibility testing results** and browser compatibility confirmation
- **Validation testing scenarios** and results
- Impact assessment on existing functionality

**Review Process**
- All PRs require review before merging
- Calculation changes require validation against official sources
- UI changes require accessibility review
- **Validation changes require comprehensive testing** across browsers and assistive technologies
- Legislative updates require documentation review

**Validation-Specific Reviews**
For changes affecting the validation system:
- Test with various input scenarios
- Verify error messages are user-friendly and actionable
- Check accessibility compliance with assistive technologies
- Ensure validation doesn't create barriers for legitimate use
- Verify performance impact is minimal

## Legislative Compliance

### Official Sources
When making tax-related changes, reference:
- **ACD (Administration des Contributions Directes)**: Tax regulations
- **CCSS (Centre Commun de Sécurité Sociale)**: Social security rates
- **Government Portal**: Official announcements and updates
- **Journal Officiel**: Legal publications

### Documentation Requirements
- Include links to official sources
- Note effective dates for all changes
- Maintain version compatibility information
- Document any assumptions or interpretations
- **Update validation rules** when legal requirements change

### Validation and Legal Compliance
- Ensure validation rules reflect legal requirements (minimum wages, maximum deductions, etc.)
- Update error messages when legal thresholds change
- Maintain audit trail for validation rule changes
- Document validation behavior in compliance matrix

## Community Guidelines

### Communication
- Use clear, professional language
- Be patient with new contributors
- Provide constructive feedback
- Share knowledge and resources
- **Support accessibility and inclusive design** practices

### Collaboration
- Respect different perspectives and approaches
- Focus on factual accuracy over personal preferences
- Help maintain the project's professional standards
- Support accessibility and internationalization efforts
- **Collaborate on validation improvements** that benefit all users

### Accessibility and Inclusion
- Consider diverse user needs when proposing changes
- Test with assistive technologies when possible
- Provide alternative text for visual elements
- Ensure color is not the only way to convey information
- Support users with different abilities and technical knowledge levels

## Getting Help

### Technical Questions
- Check existing issues and documentation first
- Use GitHub Discussions for general questions
- Reference official Luxembourg tax resources
- Contact maintainers for complex tax law questions
- **Ask about validation patterns** for consistency

### Resources
- [Luxembourg Tax Administration](https://impotsdirects.public.lu/)
- [Social Security Center](https://www.ccss.lu/)
- [Government Services Portal](https://guichet.public.lu/)
- [Legal Publications](https://legilux.public.lu/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Development Resources
- **Validation System**: Review `validateFormInputs()` and related functions for patterns
- **Accessibility**: Check existing ARIA implementations for consistency
- **Tax Calculations**: Reference CONFIG object for legislative parameters
- **Error Handling**: Follow established error message patterns

## Recognition

Contributors who help improve the accuracy, accessibility, or functionality of this calculator help thousands of Luxembourg workers better understand their payroll. Your contributions matter and are appreciated by the entire community.

### Special Recognition for Accessibility
Contributors who enhance accessibility help ensure the calculator is usable by everyone, including people with disabilities. This aligns with Luxembourg's commitment to digital inclusion and equal access to public services.

### Validation System Contributors
Contributors to the validation system help prevent user errors and improve the overall user experience, making tax calculations more reliable and user-friendly for all citizens.

---

**Note**: This project aims to provide accurate estimates based on Luxembourg tax law while maintaining high standards for user experience and accessibility. All contributors should prioritize accuracy, compliance with official regulations, and inclusive design practices. When in doubt, always reference official sources and recommend professional consultation for complex situations.