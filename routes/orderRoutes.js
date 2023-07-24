const express = require('express')
const orderRoutes = express.Router()
const  {getAllUserOrders, createOrder,updateOrder, deleteOrder } = require('../controllers/order.controller')

orderRoutes.get('/user/:id/orders', getAllUserOrders)

orderRoutes.post('/user/:id/order', createOrder)

orderRoutes.post('/user/:user_id/orders/:id', updateOrder)

orderRoutes.delete('/user/:user_id/orders/:id', deleteOrder)

module.exports = orderRoutes