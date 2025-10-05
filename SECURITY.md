# Security Policy

## Supported Versions

The following versions of the SMK Negeri Educational Platform are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of the SMK Negeri Educational Platform seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them by sending an email to:

security@smknegeri.edu

Please include the following information in your report:

1. Description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact of the vulnerability
4. Possible mitigation strategies (if known)
5. Your contact information for follow-up questions

### What to Expect

1. **Acknowledgment**: You will receive an acknowledgment of your report within 48 hours.
2. **Investigation**: Our security team will investigate the issue and determine its impact.
3. **Resolution**: We will work on a fix and release a security update as soon as possible.
4. **Disclosure**: Once the vulnerability is fixed, we will publish a security advisory.

### Responsible Disclosure

We request that you:

- Give us reasonable time to address the vulnerability before public disclosure
- Avoid exploiting the vulnerability beyond what is necessary to demonstrate the issue
- Not share the vulnerability details with others until it has been fixed
- Respect user privacy and data during your research

## Security Measures

### Client Application Security

- Content Security Policy (CSP) implementation
- Cross-Site Scripting (XSS) protection
- Cross-Site Request Forgery (CSRF) protection
- Secure authentication and session management
- Input validation and sanitization

### Server Application Security

- Secure API endpoints with authentication
- Input validation and sanitization
- SQL injection prevention
- Rate limiting to prevent abuse
- Secure password storage with hashing
- JWT-based authentication
- HTTPS enforcement in production

### Data Protection

- Encryption of sensitive data at rest
- Secure transmission of data over HTTPS
- Regular security audits
- Access control and permissions management
- Data backup and recovery procedures

## Security Best Practices

### For Developers

- Keep dependencies up to date
- Use parameterized queries to prevent SQL injection
- Validate and sanitize all user inputs
- Implement proper error handling without exposing sensitive information
- Follow the principle of least privilege for database access
- Use environment variables for sensitive configuration

### For Users

- Use strong, unique passwords
- Enable two-factor authentication when available
- Keep browsers and devices up to date
- Be cautious of phishing attempts
- Report suspicious activities

## Incident Response

In the event of a security incident:

1. Containment: Immediate steps to stop the breach
2. Investigation: Determine the scope and impact
3. Eradication: Remove the threat from the system
4. Recovery: Restore systems to normal operation
5. Post-incident review: Analyze and improve security measures

## Contact

For security-related questions or concerns, please contact:

security@smknegeri.edu

Thank you for helping keep the SMK Negeri Educational Platform secure!
