# SMK Negeri Website - Server

Node.js backend API for SMK Negeri educational platform.

## Features

- RESTful API endpoints
- Database integration with PostgreSQL
- Authentication and authorization
- Data validation and sanitization
- Real-time collaboration support
- AI recommendation engine backend
- AR annotation management
- Comprehensive API documentation with Swagger

## Project Structure

```
src/
├── controllers/            # Request handlers
├── middleware/             # Custom middleware
├── routes/                 # API endpoints
├── services/               # Business logic
└── index.ts                # Application entry point
```

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile

### AI Recommendations

- `GET /api/ai-recommendations` - Get learning path recommendations
- `POST /api/ai-recommendations` - Generate new recommendations

### AR Annotations

- `GET /api/ar-annotations` - Get AR annotations
- `POST /api/ar-annotations` - Create new annotation
- `PUT /api/ar-annotations/:id` - Update annotation
- `DELETE /api/ar-annotations/:id` - Delete annotation

### Real-time Collaboration

- `GET /api/collaborations` - Get collaborations
- `POST /api/collaborations` - Create new collaboration
- `GET /api/collaborations/:id` - Get specific collaboration
- `PUT /api/collaborations/:id` - Update collaboration

### User Management

- `GET /api/users` - Get users (admin only)
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file with the following variables:

```
PORT=8000
DATABASE_URL=postgresql://username:password@localhost:5432/smk_negeri
JWT_SECRET=your_jwt_secret_here
```

### Development

```bash
npm run dev
```

Access the API at http://localhost:8000
Access the API documentation at http://localhost:8000/api-docs

### Production

```bash
npm run build
npm start
```

## API Documentation

Swagger documentation is available at `/api-docs` when the server is running.

## Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Acknowledgments

- Node.js platform
- Express.js framework
- PostgreSQL database
- Swagger/OpenAPI for API documentation
- All contributors to the project
