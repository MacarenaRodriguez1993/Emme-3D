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
    // Los IDs tienes que tener 24 carácteres
    if (id.length !== 24)
        throw new Error(`El id "${id}" no tiene 24 carácteres.`)

    // Buscamos
    const result = await Product.find({
        _id: mongoose.Types.ObjectId(id),
    }).clone() // Se necesita el .clone para que no de errores de queryes duplicadas

    // Si el producto no se encuentra mandará el error
    if (result.length < 1)
        throw new Error(`No existe ningún producto con id "${id}".`)
    return result
}

module.exports = {
    listProducts,
    productById,
    producByQuery,
}
