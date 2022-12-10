const mongoose = require("mongoose")
const Product = require("../models/Product")

const listProducts = async () => {
    const model = await Product.find()
    return total
}
const producByQuery = async (name) => {
    const byqu = Product.find(
        {
            name: name,
        },
        (err, data) => {
            return data
        }
    )
}
const productId = async (id) => {
    Product.find(
        {
            id: id,
        },
        (err, quer) => {
            return quer
        }
    )
}

module.exports = {
    listProducts,
    productId,
    producByQuery,
}
