const express = require('express')
const productRoutes = express.Router()
const  {getAllProducts, createProduct, getOneProduct, updateProduct } = require('../controllers/product.controller')

productRoutes.get('/products/', getAllProducts)

productRoutes.post('/product/', createProduct)

productRoutes.post('/users/:user_id/product/:id', updateProduct)

productRoutes.get('/products/:id',getOneProduct)

module.exports = productRoutes