const express = require('express')
const userRoutes = express.Router()
const  {getAllUserProducts, createUser} = require('../controllers/user.controller')


userRoutes.post('/user/', createUser)

userRoutes.get('/user/:id/products', getAllUserProducts)

module.exports = userRoutes