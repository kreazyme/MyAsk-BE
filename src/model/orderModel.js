const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model("Order", orderSchema)