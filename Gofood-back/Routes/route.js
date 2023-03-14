const express = require('express')
const router = express.Router()
const userController= require('../controller/usercontroller')
const auth = require('../middleware/auth');
const detailController = require('../controller/userdetailscontroller')
const foodController= require('../controller/foodcontroller')
const orderController= require('../controller/ordercontroller')
const validationmware = require("../middleware/validationmware");

router.post('/createuser',validationmware.uservalidation, userController.createUser)
router.post('/login',validationmware.loginvalidation, userController.userLogin )
router.post('/getuser', auth, detailController.getUser)
router.post('/getlocation', detailController.getLocation)
router.post('/foodData', foodController.foodData)
router.post('/orderData', orderController.orderData)
router.post('/myOrderData', orderController.myOrderData)
 
module.exports= router






