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
                productName: product.name,
                productImage: product.img,
                productAmount: product.units,
                productPrice: product.price,
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
        const orders = await Order.find()
        return orders
    } catch (error) {
        throw error
    }
}

async function getUserOrders(id) {
    try {
        const orders = await Order.find({ user_id: ObjectId(id) })
        return orders
    } catch (error) {
        throw error
    }
}

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
