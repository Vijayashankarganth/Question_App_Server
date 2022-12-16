const express = require('express')
const router =  express.Router()

const userController = require('../app/controller/userController')
const questionController = require('../app/controller/questionController')
const adminController = require('../app/controller/adminController')

router.post('/api/user',userController.create)
router.get('/api/user/list',userController.list)
router.get('/api/user/detail/:id',userController.detail)

router.post('/api/question/:id',questionController.create)
router.get('/api/question',questionController.show)
router.put('/api/question/:id/:Uid',questionController.update)

router.post('/api/admin',adminController.login)
router.put('/api/admin/question/:id',adminController.update)

module.exports = router