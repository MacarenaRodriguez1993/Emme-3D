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
const GET_USER = "GET_USER"
const CREATE_USER = "CREATE_USER"
const UPDATE_PRODUCTO = "UPDATE_PRODUCTO"
const ADD_CART = "ADD_CART"
const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT"
const GET_USER_UID = "GET_USER_UID"

const initialState = {
    allProducts: [],
    users: [],
    user: {},
    userInfo: {},
    productsFiltered: [],
    categories: [],
    detail: {},
    error: "",
    inactiveProducts: [],
    carouselImages: [],
    shoppingCart: [],
    userByUid: {},
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
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
            case GET_USER:
            return {
                ...state,
                userInfo: action.payload,
            }
        case CREATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: pload,
            }
        /*----------- INICIO FILTROS DE BUSQUEDA -----------*/
        case GET_BY_CATEGORY:
            if (pload === "categorias") {
                return {
                    ...state,
                    productsFiltered: all,
                }
            } else {
                let cat = state.categories.filter(
                    (c) => c.categoria.name === action.payload
                )
                return {
                    ...state,
                    productsFiltered: [...cat],
                }
            }
        case GET_BY_PRICE:
            if (pload === "menor") {
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
            } else if (pload === "mayor") {
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
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload],
            }
        case DELETE_CART_PRODUCT:
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart.filter(
                        (p) => p[0].name !== action.payload
                    ),
                ],
            }
        case GET_USER_UID:
            return {
                ...state,
                userByUid: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer
