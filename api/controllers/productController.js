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
const newProduct = async (data) => {
    const newProduct = new Product(data)
    try {
        await newProduct.save()
        return newProduct
    } catch (err) {
        throw new Error(err)
    }
}

async function deleteProduct(id) {
    let logicDelete = await Product.updateOne(
        { id: id }, //busqueda
        { deleted: true } //cambio
    )
    return logicDelete
}

module.exports = {
    listProducts,
    productId,
    producByQuery,
    newProduct,
    deleteProduct,
}
