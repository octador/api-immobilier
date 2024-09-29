// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Route pour l'enregistrement d'un nouvel utilisateur
router.post('/register', registerUser);
// route pour l'authentification
router.post('/login', loginUser);

module.exports = router;
