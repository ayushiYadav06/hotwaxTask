const express = require('express');
const router = express.Router()

const {User} = require('../controllers/person');
const {CreateOrder} =  require('../controllers/createOrder')
const {UpdateOrder} =require('../controllers/updateOrder')
const {getOrder} = require('../controllers/getOrder')
const {AddOrderItem} = require('../controllers/AddOrderItem')
const {getOrderItem} = require('../controllers/getorderItem')

router.post('/user' , User);
router.post('/createOrder' , CreateOrder);
router.put('/updateOrder/:id' , UpdateOrder)
router.get('/getOrder/:id',getOrder)
router.post('/addOrderItem' , AddOrderItem)
router.get('/getorderItem' , getOrderItem)

module.exports = router
