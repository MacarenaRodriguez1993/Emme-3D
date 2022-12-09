const mongoose = require("mongoose")
const Product = require("../models/Product.js")
const ObjectId = mongoose.Types.ObjectId

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
    findAndUpdate,
    deleteProduct,
}
