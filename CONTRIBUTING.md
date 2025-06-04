# Contributing to Luxembourg Payroll Calculator

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the Luxembourg Payroll Calculator.

## Code of Conduct

This project adheres to professional standards. By participating, you agree to:
- Be respectful and inclusive in all interactions
- Focus on accurate calculations and regulatory compliance
- Provide constructive feedback and suggestions
- Help maintain high code quality and documentation standards
- Respect the project's goals of accuracy and accessibility

## How to Contribute

### Reporting Bugs

When reporting calculation errors or bugs:
- Use GitHub Issues with the "bug" label
- Include specific input values and expected vs. actual results
- Specify browser and version if the issue is browser-specific
- Provide steps to reproduce the issue
- Include screenshots if relevant for UI issues

### Suggesting Enhancements

For feature requests and improvements:
- Open a GitHub Issue with the "enhancement" label
- Clearly describe the improvement and its benefits
- Consider impact on existing functionality and users
- Provide use cases and examples where possible
- Reference official Luxembourg tax documentation when applicable

### Legislative Updates

Luxembourg tax law changes regularly. When contributing updates:
- Monitor official sources (ACD, CCSS, Government portal)
- Submit updates with official documentation references
- Include effective dates for all changes
- Test changes thoroughly against official examples
- Maintain backward compatibility when possible
- Document all changes in commit messages with reference links

### Code Contributions

#### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement-name`)
3. Make your changes with clear, descriptive commits
4. Test thoroughly across major browsers and devices
5. Update documentation as needed
6. Submit a pull request with detailed description

#### Code Standards

**JavaScript Style**
- Follow existing code patterns and conventions
- Use clear, descriptive variable names (prefer clarity over brevity)
- Include comprehensive comments for tax calculations
- Maintain consistent indentation (2 spaces)
- Use modern ES6+ features appropriately
- Keep functions focused and single-purpose

**Tax Calculation Standards**
- Reference official sources in comments
- Include formula explanations for complex calculations
- Use meaningful variable names that reflect tax terminology
- Validate calculations against official examples
- Handle edge cases and boundary conditions
- Maintain precision in financial calculations

**Documentation Standards**
- Update README.md for new features
- Document any configuration changes
- Include examples for complex calculations
- Maintain French translations where applicable
- Update version history and changelog

#### Testing Requirements

Before submitting changes:
- Test calculations against official tax tables
- Verify browser compatibility (Chrome, Firefox, Safari, Edge)
- Check mobile responsiveness on various devices
- Validate accessibility features (screen readers, keyboard navigation)
- Test print functionality and export features
- Verify error handling and edge cases

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

## Development Guidelines

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
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
feat(tax-credits): add CIM calculation for single parents

- Implement Single Parent Tax Credit calculation
- Add validation for eligibility criteria
- Reference: ACD circular 2025/01

fix(validation): correct CISSM threshold calculation

- Fix monthly threshold from €3,500 to €3,600
- Update based on CCSS notification 2025-05-01
```

### Pull Request Guidelines

**Required Information**
- Clear description of changes and motivation
- Reference to related issues or official documentation
- Screenshots for UI changes
- Test results and browser compatibility confirmation
- Impact assessment on existing functionality

**Review Process**
- All PRs require review before merging
- Calculation changes require validation against official sources
- UI changes require accessibility review
- Legislative updates require documentation review

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

## Community Guidelines

### Communication
- Use clear, professional language
- Be patient with new contributors
- Provide constructive feedback
- Share knowledge and resources

### Collaboration
- Respect different perspectives and approaches
- Focus on factual accuracy over personal preferences
- Help maintain the project's professional standards
- Support accessibility and internationalization efforts

## Getting Help

### Technical Questions
- Check existing issues and documentation first
- Use GitHub Discussions for general questions
- Reference official Luxembourg tax resources
- Contact maintainers for complex tax law questions

### Resources
- [Luxembourg Tax Administration](https://impotsdirects.public.lu/)
- [Social Security Center](https://www.ccss.lu/)
- [Government Services Portal](https://guichet.public.lu/)
- [Legal Publications](https://legilux.public.lu/)

## Recognition

Contributors who help improve the accuracy, accessibility, or functionality of this calculator help thousands of Luxembourg workers better understand their payroll. Your contributions matter and are appreciated by the entire community.

---

**Note**: This project aims to provide accurate estimates based on Luxembourg tax law. All contributors should prioritize accuracy and compliance with official regulations. When in doubt, always reference official sources and recommend professional consultation for complex situations.