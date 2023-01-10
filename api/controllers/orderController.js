const mongoose = require("mongoose")
const Order = require("../models/Order.js")
const ObjectId = mongoose.Types.ObjectId

async function createOrder(order) {
    try {
        const newOrder = {}
        // order.user_id = ObjectId("123456789012345678901234")
        newOrder.user_id = ObjectId(order.user_id)
        newOrder.payment_id = order.payment_id
        newOrder.status = order.status
        newOrder.merchant_order_id = order.merchant_order_id
        newOrder.products = order.productos.map((product) => {
            return {
                productName: product[0].productName,
                productImage: product[0].productImage,
                productAmount: product[0].productAmount,
                productPrice: product[0].productPrice,
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

async function updateOrder(id, order) {
    try {
        const updatedOrder = await Order.findOneAndUpdate({ uid }, { order })
        if (updatedOrder) {
            return updatedOrder
        } else {
            throw new Error(`No hay ningún pedido con id: ${id}`)
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    createOrder,
    getOrders,
    getUserOrders,
    updateOrder,
}
