<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">🛒 Client Gateway - Ecommerce Microservices</h1>

<p align="center">
  <strong>API Gateway for ecommerce microservices architecture built with NestJS</strong>
</p>

<p align="center">
<p align="center">
  <a href="https://github.com/Ecommerce-Microservice-Nest/client-gateway" target="_blank">
    <img src="https://img.shields.io/github/v/release/Ecommerce-Microservice-Nest/client-gateway?style=flat-square&logo=github&logoColor=white" alt="GitHub release" />
  </a>
  <a href="https://github.com/Ecommerce-Microservice-Nest/client-gateway/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="MIT License" />
  </a>
  <a href="https://nodejs.org" target="_blank">
    <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg?style=flat-square&logo=npm&logoColor=white" alt="NPM Version" />
  </a>
  <a href="https://github.com/Ecommerce-Microservice-Nest/client-gateway" target="_blank">
    <img src="https://img.shields.io/badge/nestjs-11.x-E0234E.svg?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS" />
  </a>
  <a href="https://github.com/Ecommerce-Microservice-Nest/client-gateway" target="_blank">
    <img src="https://img.shields.io/badge/typescript-5.x-3178C6.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
</p>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-api-documentation">API</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [📚 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🐳 Docker](#-docker)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

The **Client Gateway** serves as the main entry point for the ecommerce microservices architecture. It acts as an API Gateway that routes requests to appropriate microservices, handles authentication, rate limiting, and provides a unified API interface for frontend applications.

### 🌟 Key Highlights

- � **Connected** - TCP microservices communication ready
- ⚡ **Fast** - High-performance API gateway with NestJS
- 🔄 **Scalable** - Microservices architecture foundation
- 🛡️ **Resilient** - Global exception handling and error management
- 📊 **Validated** - Input validation with class-validator
- 🎯 **Type-safe** - Full TypeScript support with DTOs and interfaces

## ✨ Features

| Feature                   | Description                                      | Status |
| ------------------------- | ------------------------------------------------ | ------ |
| 🛒 **Products API**       | Complete CRUD operations for product management  | ✅     |
| 🔧 **Environment Config** | Configuration management with validation         | ✅     |
| 🛡️ **Global Validation**  | Request/response validation with class-validator | ✅     |
| 🚨 **Exception Handling** | Custom RPC exception filter for microservices    | ✅     |
| 📄 **Pagination**         | Pagination DTO with validation                   | ✅     |
| 🔌 **TCP Communication**  | Microservices communication via TCP transport    | ✅     |
| 🎯 **Type Safety**        | Full TypeScript support with DTOs                | ✅     |
| 👤 **User Management**    | User registration, authentication, and profiles  | �      |
| 🛍️ **Orders API**         | Order creation, tracking, and management         | �      |
| 💳 **Payments**           | Payment processing and transaction handling      | 📋     |
| 🔐 **Authentication**     | JWT-based auth with refresh tokens               | 📋     |
| 📊 **Analytics**          | Request tracking and performance metrics         | 📋     |
| 🚦 **Rate Limiting**      | Request throttling and abuse prevention          | 📋     |
| 🔍 **API Documentation**  | Auto-generated OpenAPI/Swagger docs              | 📋     |

> ✅ Implemented | 📋 Planned

## 🏗️ Architecture

### Current Implementation

```mermaid
graph TB
    A[Frontend App] --> B[Client Gateway :3000]
    B --> C[Products Service :3001]

    C --> D[(Products DB)]

    style B fill:#e1f5fe
    style C fill:#f3e5f5
    style D fill:#e8f5e8
```

### Planned Architecture

```mermaid
graph TB
    A[Frontend App] --> B[Client Gateway :3000]
    B --> C[Products Service :3001]
    B -.-> E[Users Service :3002]
    B -.-> F[Orders Service :3003]
    B -.-> G[Payments Service :3004]

    C --> H[(Products DB)]
    E -.-> I[(Users DB)]
    F -.-> J[(Orders DB)]
    G -.-> K[(Payments DB)]

    style B fill:#e1f5fe
    style C fill:#f3e5f5
    style E fill:#fff3e0,stroke-dasharray: 5 5
    style F fill:#fff3e0,stroke-dasharray: 5 5
    style G fill:#fff3e0,stroke-dasharray: 5 5
```

> **Legend**: Solid = Implemented | Dashed = Planned

### 🔧 Technology Stack

- **Framework**: NestJS 11.x
- **Language**: TypeScript 5.x
- **Transport**: TCP Microservices
- **Validation**: class-validator + class-transformer
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest
- **Linting**: ESLint + Prettier

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) 📦
- **npm** (v8.0.0 or higher) or **yarn** 🧶
- **Git** for version control 🔧

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ecommerce-Microservice-Nest/client-gateway.git
   cd client-gateway
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**

   ```bash
   # Create environment file (you'll need to configure the microservices)
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run start:dev
   ```

The API Gateway will be available at `http://localhost:3000` 🎉

## 💻 Usage

### Development Mode

```bash
# Start in development mode with hot reload
npm run start:dev

# Start in debug mode
npm run start:debug
```

### Production Mode

```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Application
PORT=3000
NODE_ENV=development

# Products Microservice
PRODUCTS_MICROSERVICE_HOST=localhost
PRODUCTS_MICROSERVICE_PORT=3001

# Database (if applicable)
DATABASE_URL=postgresql://user:password@localhost:5432/gateway

# JWT (for future auth implementation)
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=1d
```

### Microservices Configuration

The gateway currently communicates with the following microservices:

| Service  | Port | Transport | Status       | Description                    |
| -------- | ---- | --------- | ------------ | ------------------------------ |
| Products | 3001 | TCP       | ✅ Connected | Product management operations  |
| Users    | 3002 | TCP       | � Planned    | User authentication & profiles |
| Orders   | 3003 | TCP       | � Planned    | Order processing & tracking    |
| Payments | 3004 | TCP       | � Planned    | Payment processing & billing   |

> **Note**: Only Products microservice is currently implemented and configured.

## 📚 API Documentation

### Available Endpoints

#### 🛒 Products API

| Method   | Endpoint            | Description                      | Status |
| -------- | ------------------- | -------------------------------- | ------ |
| `GET`    | `/api/products`     | Get all products with pagination | ✅     |
| `GET`    | `/api/products/:id` | Get product by ID                | ✅     |
| `POST`   | `/api/products`     | Create new product               | ✅     |
| `PATCH`  | `/api/products/:id` | Update product                   | ✅     |
| `DELETE` | `/api/products/:id` | Delete product                   | ✅     |

#### Example Requests

**Get Products with Pagination**

```bash
curl -X GET "http://localhost:3000/api/products?page=1&limit=10"
```

**Create Product**

```bash
curl -X POST "http://localhost:3000/api/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium T-Shirt",
    "price": 29.99
  }'
```

### Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "data": {
    /* response data */
  },
  "message": "Operation completed successfully",
  "timestamp": "2025-06-29T10:30:00.000Z"
}
```

### Error Handling

Errors are returned in a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with ID 123 not found",
    "statusCode": 404
  },
  "timestamp": "2025-06-29T10:30:00.000Z"
}
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# Watch mode for development
npm run test:watch

# End-to-end tests
npm run test:e2e

# Test coverage report
npm run test:cov
```

### Test Structure

```
test/
├── unit/                 # Unit tests
├── integration/          # Integration tests
├── e2e/                 # End-to-end tests
└── fixtures/            # Test data and mocks
```

### Coverage Goals

- **Statements**: 90%+
- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 90%+

## 🐳 Docker

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# Start only the gateway
docker-compose up gateway

# View logs
docker-compose logs -f gateway

# Stop services
docker-compose down
```

### Docker Commands

```bash
# Build image
docker build -t client-gateway .

# Run container
docker run -p 3000:3000 client-gateway

# Run with environment file
docker run --env-file .env -p 3000:3000 client-gateway
```

## 🚀 Deployment

### Production Checklist

- [ ] Environment variables configured
- [ ] Database connections tested
- [ ] SSL certificates installed
- [ ] Monitoring setup
- [ ] Backup strategy implemented
- [ ] CI/CD pipeline configured

### Deployment Options

#### 🌐 Cloud Platforms

- **AWS**: ECS, Lambda, or EC2
- **Google Cloud**: Cloud Run or GKE
- **Azure**: Container Instances or AKS
- **Heroku**: Simple container deployment

#### 🔧 Manual Deployment

```bash
# Build for production
npm run build

# Install production dependencies only
npm ci --only=production

# Start with PM2
pm2 start dist/main.js --name client-gateway

# Or use systemd
sudo systemctl start client-gateway
```

### Health Checks

The application provides health check endpoints:

```bash
# Basic health check
GET /health

# Detailed health check with microservices status
GET /health/detailed
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Submit** a pull request

### Code Standards

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Use conventional commit messages

### Commit Convention

```
feat: add new product validation
fix: resolve pagination bug
docs: update API documentation
style: format code with prettier
refactor: improve error handling
test: add unit tests for products
chore: update dependencies
```

## 📊 Monitoring & Observability

### Metrics

- Request/Response times
- Error rates
- Throughput
- Memory usage
- CPU utilization

### Logging

```typescript
// Structured logging example
logger.info('Product created', {
  productId: product.id,
  userId: request.user.id,
  timestamp: new Date().toISOString(),
});
```

### Health Monitoring

Monitor these key metrics:

- API response times < 200ms
- Error rate < 1%
- Uptime > 99.9%

## 🔗 Related Projects

- [Products Microservice](https://github.com/Ecommerce-Microservice-Nest/products-ms)
- [Users Microservice](https://github.com/Ecommerce-Microservice-Nest/users-ms)
- [Orders Microservice](https://github.com/Ecommerce-Microservice-Nest/orders-ms)
- [Frontend Application](https://github.com/Ecommerce-Microservice-Nest/frontend)

## 📞 Support & Community

- 📧 **Email**: [Report Issues](https://github.com/Ecommerce-Microservice-Nest/client-gateway/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Ecommerce-Microservice-Nest/client-gateway/discussions)
- � **Issues**: [GitHub Issues](https://github.com/Ecommerce-Microservice-Nest/client-gateway/issues)
- � **Documentation**: [Project Wiki](https://github.com/Ecommerce-Microservice-Nest/client-gateway/wiki)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

✅ **Commercial use**  
✅ **Modification**  
✅ **Distribution**  
✅ **Private use**

❌ **Liability**  
❌ **Warranty**

---

<p align="center">
  <strong>Built with ❤️ by dieguidev</strong><br>
  <sub>API Gateway for ecommerce microservices architecture</sub>
</p>

<p align="center">
  <a href="https://github.com/Ecommerce-Microservice-Nest/client-gateway">⭐ Star this project</a> •
  <a href="#-table-of-contents">⬆️ Back to Top</a>
</p>
