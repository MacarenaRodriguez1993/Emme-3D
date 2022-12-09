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

const productById = async (id) => {

    const result = await Product.find({
        _id: mongoose.Types.ObjectId(id),
    }).clone() // Se necesita el .clone para que no de errores de queryes duplicadas
    return result
}

module.exports = {
    listProducts,
    productById,
    producByQuery,
}
