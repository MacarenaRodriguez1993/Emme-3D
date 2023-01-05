const {
    createOrder,
    getOrders,
    getUserOrders,
    updateOrder,
} = require("../controllers/orderController")

// ORDERS
async function createOrders(order) {
    try {
        const createdOrder = await createOrder(order)
        return createdOrder
    } catch (error) {
        throw error
    }
}

async function getAllOrders() {
    try {
        const orders = await getOrders()
        return orders
    } catch (error) {
        throw error
    }
}

async function getUsersOrders(id) {
    try {
        const orders = await getUserOrders(id)
        return orders
    } catch (error) {
        throw error
    }
}

async function updateOrders(id, order) {
    try {
        const order = await updateOrder(id, order)
        return order
    } catch (error) {
        throw error
    }
}

module.exports = {
    createOrders,
    getAllOrders,
    getUsersOrders,
    updateOrders,
}
