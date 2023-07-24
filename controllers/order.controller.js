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

const updateOrder = async(req, res) => {
  const id = req.params.id
  const user = req.params.user_id
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

  try {
    await orders.findByIdAndUpdate(id, {
      products: req.body.products,
      totalprice: totalprice,
      user: user
    })
    res.status(200).send('OK')
  }catch(err){
    res.status(404).send(err)
  }
}

const deleteOrder = async(req, res) => {
    const id = req.params.id
    try {
        await orders.findByIdAndRemove(id)
        res.status(200).send('OK')
      } catch (err) {
        res.status(404).send(err)
      }  
}

module.exports = { getAllUserOrders, createOrder, updateOrder, deleteOrder }
