const mongoose = require("mongoose")
const Order = require("../models/Order.js")
const ObjectId = mongoose.Types.ObjectId

async function createOrder(order) {
    try {
        console.log(order)
        order.user_id = ObjectId(order.user_id)
        const createdOrder = await Order.create(order)
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
