const express = require('express');
const UserController = require('../controllers/UserController'); // Corrected import statement

const router = express.Router();
const userController = new UserController();

router.post('/signup', userController.signup.bind(userController));
router.post('/login', userController.login.bind(userController));
router.get('/users', userController.getUsers.bind(userController));

module.exports = router;