## Node.js TypeScript OOP Project with MySQL Integration and Express.js REST API

### Project Overview
This Node.js project is designed using TypeScript and follows Object-Oriented Programming (OOP) principles. The primary focus is on creating a REST API for a user system with a simple products table. The integration with MySQL database ensures persistent storage, and Express.js is utilized for building the API.

### Features
1. User System:
   - Create, retrieve, update, and delete users.
   - Each user has a unique identifier, username, email, and password.
2. Products Table:
    - The products table consists of product title, image URL, price, and a link to the user who added it.
3. User-specific Product Operations:
   - Users can add products to the system.
   - Users can edit and remove their own products only.
4. MySQL Integration
   - Utilizes MySQL database for storing user and product information.
5. JWT Authentication:
   - Secure endpoints with JSON Web Token (JWT) authentication.

## Project Structure
The project structure follows a modular approach with directories for user, product, authentication, database, and main application.
```|-- src
|   |-- controllers
|   |   |-- UserController.ts
|   |   |-- ProductController.ts
|   |-- models
|   |   |-- User.ts
|   |   |-- Product.ts
|   |-- services
|   |   |-- UserService.ts
|   |   |-- ProductService.ts
|   |-- util
|   |   |-- MySQLConnection.ts
|   |-- routes
|   |   |-- userRoutes.ts
|   |   |-- productRoutes.ts
|   |-- server.ts
|-- tsconfig.json
|-- package.json
|-- README.md
```
## Getting Started
1. Clone the repository:
```
git clone https://github.com/EmanSaeed331/E-comm.git
```
2. Install dependencies:

```
cd your-repo
npm install
```
3. Configure MySQL database connection:

Update the db.ts file in the src/util directory with your MySQL connection details.

4. Set up environment variables:

Create a .env file in the root directory and define the following variables:
```
PORT=3000
HOST=your_host,
DB_USER=your_DB_USER,
DB_PASSWORD=your_DB_PASSWORD,
DB_NAME=your_DB_NAME,
SECRET_KEY=your_secret_key
```
5. Build and run the project:
```
npm start
```
## API Endpoints
***Users***
- POST /api/users: Create a new user.
- GET /api/users/:id: Get user details by ID.
- PUT /api/users/:id: Update user details.

 ***Products***
- GET /api/products: Get all products.
- GET /api/products/:id: Get product details by ID.
- POST /api/products: Add a new product.
- PUT /api/products/:id: Update product details.
- DELETE /api/products/:id: Delete a product.

## Security
All endpoints are secured with JWT authentication. Include the JWT token in the headers of requests to authenticate and access protected routes.