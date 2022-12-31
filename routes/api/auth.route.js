const express = require('express')
const router = express.Router();

const authController = require ('../../app/controller/auth.controller')

router.post('/login', authController.login)

module.exports = router