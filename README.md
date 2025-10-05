# SMK Negeri Educational Platform

A comprehensive educational technology platform built with modern web technologies, featuring AI-powered recommendations, augmented reality visualization, real-time collaboration tools, and quantum-conscious computing principles.

## Project Overview

This repository contains the complete codebase for the SMK Negeri Educational Platform, which consists of:

1. **Client Application** - Next.js frontend with React components
2. **Server Application** - Node.js backend with RESTful API
3. **Documentation** - Comprehensive guides and component documentation

## Features

### Advanced AI Integration
- Machine learning-powered learning path recommendations
- Predictive analytics for personalized education
- Natural language processing for content analysis
- Real-time performance monitoring

### Augmented Reality Visualization
- Interactive 3D models with WebGL
- Collaborative AR annotation sessions
- Gold sphere annotations for precise marking
- Real-time AR performance metrics

### Real-time Collaboration
- Multi-user collaborative learning environments
- Live chat functionality with message history
- Participant skill progression tracking
- File sharing with categorization
- Comprehensive analytics dashboard

### Quantum-Conscious Computing 🌌
- Neuro-linguistic programming optimization
- Collective intelligence integration
- Consciousness computing interface
- Predictive modeling with neural networks

### Cross-Platform Compatibility
- Responsive design for all devices
- Progressive web app capabilities
- Device-specific optimizations
- Performance analytics across platforms

### Engaging User Experience
- Playful micro-interactions
- Entertaining loading sequences
- Creative error handling
- Lighthearted user experience elements

## Project Structure

```
.
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/            # Next.js app directory with pages and components
│   │   ├── components/     # React components
│   │   └── docs/           # Documentation
│   └── ...
├── server/                 # Node.js backend API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API endpoints
│   │   └── services/       # Business logic
│   └── ...
├── docs/                   # Project documentation
└── ...
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- PostgreSQL database (for server)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd smk-negeri
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install all dependencies
   ./install-all.bat
   
   # Or install individually
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both client and server directories
   - Update the values according to your environment

### Development

1. Start the development servers:
   ```bash
   # Start both client and server
   ./dev.bat
   
   # Or start individually
   cd client && npm run dev
   cd server && npm run dev
   ```

2. Access the applications:
   - Client: http://localhost:3000
   - Server API: http://localhost:8000
   - API Documentation: http://localhost:8000/api-docs

### Production

1. Build the applications:
   ```bash
   # Build both client and server
   ./build.bat
   
   # Or build individually
   cd client && npm run build
   cd server && npm run build
   ```

2. Start the production servers:
   ```bash
   # Start both client and server
   ./start.bat
   
   # Or start individually
   cd client && npm start
   cd server && npm start
   ```

## GitHub Packages

This project is published to GitHub Packages for easy distribution and consumption. Three packages are available:

1. **[@rasyaandrean/smk-negeri-website](https://github.com/RasyaAndrean/SMK-Negeri-Website/packages)** - Complete platform package
2. **[@rasyaandrean/smk-negeri-client](https://github.com/RasyaAndrean/SMK-Negeri-Website/packages)** - Client application only
3. **[@rasyaandrean/smk-negeri-server](https://github.com/RasyaAndrean/SMK-Negeri-Website/packages)** - Server API only

### Installing from GitHub Packages

To install packages from GitHub Packages, you need to authenticate with a personal access token:

1. Create a personal access token with `read:packages` scope
2. Configure authentication in `.npmrc`:
   ```
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   @rasyaandrean:registry=https://npm.pkg.github.com
   ```
3. Install the packages:
   ```bash
   # Install the complete platform
   npm install @rasyaandrean/smk-negeri-website

   # Install only the client
   npm install @rasyaandrean/smk-negeri-client

   # Install only the server
   npm install @rasyaandrean/smk-negeri-server
   ```

For more detailed information about GitHub Packages, see [docs/GITHUB_PACKAGES.md](docs/GITHUB_PACKAGES.md).

## Releases

### v1.0.0 - Initial Release
The first official release of the SMK Negeri Educational Platform is now available! This release includes all core features and functionality developed over the course of one year (2024) by Rasya Andrean as the sole creator.

- [View Release Notes](https://github.com/RasyaAndrean/SMK-Negeri-Website/releases/tag/v1.0.0)
- [Download Source Code (ZIP)](https://github.com/RasyaAndrean/SMK-Negeri-Website/archive/v1.0.0.zip)

## Documentation

Comprehensive documentation is available in the following locations:

- **Client Documentation**: `/client/src/docs/`
- **Server Documentation**: `/server/README.md`
- **API Documentation**: Available at `/api-docs` when server is running
- **Component Documentation**: Each major component has dedicated documentation

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped build this platform
- Special recognition for the innovative quantum-conscious computing implementation
- Inspired by modern educational technology trends and best practices

## Contact

For questions, suggestions, or support, please open an issue on GitHub or contact the development team.