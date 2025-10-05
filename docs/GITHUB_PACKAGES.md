# GitHub Packages Documentation

This document explains how to use and publish packages for the SMK Negeri Educational Platform using GitHub Packages.

## About GitHub Packages

GitHub Packages is a software package hosting service that allows you to host your code and artifacts privately or publicly. It supports various package registries including npm, Docker, Maven, NuGet, and RubyGems.

## Package Structure

This repository publishes three packages to GitHub Packages:

1. **@rasyaandrean/smk-negeri-website** - The complete platform package
2. **@rasyaandrean/smk-negeri-client** - The client-side Next.js application
3. **@rasyaandrean/smk-negeri-server** - The server-side Node.js API

## Publishing Packages

Packages are automatically published to GitHub Packages when a new release is created. The publishing process is handled by GitHub Actions workflow defined in `.github/workflows/publish-packages.yml`.

### Manual Publishing

If you need to manually publish packages, follow these steps:

1. **Authenticate with GitHub Packages**:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```
   Use your GitHub username and a personal access token with `write:packages` scope as the password.

2. **Publish individual packages**:
   ```bash
   # Publish client package
   cd client
   npm publish
   
   # Publish server package
   cd ../server
   npm publish
   
   # Publish root package
   cd ..
   npm publish
   ```

## Installing Packages

To install packages from GitHub Packages, you need to configure npm to use the GitHub Packages registry.

### Configure .npmrc

Create or update `.npmrc` file in your project root:

```
@rasyaandrean:registry=https://npm.pkg.github.com
```

### Install Packages

```bash
# Install the complete platform
npm install @rasyaandrean/smk-negeri-website

# Install only the client
npm install @rasyaandrean/smk-negeri-client

# Install only the server
npm install @rasyaandrean/smk-negeri-server
```

## Authentication for Installation

To install packages from GitHub Packages, you need to authenticate with a personal access token.

1. Create a personal access token with `read:packages` scope
2. Configure authentication in `.npmrc`:
   ```
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   @rasyaandrean:registry=https://npm.pkg.github.com
   ```

## Package Contents

### Client Package (@rasyaandrean/smk-negeri-client)
- Built Next.js application in the `dist/` directory
- All React components and pages
- CSS and static assets

### Server Package (@rasyaandrean/smk-negeri-server)
- Compiled Node.js server in the `dist/` directory
- API routes and controllers
- Service layer implementations

### Website Package (@rasyaandrean/smk-negeri-website)
- Complete source code for both client and server
- Documentation files
- Configuration files
- Build and development scripts

## Versioning

This project follows Semantic Versioning (SemVer):
- MAJOR version for incompatible API changes
- MINOR version for backward-compatible functionality additions
- PATCH version for backward-compatible bug fixes

## Troubleshooting

### Common Issues

1. **Authentication errors**: Ensure your personal access token has the correct scopes
2. **Permission denied**: Verify you have the necessary permissions to read/write packages
3. **Package not found**: Check that the package name and scope are correct

### Support

For issues with GitHub Packages, please:
1. Check the GitHub Packages documentation
2. Verify your authentication configuration
3. Open an issue in this repository if problems persist