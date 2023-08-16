const Products = require("../models/product.model")

const priceCalculator = async (products) => {
  console.log(products)
  let totalprice = 0
  for (const product of products) {
    let desiredProduct = await Products.findById(product._id)
    let quantity = product.quantity ? product.quantity : 1
    totalprice = totalprice + (parseInt(desiredProduct.price.replace('$', '')) * quantity)
  }

  if (totalprice > 0) {
    totalprice = '$' + totalprice
  } else {
    totalprice = '$0'
  }
  return totalprice
}

module.exports = priceCalculator 