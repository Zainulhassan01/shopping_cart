// const orders = require("../models/order.model");

const getAllUserOrders = async (req, res) => {
//   const allProducts = await products.where({user: req.params.id});
  res.send('allOrders');
};

const createOrder = async (req, res) => {
  res.send('new order');
};

module.exports = { getAllUserOrders, createOrder };
