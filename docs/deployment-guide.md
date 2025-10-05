# SMK Negeri Website - Deployment Guide

## Overview

This document provides instructions for deploying the SMK Negeri website to production environments.

## Prerequisites

### System Requirements

- Node.js v18+ installed
- PostgreSQL v13+ installed
- Docker and Docker Compose (optional but recommended)
- Git for version control
- SSL certificate for HTTPS (Let's Encrypt or similar)

### Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=smk_negeri
DB_USER=smk_user
DB_PASSWORD=secure_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=24h

# Server Configuration
PORT=3001
NODE_ENV=production

# Email Configuration (if using email services)
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your_email@domain.com
EMAIL_PASSWORD=your_email_password

# Storage Configuration (if using cloud storage)
STORAGE_PROVIDER=local # or aws, google, azure
STORAGE_BUCKET=your_bucket_name
STORAGE_REGION=your_region
STORAGE_ACCESS_KEY=your_access_key
STORAGE_SECRET_KEY=your_secret_key
```

## Deployment Options

### Option 1: Manual Deployment

#### 1. Clone the Repository

```bash
git clone https://github.com/yourorganization/smk-negeri-website.git
cd smk-negeri-website
```

#### 2. Set Up the Database

```bash
# Create database and user
sudo -u postgres psql
CREATE DATABASE smk_negeri;
CREATE USER smk_user WITH ENCRYPTED PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE smk_negeri TO smk_user;
\q
```

#### 3. Install Dependencies

```bash
# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
```

#### 4. Build the Applications

```bash
# Build client application
cd client
npm run build
cd ..

# Build server application
cd server
npm run build
```

#### 5. Start the Applications

```bash
# Start server
cd server
npm start &

# Serve client (using serve or similar)
cd client
npx serve@latest out
```

### Option 2: Docker Deployment

#### 1. Create Docker Compose File

Create a `docker-compose.yml` file in the root directory:

```yaml
version: '3.8'

services:
  database:
    image: postgres:13
    container_name: smk_database
    environment:
      POSTGRES_DB: smk_negeri
      POSTGRES_USER: smk_user
      POSTGRES_PASSWORD: secure_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'
    restart: unless-stopped

  server:
    build:
      context: ./server
      dockerfile: Dockerfile
    container_name: smk_server
    environment:
      - DB_HOST=database
      - DB_PORT=5432
      - DB_NAME=smk_negeri
      - DB_USER=smk_user
      - DB_PASSWORD=secure_password
      - JWT_SECRET=your_jwt_secret_here
      - PORT=3001
      - NODE_ENV=production
    ports:
      - '3001:3001'
    depends_on:
      - database
    restart: unless-stopped

  client:
    build:
      context: ./client
      dockerfile: Dockerfile
    container_name: smk_client
    ports:
      - '3000:3000'
    depends_on:
      - server
    restart: unless-stopped

volumes:
  postgres_data:
```

#### 2. Create Server Dockerfile

Create `server/Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

#### 3. Create Client Dockerfile

Create `client/Dockerfile`:

```dockerfile
FROM node:18-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

#### 4. Create NGINX Configuration

Create `client/nginx.conf`:

```nginx
events {
  worker_connections 1024;
}

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  server {
    listen 3000;

    location / {
      root /usr/share/nginx/html;
      index index.html;
      try_files $uri $uri/ /index.html;
    }

    location /api {
      proxy_pass http://server:3001;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_cache_bypass $http_upgrade;
    }
  }
}
```

#### 5. Deploy with Docker Compose

```bash
docker-compose up -d
```

### Option 3: Cloud Deployment (Vercel/Netlify + Heroku/Railway)

#### Client Deployment (Vercel)

1. Push code to GitHub
2. Connect Vercel to your repository
3. Configure environment variables in Vercel dashboard
4. Set build command to `npm run build`
5. Set output directory to `out`

#### Server Deployment (Railway)

1. Push code to GitHub
2. Connect Railway to your repository
3. Configure environment variables in Railway dashboard
4. Set build command to `npm run build`
5. Set start command to `npm start`

## SSL Configuration

### Using Let's Encrypt with NGINX

1. Install Certbot:

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

2. Obtain SSL certificate:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. Configure NGINX to redirect HTTP to HTTPS:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Client-side rendering configuration
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API proxy
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Monitoring and Maintenance

### Health Checks

- Implement health check endpoints:
  - `/api/health` for server
  - Static page for client
- Set up uptime monitoring with tools like UptimeRobot

### Log Management

- Centralize logs using ELK stack or similar
- Set up log rotation to prevent disk space issues
- Monitor error logs for debugging

### Backup Strategy

- Daily database backups
- Weekly full system backups
- Store backups in multiple locations (local + cloud)
- Regularly test backup restoration

### Performance Monitoring

- Set up application performance monitoring (APM) with tools like New Relic or DataDog
- Monitor database performance and query times
- Track API response times and error rates

### Security Updates

- Regularly update dependencies
- Monitor for security vulnerabilities
- Implement security headers in NGINX
- Set up automated security scanning

## Scaling Considerations

### Horizontal Scaling

- Use load balancer for multiple server instances
- Implement database read replicas for heavy read operations
- Use CDN for static assets

### Caching Strategy

- Implement Redis for session storage and caching
- Use browser caching for static assets
- Implement API response caching for frequently accessed data

### Database Optimization

- Create appropriate indexes for frequently queried columns
- Monitor slow queries and optimize them
- Consider database partitioning for large datasets

## Troubleshooting

### Common Issues

#### Database Connection Issues

- Verify database credentials in environment variables
- Check if database service is running
- Ensure firewall allows connections on database port

#### Build Failures

- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set

#### Performance Issues

- Check server resource usage (CPU, memory, disk)
- Analyze database query performance
- Review application logs for errors

### Rollback Procedure

1. Identify the last stable deployment
2. Restore database from backup if needed
3. Deploy previous version of the application
4. Monitor system for issues after rollback

## Post-Deployment Checklist

- [ ] Verify website is accessible via HTTPS
- [ ] Test all major functionality (login, forms, etc.)
- [ ] Confirm API endpoints are responding correctly
- [ ] Verify database connections are working
- [ ] Check that email notifications are functioning
- [ ] Test file uploads and downloads
- [ ] Validate SSL certificate installation
- [ ] Confirm monitoring and alerting systems are active
- [ ] Document deployment in version control
- [ ] Notify stakeholders of successful deployment
