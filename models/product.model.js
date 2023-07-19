const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const productSchema =  new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        trim: true,
    }
},
{
    timestamps: true
}
);
const Products = mongoose.model("Products", productSchema);
module.exports = Products;