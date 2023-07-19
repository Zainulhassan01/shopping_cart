const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const userSchema =  new Schema({
    tName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    }
},
{
    timestamps: true
}
);
const Users = mongoose.model("user", userSchema);
module.exports = Users;