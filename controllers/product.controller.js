const products = require("../models/product.model");

const getAllProducts = async (req, res) => {
  const allProducts = await products.find({});
  res.send(allProducts);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const data = new products({
    name,
    price,
  });
  const newProduct = await data.save();
  res.status(200).send(newProduct);
};

const getOneProduct = async (req, res) => {
   const product = await products.findById(req.params.id)
   res.status(200).send(product)
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await products.findByIdAndUpdate(req.params.id, {
                            name: req.body.name,
                            price: req.body.price
                          })
    res.status(200).send('Updated')
  }catch(err){
    res.status(404).send(err)
  }
}

module.exports = { getAllProducts, createProduct, getOneProduct, updateProduct };
