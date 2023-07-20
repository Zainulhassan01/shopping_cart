const users = require("../models/user.model");
const products = require("../models/product.model")

const getAllUserProducts = async (req, res) => {
//   const allProducts = await products.where({owner_id: req.params.id});
  res.send('allProducts');
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const data = new users({
    name,
    email,
  });
  const newUser = await data.save();
  res.status(200).send(newUser);
};

module.exports = { getAllUserProducts, createUser };
