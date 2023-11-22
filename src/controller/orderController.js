const Order = require('../model/orderModel');
const { products } = require('../ultis/const');

const orderController = {
    createOrder: async (req, res) => {
        try {
            const { price, productId, name } = req.body
            console.log(JSON.stringify(req.body))
            if (!price || !productId, !name) {
                return res.status(400).send({ message: "Missing required field" })
            }
            products.forEach((product) => {
                if (product.id == productId) {
                    if (product.price > price) {
                        return res.status(400).send({ message: "Wrong price" })
                    }
                }
            })
            const newOrder = {
                name: name,
            }
            const order = await Order.create(newOrder)
            res.send(order)
        }
        catch (e) { }
    },

    getAllOders: async (req, res) => {
        try {
            const orders = await Order.find({},
                {
                    _id: 0,
                    __v: 0,
                }
            ).sort({ createdAt: -1 })
            res.send(orders)
        }
        catch (e) { }
    }
}

module.exports = orderController