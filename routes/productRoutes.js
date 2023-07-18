const express = require('express')
const productRoutes = express.Router()

productRoutes.get('/products/', 
    (req, res) => res.send('Products')
)

productRoutes.post('/products/:id',
    (req, res) => res.send('Product')
)


module.exports = productRoutes