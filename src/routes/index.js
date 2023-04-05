const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const authController = require('../controllers/authController');

router.get('/', mainController.index);
router.get('/register', authController.showRegistrationForm);
router.post('/register', authController.register);
router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
