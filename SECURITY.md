# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions of the Luxembourg Payroll Calculator:

| Version | Supported          | Security Updates | End of Life |
| ------- | ------------------ | ---------------- | ----------- |
| 3.3.x   | ✅ Fully Supported | Active          | TBD         |
| 3.2.x   | ✅ Security Only   | Critical Only   | 2025-12-31  |
| 3.1.x   | ❌ Unsupported     | None            | 2025-06-01  |
| < 3.1   | ❌ Unsupported     | None            | 2025-03-01  |

## Reporting a Vulnerability

We take the security of the Luxembourg Payroll Calculator seriously. If you discover a security vulnerability, please follow these guidelines:

### Reporting Process

1. **Do NOT** open a public GitHub issue for security vulnerabilities
2. **Do NOT** disclose the vulnerability publicly until it has been addressed
3. Send a detailed report to the project maintainers through private channels
4. Include the following information in your report:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Suggested remediation if known

### What to Include

**Required Information:**
- Detailed description of the vulnerability
- Steps to reproduce the security issue
- Affected versions and components
- Potential impact on users and data

**Helpful Information:**
- Screenshots or proof-of-concept code
- Suggested fixes or mitigation strategies
- References to similar vulnerabilities or security standards
- Assessment of exploitability and risk level

### Response Timeline

- **Initial Response**: Within 48 hours of report receipt
- **Preliminary Assessment**: Within 1 week of initial response
- **Resolution Timeline**: Varies based on severity and complexity
- **Public Disclosure**: After fix is implemented and tested

### Severity Levels

**Critical (Immediate Response Required)**
- Remote code execution vulnerabilities
- Data exfiltration or unauthorized access
- Financial calculation manipulation affecting accuracy

**High (Response Within 3 Days)**
- Cross-site scripting (XSS) vulnerabilities
- Input validation bypasses
- Authentication or authorization issues

**Medium (Response Within 1 Week)**
- Information disclosure vulnerabilities
- Denial of service vulnerabilities
- Client-side security issues

**Low (Response Within 2 Weeks)**
- Minor information leakage
- Non-exploitable theoretical vulnerabilities
- Security best practice improvements

## Security Measures

The Luxembourg Payroll Calculator implements several security measures to protect users:

### Data Protection
- **No Data Storage**: All calculations are performed client-side
- **No Data Transmission**: Personal information never leaves the user's browser
- **No Cookies**: No tracking or session cookies are used
- **No External Requests**: Self-contained application with no external API calls

### Input Security
- **Input Sanitization**: All user inputs are validated and sanitized
- **XSS Prevention**: Protection against cross-site scripting attacks
- **Type Validation**: Strict type checking for all numeric inputs
- **Range Validation**: Boundary checks for all calculation parameters

### Code Security
- **Static Analysis**: Code is regularly reviewed for security issues
- **Dependency Management**: Minimal external dependencies with security monitoring
- **Content Security Policy**: CSP headers where applicable
- **Secure Defaults**: Security-first approach to all features

### Privacy Protection
- **GDPR Compliant**: No personal data collection or processing
- **No Analytics**: No user tracking or behavior monitoring
- **Local Processing**: All calculations performed locally
- **Transparent Code**: Open source for full transparency

## Security Best Practices for Users

### Safe Usage
- **Use HTTPS**: Always access the calculator through secure connections
- **Keep Browsers Updated**: Use current browser versions with latest security patches
- **Private Browsing**: Consider using private/incognito mode for sensitive calculations
- **Verify Source**: Only use the calculator from official repositories or trusted sources

### Data Protection
- **Clear Browser Data**: Clear browser cache and history after sensitive calculations
- **Secure Environment**: Use the calculator on trusted, secure devices
- **Network Security**: Avoid public Wi-Fi for sensitive financial calculations
- **Screen Privacy**: Be aware of shoulder surfing in public spaces

## Vulnerability Disclosure Policy

### Our Commitment
- We will acknowledge receipt of vulnerability reports promptly
- We will provide regular updates on remediation progress
- We will credit security researchers appropriately (with permission)
- We will maintain transparency about security issues and fixes

### Researcher Recognition
Security researchers who responsibly disclose vulnerabilities may be:
- Credited in release notes and security advisories
- Added to a security researchers acknowledgment page
- Provided with advance notice of security updates

### Legal Safe Harbor
We will not pursue legal action against security researchers who:
- Follow responsible disclosure practices
- Do not access or modify user data
- Do not disrupt service availability
- Report vulnerabilities through proper channels

## Security Updates and Notifications

### Update Distribution
- Security fixes are distributed through normal release channels
- Critical security updates may be released outside normal schedules
- Security advisories are published for significant vulnerabilities

### Notification Channels
- GitHub Security Advisories for documented vulnerabilities
- Release notes for security-related updates
- README updates for security recommendations

## Compliance and Standards

### Security Standards
- **OWASP Guidelines**: Following OWASP secure coding practices
- **CSP Implementation**: Content Security Policy where applicable
- **Secure Headers**: Security-focused HTTP headers
- **Input Validation**: Comprehensive input sanitization

### Privacy Regulations
- **GDPR Compliance**: No personal data processing
- **Data Minimization**: No data collection beyond necessary calculations
- **Transparency**: Clear documentation of data handling practices

## Contact Information

For security-related inquiries:
- Use GitHub's private vulnerability reporting feature
- Contact project maintainers through official channels
- Reference this security policy in all communications

---

## Additional Resources

- [OWASP Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

---

**Last Updated**: May 2, 2025  
**Next Review**: August 2, 2025

---

**Note**: This security policy applies specifically to the Luxembourg Payroll Calculator application. For general GitHub security policies, please refer to GitHub's official documentation.