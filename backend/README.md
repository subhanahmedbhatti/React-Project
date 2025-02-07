# Node.js Backend Project

## Overview
This project is a Node.js backend application that provides functionality for managing products and user authentication. It includes APIs for adding, updating, deleting products, as well as user signup and login.

## Project Structure
```
node-backend-project
├── src
│   ├── controllers
│   │   ├── productController.js
│   │   └── userController.js
│   ├── models
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── app.js
│   └── db.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd node-backend-project
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add your database connection string and any other necessary environment variables.

4. **Run the application**
   ```
   npm start
   ```

## API Endpoints

### Product Endpoints
- **GET /products**: Retrieve a list of all products.
- **POST /products**: Add a new product.
- **PUT /products/:id**: Update an existing product.
- **DELETE /products/:id**: Delete a product.

### User Endpoints
- **POST /signup**: User signup.
- **POST /login**: User login.

## Technologies Used
- Node.js
- Express
- Mongoose
- dotenv

## License
This project is licensed under the MIT License.