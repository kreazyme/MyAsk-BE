const { products } = require("../ultis/const")

const productController = {
    getAllProducts: (req, res) => {
        res.send(products)
    },
    getDetailProduct: (req, res) => {
        const { id } = req.params
        const product = products.find((product) => product.id == id)
        res.send(product)
    }
}

module.exports = productController