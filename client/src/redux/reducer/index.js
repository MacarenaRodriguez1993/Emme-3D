const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_BY_CATEGORY = "GET_BY_CATEGORY"
const GET_BY_PRICE = "GET_BY_PRICE"
const GET_BY_PRICE_RANGE = "GET_BY_PRICE_RANGE"
const GET_BY_SALES = "GET_BY_SALES"
const GET_BY_LIKES = "GET_BY_LIKES"
const GET_DETAILS = "GET_DETAILS"
const GET_CAROUSEL = "GET_CAROUSEL"
const ERROR = "ERROR"
const SEARCH_BY_NAME = "SEARCH_BY_NAME"
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
const DELETE_PRODUCT = "DELETE_PRODUCT"
//eliminar esta variable cuando se creen las rutas
const POST_CAROUSEL = "POST_CAROUSEL"
const GET_USERS = "GET_USERS"
const PUT_USER = "PUT_USER"
const CREATE_USER = "CREATE_USER"
const UPDATE_PRODUCTO = "UPDATE_PRODUCTO"
const ADD_CART = "ADD_CART"
const CART_LOGOUT = 'CART_LOGOUT'
const CART_LOGIN = 'CART_LOGIN'
const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT"
const GET_USER_UID = "GET_USER_UID"
const GET_ORDERS = 'GET_ORDERS'
const GET_REVIEWS_BY_ID = "GET_REVIEWS_BY_ID"
const USER_NULL = "USER_NULL"

const initialState = {
    allProducts: [],
    users: [],
    reviews: [],
    productsFiltered: [],
    categories: [],
    detail: {},
    error: "",
    inactiveProducts: [],
    carouselImages: [],
    shoppingCart: [],
    userByUid: {},
    allOrders: []
}

const rootReducer = (state = initialState, action) => {
    /* variables utiles para los reducers */
    const pload = action.payload
    const all = state.allProducts
    const filter = state.productsFiltered
    const res = filter.length !== 0 ? filter : all
    /* ---------------------------------- */
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                productsFiltered: action.payload,
                inactiveProducts: [],
            }

        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            }
        case GET_REVIEWS_BY_ID:
            return {
                ...state,
                reviews: action.payload,
            }
        /*---------USUSRIOS---------*/
        case GET_USERS: //LISTA DE TODOS LOS USUARIOS
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER_UID: //INFORMACION DE USUARIO
            return {
                ...state,
                userByUid: action.payload,
            }
        case USER_NULL: //CERRAR SESION
            return {
                ...state,
                userByUid: action.payload,
            }
        case PUT_USER:
            return {
                ...state,
                userByUid: action.payload
            }
        /*----------- INICIO FILTROS DE BUSQUEDA -----------*/
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case GET_BY_CATEGORY:
            if (action.payload === "categorias") {
                return {
                    ...state,
                    productsFiltered: state.allProducts,
                }
            } else {
                let prod = state.allProducts.filter(
                    (p) => p.category === action.payload
                )
                return {
                    ...state,
                    productsFiltered: [...prod],
                }
            }
        case GET_BY_PRICE:
            if (action.payload === "menor") {
                let menor = res.sort((p1, p2) => {
                    if (p1.price < p2.price) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...menor],
                }
            } else if (action.payload === "mayor") {
                let mayor = res.sort((p1, p2) => {
                    if (p1.price > p2.price) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...mayor],
                }
            } else {
                return {
                    ...state,
                    productsFiltered: res,
                }
            }
        case GET_BY_PRICE_RANGE:
            if (pload === "1a1000") {
                let sub1000 = all.filter((p) => p.price < 1000)
                return {
                    ...state,
                    productsFiltered: sub1000,
                }
            } else if (pload === "1000a2000") {
                let sub2000 = all.filter(
                    (p) => p.price > 1000 && p.price < 2000
                )
                return {
                    ...state,
                    productsFiltered: sub2000,
                }
            } else if (pload === "2000a4000") {
                let sub4000 = all.filter(
                    (p) => p.price > 2000 && p.price < 4000
                )
                return {
                    ...state,
                    productsFiltered: sub4000,
                }
            } else if (pload === "mas4000") {
                let sup4000 = all.filter((p) => p.price > 4000)
                return {
                    ...state,
                    productsFiltered: sup4000,
                }
            }
            return {
                ...state,
                productsFiltered: all,
            }
        case GET_BY_SALES:
            if (pload === "menosVendidos") {
                let menor = res.sort((p1, p2) => {
                    if (p1.vendidos > p2.vendidos) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...menor],
                }
            } else if (pload === "masVendidos") {
                let mayor = res.sort((p1, p2) => {
                    if (p1.vendidos < p2.vendidos) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...mayor],
                }
            } else {
                return {
                    ...state,
                    productsFiltered: res,
                }
            }
        case GET_BY_LIKES:
            if (pload === "menorValoracion") {
                let menor = res.sort((p1, p2) => {
                    if (p1.valoracion > p2.valoracion) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...menor],
                }
            } else if (pload === "mayorValoracion") {
                let mayor = res.sort((p1, p2) => {
                    if (p1.valoracion < p2.valoracion) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    productsFiltered: [...mayor],
                }
            } else {
                return {
                    ...state,
                    productsFiltered: res,
                }
            }
        /*----------- FIN FILTROS DE BUSQUEDA -----------*/
        case ERROR:
            return {
                ...state,
                error: action.payload,
                productsFiltered: [],
            }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            }
        case GET_CAROUSEL:
            return {
                ...state,
                carouselImages: pload,
            }
        case POST_CAROUSEL:
            return {
                ...state,
                carouselImages: [...pload],
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                productsFiltered: action.payload,
                error: "",
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                inactiveProducts: action.payload,
                productsFiltered: state.productsFiltered,
            }
        case UPDATE_PRODUCTO:
            return {
                ...state,
                productsFiltered: [...state.productsFiltered, action.payload],
            }
        case ADD_CART:
            /* const productsToAdd = action.payload.map((product) => {
                return {
                    productName: action.payload.name,
                    productDescription: product.description,
                    productImage: product.img,
                    productPrice: product.price,
                    productUnits: product.units,
                    productTotal: product.price * product.units,
                }
            })
            console.log("Products", productsToAdd) */
            let pload = action.payload
            let productCart = {
                name: pload.name,
                description: pload.description,
                img: pload.img,
                price: pload.price,
                units: pload.units
            }
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, productCart],
            }
        case CART_LOGOUT:
            return {
                ...state,
                shoppingCart: action.payload,
            }
        case CART_LOGIN:
            return {
                ...state,
                shoppingCart: [...action.payload, ...shoppingCart]
            }
        case DELETE_CART_PRODUCT:
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart.filter(
                        (p) => p.name !== action.payload
                    ),
                ],
            }
        case GET_ORDERS:
            return {
                ...state,
                allOrders: action.payload
            }

        default:
            return state
    }
}

export default rootReducer
