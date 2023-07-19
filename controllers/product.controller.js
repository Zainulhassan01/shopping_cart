const products = require('../models/user.model')

const getAllProducts = async (req,res) => {
    const product = await products.find({})
    res.send(product)
}

const createProduct = async (req, res) => {
    const {name, price} = req.body
    const data = new users({
        name,
        price
    })
    const newProduct = await data.save()
    res.status(200).send(newProduct)
}

module.exports = {getAllProducts, createProduct}