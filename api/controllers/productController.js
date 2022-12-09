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
    Product.find(
        {
            id: id,
        },
        (err, quer) => {
            return quer
        }
    )
const productById = async (id) => {
}

module.exports = {
    listProducts,
    productById,
    producByQuery,
}
