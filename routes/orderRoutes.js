const express = require('express')
const orderRoutes = express.Router()
const  {getAllUserOrders, createOrder, deleteOrder } = require('../controllers/order.controller')


orderRoutes.post('/user/:id/order', createOrder)

orderRoutes.get('/user/:id/orders', getAllUserOrders)

orderRoutes.delete('/user/:user_id/orders/:id', deleteOrder)

module.exports = orderRoutes