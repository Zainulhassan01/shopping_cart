const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const orderSchema =  new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Products",
        quantity: {
            type: Integer,
            required: true,
            default: 0,
            trim: true,
        }
    }],
    totalPrice: {
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
const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;