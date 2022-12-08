export const GET_ALL_PRODUCTS='GET_ALL_PRODUCTS';
export const ERROR='ERROR'

//Aqui va la url base del back
const url_api='';

//Action para traer todos los productos  - preparada para cuando tengamos la conexion con el back
export const getProducts = ()=>{
    return async(dispatch)=>{
        try {
            const products= await axios.get(`${url_api}/products`);
            dispatch({
                type:GET_ALL_PRODUCTS,
                payload:products
            })
        } catch (err) {
            dispatch({
                type:ERROR,
                payload:err.message
            })
        }
    }
}