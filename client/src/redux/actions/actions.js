export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const ERROR = "ERROR"
export const GET_DETAILS = "GET_DETAILS"

//Aqui va la url base del back
const url_api = ""

const p = {
    name: "prueba",
    price: 1500,
    stock: 50,
    description:
        "esta es una descripcion de prueba repdida muchas veces esta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas veces",
    categories: 5,
    reviews: 5,
    img: "https://stpatrickspost.files.wordpress.com/2014/04/imagen-469-2.jpg",
}

//Action para traer todos los productos  - preparada para cuando tengamos la conexion con el back
export const getProducts = () => {
    return async (dispatch) => {
        try {
            // const products = await axios.get(`${url_api}/products`)
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: p,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getDetails = () => {
    return async (dispatch) => {
        const detalle = await axios.get(`${url_api}/detalles`)
        try {
            dispatch({
                type: GET_DETAILS,
                paiload: detalle,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}
