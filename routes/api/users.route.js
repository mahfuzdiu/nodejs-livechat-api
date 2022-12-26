const express = require('express')
const router = express.Router()

const permissionMiddleware = require('../../app/middleware/permission.middleware')
const UserController = require('../../app/controller/UserController')

// router.use(permissionMiddleware)
router.post('/store', UserController.store)

module.exports = router