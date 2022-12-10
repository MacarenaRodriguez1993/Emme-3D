const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_BY_CATEGORY = "GET_BY_CATEGORY"
const GET_BY_PRICE = "GET_BY_PRICE"
const GET_BY_PRICE_RANGE = "GET_BY_PRICE_RANGE"
const GET_BY_SALES = "GET_BY_SALES"
const GET_BY_LIKES = "GET_BY_LIKES"
const GET_DETAILS = "GET_DETAILS"
const ERROR = "ERROR"
import logo from "../../assets/emme3d-logo.png"

const initialState = {
    /* allProducts: [
        {
            id: 1,
            name: "Producto 1",
            price: 1950,
            categoria: {
                id: 2,
                name: "Mates",
            },
            stock: 22,
            description: "Descripcion del producto 1",
            vendidos: 32,
            valoracion: 7.8,
            img: logo,
        },
        {
            id: 2,
            name: "Producto 2",
            price: 980,
            categoria: {
                id: 1,
                name: "Veladores",
            },
            stock: 15,
            description: "Descripcion del producto 2",
            vendidos: 9,
            valoracion: 9.7,
            img: logo,
        },
        {
            id: 3,
            name: "Producto 3",
            price: 1250,
            categoria: {
                id: 3,
                name: "Llaveros",
            },
            stock: 7,
            description: "Descripcion del producto 3",
            vendidos: 123,
            valoracion: 8.6,
            img: logo,
        },
        {
            id: 4,
            name: "Producto 4",
            price: 2680,
            categoria: {
                id: 1,
                name: "Veladores",
            },
            stock: 5,
            description: "Descripcion del producto 4",
            vendidos: 7,
            valoracion: 9.2,
            img: logo,
        },
        {
            id: 5,
            name: "Producto 5",
            price: 4300,
            categoria: {
                id: 2,
                name: "Mates",
            },
            stock: 18,
            description: "Descripcion del producto 5",
            vendidos: 45,
            valoracion: 8.1,
            img: logo,
        },
    ], */
    allProducts: [],
    productsFiltered: [],
    categories: [
        {
            id: 1,
            name: "Veladores",
        },
        {
            id: 2,
            name: "Mates",
        },
        {
            id: 3,
            name: "Llaveros",
        },
    ],
    detail: {
        name: "Producto 4",
        price: 2680,
        categories: {
            id: 1,
            name: "Veladores",
        },
        stock: 5,
        description: "Descripcion del producto 4",
        vendidos: 7,
        reviews: [
            {
                rating: 9.2,
                name: "juanito",
                reviews: "este es un text ode prueba ",
            },
        ],
        img: logo,
    },
    error: "",
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
            }

        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            }
        /*----------- INICIO FILTROS DE BUSQUEDA -----------*/
        case GET_BY_CATEGORY:
            if (pload === "categorias") {
                return {
                    ...state,
                    productsFiltered: all,
                }
            } else {
                let cat = all.filter((c) => c.categoria.name === action.payload)
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
            }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer
