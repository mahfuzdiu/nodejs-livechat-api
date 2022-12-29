const express = require('express')
const router = express.Router();

const AuthController = require ('../../app/controller/AuthController')

router.post('/login', AuthController.login)

module.exports = router