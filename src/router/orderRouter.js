const router = require('express').Router()
const orderController = require("../controller/orderController");

router.post('/', orderController.createOrder)
router.get('/', orderController.getAllOders)

module.exports = router