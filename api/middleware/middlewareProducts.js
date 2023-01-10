const {
    findAndUpdate,
    productById,
    eraseProduct,
    createNewProduct,
    productByQuery,
    listProducts,
} = require("../controllers/productController")

// PRODUCTS
async function getAllProducts() {
    try {
        const products = await listProducts()
        return products
    } catch (error) {
        throw error
    }
}

async function getProductById(id) {
    try {
        const product = await productById(id)
        // TO-DO: Faltará añadirle las categorías y reseñas
        return product
    } catch (error) {
        throw error
    }
}

async function getProducByQuery(product) {
    try {
        const queryProduct = await productByQuery(product)
        return queryProduct
    } catch (err) {
        throw err
    }
}

async function createProduct(product) {
    try {
        const createdProduct = await createNewProduct(product)
        return createdProduct
    } catch (err) {
        throw err
    }
}

async function updateProduct(id, body) {
    let errors = {}
    let obj = {
        categories_ids: body.categories_ids,
        reviews_ids: body.reviews_ids,
    }

    //VALIDACION QUE SE HAYA ENVIADO UN NAME Y QUE SEA UN STRING
    if (body.name && typeof body.name == "string") {
        obj.name = body.name
    } else {
        errors.name = "debes enviar una propiedad name que sea un string"
    }

    //VALIDACION QUE SE HAYA ENVIADO UN PRICE Y QUE SEA UN NUMERO
    if (body.price && typeof body.price == "number") {
        obj.price = body.price
    } else {
        errors.price = "debes enviar una propiedad price que sea un numero"
    }

    //VALIDACION QUE SE HAYA ENVIADO UN STOCK Y QUE SEA UN NUMERO
    if (body.stock && typeof body.stock == "number") {
        obj.stock = body.stock
    } else {
        errors.stock = "debes enviar una propiedad stock que sea un numero"
    }

    //VALIDACION QUE SE HAYA ENVIADO UNA DESCRIPTION Y QUE SEA UN STRING
    if (body.description && typeof body.description == "string") {
        obj.description = body.description
    } else {
        errors.description =
            "debes enviar una propiedad description que sea un string"
    }

    //VALIDACION QUE SE HAYA ENVIADO UN ARRAY IMG Y QUE TODOS SUS ELEMENTOS SEAN STRINGS
    if (body.img && Array.isArray(body.img)) {
        let initialLength = body.img.length
        let stringsImage = []
        body.img.forEach((string) => {
            if (typeof string == "string") {
                stringsImage.push(string)
            }
        })
        if (initialLength == stringsImage.length) {
            obj.img = body.img
        } else {
            errors.img =
                "debes enviar una propiedad img que sea un array de strings, todos los elementos del array deben ser strings"
        }
    } else {
        errors.img =
            "debes enviar una propiedad img que sea un array de strings, todos los elementos del array deben ser strings"
    }

    //EN CASO DE QUE SE MANDE UN OBJETO VACIO
    if (!obj.name && !obj.price && !obj.stock && !obj.description && !obj.img) {
        return errors
    } else {
        let errorReport = await findAndUpdate(id, obj, errors)
        return errorReport
    }
}

async function deleteProduct(id) {
    try {
        const deteledProduct = await eraseProduct(id)
        return deteledProduct
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProducByQuery,
}
