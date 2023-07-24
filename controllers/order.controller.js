const orders = require("../models/order.model")
const Products = require("../models/product.model")

const getAllUserOrders = async (req, res) => {
  const allOrders = await orders.where({user: req.params.id})
  res.send(allOrders)
};

const createOrder = async (req, res) => {
  const user = req.params.id
  const { products } = req.body
  let totalprice = 0
  for (const product of products) {
    let desiredProduct = await Products.findById(product.product)
    totalprice = totalprice + (parseInt(desiredProduct.price.replace('$', '')) * product.quantity)
  }

  if (totalprice > 0) {
    totalprice = '$' + totalprice
  } else {
    totalprice = '$0'
  }

  const data = new orders({
    products,
    totalprice,
    user,
  });
  const newOrder = await data.save()

  res.status(200).send(newOrder)
};

module.exports = { getAllUserOrders, createOrder }
