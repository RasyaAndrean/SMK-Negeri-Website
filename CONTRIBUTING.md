# Contributing to SMK Negeri Educational Platform

Thank you for your interest in contributing to the SMK Negeri Educational Platform! We welcome contributions from the community and are excited to work with you.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a positive experience for all contributors.

## How to Contribute

### Reporting Bugs

Before submitting a bug report, please check if the issue has already been reported. If not, create a new issue with:

1. A clear and descriptive title
2. A detailed description of the problem
3. Steps to reproduce the issue
4. Expected behavior vs. actual behavior
5. Screenshots or code examples if applicable
6. Environment information (OS, browser, Node.js version, etc.)

### Suggesting Enhancements

We welcome suggestions for new features or improvements to existing functionality. To suggest an enhancement:

1. Check if a similar suggestion already exists
2. Create a new issue with:
   - A clear and descriptive title
   - A detailed explanation of the proposed enhancement
   - Use cases and benefits
   - Potential implementation approaches (if applicable)

### Code Contributions

#### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/smk-negeri.git
   ```
3. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Install dependencies:
   ```bash
   ./install-all.bat
   ```

#### Coding Standards

1. **TypeScript**: All code should be written in TypeScript with strict type checking
2. **Code Style**: Follow the existing code style and conventions
3. **Component Structure**: Use the progressive enhancement approach (Basic → Enhanced → Super Enhanced → Ultimate → Meta-Intelligent)
4. **Documentation**: Update or add documentation for any new or changed functionality
5. **Testing**: Write unit tests for new functionality when applicable

#### Commit Messages

Follow the conventional commit format:

```
type(scope): brief description

Detailed description of the changes (optional)

Fixes #123 (optional)
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Pull Request Process

1. Ensure your code follows the coding standards
2. Update documentation as needed
3. Add tests for new functionality
4. Ensure all tests pass
5. Create a pull request with:
   - A clear title
   - Detailed description of changes
   - Reference to related issues (if applicable)
6. Request review from maintainers

### Component Development Guidelines

#### Progressive Enhancement Approach

All components should follow the progressive enhancement model:

1. **Basic** - Core functionality
2. **Enhanced** - Additional features
3. **Super Enhanced** - Advanced capabilities
4. **Ultimate** - Enterprise-level features
5. **Meta-Intelligent** - Quantum-conscious computing with neuro-linguistic programming

#### Component Structure

Each component should include:

1. Main component file (`.tsx`)
2. Dedicated page file (in appropriate directory structure)
3. Documentation file (in `/docs` directory)
4. Summary documentation (in component and docs directories)

#### Feature Implementation

When implementing new features:

1. Start with the basic level component
2. Gradually add features for each enhancement level
3. Ensure consistency across all levels
4. Document new features thoroughly

## Development Workflow

### Branching Strategy

- `main`: Production-ready code
- `develop`: Development branch for upcoming releases
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches
- `release/*`: Release preparation branches

### Versioning

We follow Semantic Versioning (SemVer):

- MAJOR version for incompatible API changes
- MINOR version for backward-compatible functionality additions
- PATCH version for backward-compatible bug fixes

## Community

### Communication Channels

- GitHub Issues: For bug reports and feature requests
- GitHub Discussions: For general discussion and questions
- Email: For private inquiries (contact information in README)

### Recognition

Contributors will be recognized in:

- README.md contributor list
- Release notes
- Annual contributor spotlight

## Questions?

If you have any questions about contributing, feel free to:

1. Open an issue for discussion
2. Contact the maintainers directly
3. Join our community discussions

Thank you for contributing to the SMK Negeri Educational Platform!
