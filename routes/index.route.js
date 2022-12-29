const express = require('express')
const router = express.Router()

const authMiddleware = require('../app/middleware/auth.middleware')

const auth = require('./api/auth.route')
router.use(auth)

//middlewares
router.use(authMiddleware)

//users route
const users = require('./api/users.route')
router.use('/users', users)

module.exports = router