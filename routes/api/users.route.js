const express = require('express')
const router = express.Router()

const permissionMiddleware = require('../../app/middleware/permission.middleware')
const userController = require('../../app/controller/user.controller')

// router.use(permissionMiddleware)
router.get('/me', userController.index)
router.post('/store', userController.store)
router.put('/update', userController.update)
router.delete('/delete', userController.destroy)

module.exports = router