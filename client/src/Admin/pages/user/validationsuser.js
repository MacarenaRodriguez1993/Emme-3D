const validationsuser = (data) => {
    const error = {}
    //Expresion regular para nombres con numeros
    let regexp = /^[a-zA-Z0-9\s]*$/
    //Expresion regular imagenes
    let regexpImg = /.*(png|jpg|jpeg|gif)$/
    let regexEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    data.name = data.name.trim()
    data.username = data.username.trim()
    data.email = data.email.trim()
    data.surname = data.surname.trim()
    data.city = data.city.trim()
    data.province = data.province.trim()
    data.cp = data.cp.trim()
    /*validacion rota
    if (
        !data.username &&
        !data.email &&
        !data.name &&
        !data.surname &&
        !data.address &&
        !data.city &&
        !data.province &&
        !data.cp &&
        !data.phone &&
        !data.img &&
        !data.isAdmin
    ) {
        error.status = "No editaste nada"
    }
    */
    return error
}

export default validationsuser
