export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_BY_CATEGORY = 'GET_BY_CATEGORY'
const GET_BY_PRICE = 'GET_BY_PRICE'
const GET_BY_PRICE_RANGE = 'GET_BY_PRICE_RANGE'
const GET_BY_SALES = 'GET_BY_SALES'
const GET_BY_LIKES = 'GET_BY_LIKES'
const ERROR = 'ERROR'

/*--------- INICIO DE SECCION DE FILTROS DE BUSQUEDA -------------*/
export const filterByCategories = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_BY_CATEGORY,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
export const filterByPrice = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_BY_PRICE,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
export const filterByPriceRange = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_BY_PRICE_RANGE,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
export const filterBySales = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_BY_SALES,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
export const filterByLikes = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_BY_LIKES,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
/*--------- INICIO DE SECCION DE FILTROS DE BUSQUEDA -------------*/

//Aqui va la url base del back
const url_api = '';

//Action para traer todos los productos  - preparada para cuando tengamos la conexion con el back
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios.get(`${url_api}/products`);
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message
            })
        }
    }
}
