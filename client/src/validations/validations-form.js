const validations = data => {
    const error = {}
    //Expresion regular para nombres
    let regexp = /^[a-z\s]*$/
    //Expresion regular imagenes
    let regexpImg = /.*(png|jpg|jpeg|gif)$/

    if (!data.name) {
        error.name = 'El nombre es necesario'
    }
    if (!regexp.test(data.name)) {
        error.name = 'Solo minusculas y sin numeros'
    }
    if (!data.img) {
        error.img = "Subir una imagen";
    }
    if (!regexpImg.test(data.img)) {
        error.image = "Url is required";
    }
    if (!data.types.length) {
        error.types = "Types is required";
    }
    return error
}

export default validations