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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
},
{
    timestamps: true
}
);
const Products = mongoose.model("Products", productSchema);
module.exports = Products;