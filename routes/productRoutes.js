const express = require('express')
const productRoutes = express.Router()
const  {getAllProducts, createProduct, getOneProduct} = require('../controllers/product.controller')

productRoutes.get('/products/', getAllProducts)

productRoutes.post('/product/', createProduct)

productRoutes.get('/products/:id',getOneProduct)

module.exports = productRoutes