const express = require('express')
const router = express.Router()

const UserController = require('../../app/controller/UserController')

router.post('/users/store', UserController.store)

module.exports = router