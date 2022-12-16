const mongoose = require("mongoose")
const Product = require("../models/Product.js")
const ObjectId = mongoose.Types.ObjectId

const listProducts = async () => {
    const products = await Product.find()
    if (products.length < 1)
        throw new Error(
            "Vaya, parece que no hay productos en la base de datos."
        )
    return products
}
const productByQuery = async (name) => {
    const byqu = await Product.findOne({ name: name }).exec()
    return byqu
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

const createNewProduct = async (product) => {
    try {
        const createdProduct = await Product.create(product)
        console.log(createdProduct)
        return createdProduct
    } catch (err) {
        console.log(err)
        if (err.message.includes("E11000")) {
            err.message = `Ya existe con producto con el nombre ${product.name}.`
            throw err
        }
    }
}

const findAndUpdate = async (id, obj, errors) => {
    try {
        id = ObjectId(id)
    } catch (error) {
        errors.invalidId = error.message
        return errors
    }

    //VALIDACION QUE CATEGORIES_IDS SEA UN ARRAY CON IDS VALIDAS
    if (obj.categories_ids && Array.isArray(obj.categories_ids)) {
        obj.categories_ids = obj.categories_ids.map((categorieId) => {
            try {
                const data = ObjectId(categorieId)
                return data
            } catch (error) {
                errors.categories_ids = "id invalida en categories_ids"
            }
        })
    } else {
        errors.categories_ids = "categories_ids tiene que ser un array"
    }

    //VALIDACION QUE REVIEWS_IDS SEA UN ARRAY CON IDS VALIDAS
    if (obj.reviews_ids && Array.isArray(obj.reviews_ids)) {
        obj.reviews_ids = obj.reviews_ids.map((objReview) => {
            try {
                const data = ObjectId(objReview.review_id)
                const obj = { review_id: data }
                return obj
            } catch (error) {
                errors.reviews_ids = "id invalida en reviews_ids"
            }
        })
    } else {
        errors.reviews_ids = "reviews_ids tiene que ser un array"
    }

    //BUSQUEDA Y ACTUALIZACION
    const searchProduct = await Product.findById(id).exec()
    if (!searchProduct) {
        errors.noId = "No se encontro un producto con esa id"
        return errors
    } else {
        errors.success = "Producto actualizado con exito"
        Product.updateOne({ _id: id }, obj, function response(err) {
            if (err) console.error(err)
        })
    }
    return errors
}

async function eraseProduct(id) {
    let logicDelete = await Product.updateOne(
        { _id: id }, //busqueda
        { deleted: true } //cambio
    )
    return logicDelete
}

module.exports = {
    listProducts,
    productById,
    productByQuery,
    createNewProduct,
    findAndUpdate,
    eraseProduct,
}
