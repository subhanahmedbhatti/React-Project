// filepath: /backend/src/middleware/auth.js
const auth = (req, res, next) => {
    // Example middleware logic
    console.log('Auth middleware');
    next();
  };
  
  module.exports = auth;