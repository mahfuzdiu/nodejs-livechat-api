const express = require('express')
const router = express.Router()

const permissionMiddleware = require('../../app/middleware/permission.middleware')
const UserController = require('../../app/controller/UserController')

// router.use(permissionMiddleware)
router.get('/:id', UserController.index)
router.post('/store', UserController.store)
router.put('/update/:id', UserController.update)
router.delete('/delete/:id', UserController.destroy)

module.exports = router