const Products = require("../models/product.model")

const priceCalculator = async (products) => {
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
  return totalprice
}

module.exports = { priceCalculator }