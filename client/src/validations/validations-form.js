const validations = (data) => {
    const error = {}
    //Expresion regular para nombres con numeros
    let regexp = /^[a-zA-Z0-9\s]*$/
    //Expresion regular imagenes
    let regexpImg = /.*(png|jpg|jpeg|gif)$/

    if (!data.name.length) {
        error.name = "El nombre es necesario"
    }
    if (!regexp.test(data.name)) {
        error.name = "Solo letras y numeros "
    }
    if (!data.price) {
        error.price = "Indica el precio"
    }
    if (data.price < 1) {
        error.price = "El precio debe ser mayor a cero"
    }
    // if (data.categories_ids.length === 0) {
    //     error.categories_ids = "Selecciona una cateogoria"
    // }
    if (!data.stock) {
        error.stock = "Ingresa las unidades disponibles"
    }
    if (data.stock < 1) {
        error.stock = "Las unidades deben ser mayor a cero"
    }
    if (!data.description) {
        error.description = "Describi tu producto"
    }
    if (data.img.length === 0) {
        error.img = "Subi al menos una imagen"
    }
    return error
}

export default validations
