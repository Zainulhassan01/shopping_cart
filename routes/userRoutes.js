const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/user/', (req, res) => res.send('users'))

userRoutes.get('/user/:id/products', (req, res) => res.send('users product'))

module.exports = userRoutes