const mongoose = require("mongoose")
const Product = require("../models/Product")

const listProducts = async () => {
    const model = await Product.find({}, (err, total) => {
        return total
    })
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
const createNewProduct = async (product) => {
    try {
        const createdProduct = await Product.create(product)
        return createdProduct
    } catch (err) {
        if (err.message.includes("E11000")) {
            err.message = `Ya existe con producto con el nombre ${product.name}.`
            throw err
        }
    }
}
module.exports = {
    listProducts,
    productId,
    producByQuery,
    createNewProduct,
}
