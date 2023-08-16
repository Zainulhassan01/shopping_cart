const orders = require("../models/order.model");
const priceCalculator = require("../utils/orderCalculator");

const getAllUserOrders = async (req, res) => {
  const allOrders = await orders.where({ user: req.params.id });
  res.send(allOrders);
};

const createOrder = async (req, res) => {
  const user = req.params.id;
  const { products } = req.body;
  let totalprice = 0;
  priceCalculator(products)
    .then(async (result) => {
      totalprice = result;
      const data = new orders({
        products,
        totalprice,
        user,
      });
      const newOrder = await data.save();
      res.status(200).send(newOrder);
    })
    .catch((error) => res.status(404).send(error));
};

const updateOrder = async (req, res) => {
  const id = req.params.id;
  const user = req.params.user_id;
  const { products } = req.body;
  let totalprice = 0;
  priceCalculator(products)
  .then(async (result) => {
    totalprice = result;
    try {
      const updatedOrder = await orders.findByIdAndUpdate(id, {
        products: req.body.products,
        totalprice: totalprice,
        user: user,
      });
      res.status(200).send(updatedOrder);
    } catch (err) {
      res.status(404).send(err);
    }
  })
  .catch((error) => {res.status(404).send(error)})
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await orders.findByIdAndRemove(id);
    res.status(200).send("OK");
  } catch (err) {
    res.status(404).send(err);
  }
};

const checkoutOrder = async(req, res) => {
  res.status(200).send(req.body)
}

module.exports = { getAllUserOrders, createOrder, updateOrder, deleteOrder, checkoutOrder };
