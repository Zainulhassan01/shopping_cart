const express = require('express')
const orderRoutes = express.Router()
const  {getAllUserOrders, createOrder} = require('../controllers/order.controller')


orderRoutes.post('/user/:id/order', createOrder)

orderRoutes.get('/user/:id/orders', getAllUserOrders)

module.exports = orderRoutes