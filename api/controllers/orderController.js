const mongoose = require("mongoose")
const Order = require("../models/Order.js")
const ObjectId = mongoose.Types.ObjectId

async function createOrder(order) {
    try {
        const newOrder = {}
        // order.user_id = ObjectId("123456789012345678901234")
        newOrder.user_id = ObjectId(order.user_id)
        newOrder.products = order.map((product) => {
            return {
                productName: product.productName,
                productImage: product.productImage,
                productAmount: product.productAmount,
                productPrice: product.productPrice,
            }
        })

        const createdOrder = await Order.create(newOrder)
        return createdOrder
    } catch (error) {
        throw error
    }
}

async function getOrders() {
    try {
        const orders = Order.find()
        return orders
    } catch (error) {
        throw error
    }
}

async function getUserOrders(id) {}

async function updateOrder(id, order) {}

module.exports = {
    createOrder,
    getOrders,
    getUserOrders,
    updateOrder,
}
