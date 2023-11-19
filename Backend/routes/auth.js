const express = require('express')
const { signup , login, logout , checkAuth } = require('../controller/auth')
const requireAuth = require('../middleware/requiredAuth')
const router = express.Router();


router.post('/signup' , signup )
router.post('/login' , login)
router.get('/logout' , logout)
router.get('/checkauth' , requireAuth, checkAuth)
module.exports = router;
