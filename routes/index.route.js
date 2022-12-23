const express = require('express')
const router = express.Router()

const auth = require('./api/auth.route')
router.use(auth)

const users = require('./api/users.route')
router.use(users)

module.exports = router