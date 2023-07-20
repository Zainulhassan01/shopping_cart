const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const userSchema =  new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Products",
    }]
},
{
    timestamps: true
}
);
const Users = mongoose.model("Users", userSchema);
module.exports = Users;