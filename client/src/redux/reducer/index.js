const GET_BY_CATEGORY = 'GET_BY_CATEGORY'
const GET_BY_PRICE = 'GET_BY_PRICE'
const GET_BY_PRICE_RANGE = 'GET_BY_PRICE_RANGE'
const GET_BY_SALES = 'GET_BY_SALES'
const GET_BY_LIKES = 'GET_BY_LIKES'
const ERROR = 'ERROR'

const initialState = {
    allProducts: [{
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
        name: "Producto 2",
        price: 980,
        categorias: {
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
        name: "Producto 3",
        price: 1250,
        categorias: {
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
        name: "Producto 4",
        price: 2680,
        categorias: {
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
        name: "Producto 5",
        price: 4300,
        categorias: {
            id: 2,
            name: "Mates",
        },
        stock: 18,
        description: "Descripcion del producto 5",
        vendidos: 45,
        valoracion: 8.1,
        img: "",
    }],
    productsFilteredByCategory: [],
    productsFilteredByPrice: [],
    productsFilteredByPriceRange: [],
    productsFilteredBySales: [],
    productsFilteredByLikes: [],
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
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        /* INICIO FILTROS DE BUSQUEDA */
        case GET_BY_CATEGORY:
            let cat = allProducts.filter(c => c.categoria.id === action.payload)
            return {
                ...state,
                productsFilteredByCategory: cat
            }
        case GET_BY_PRICE:
            const pload = action.payload
            if (pload === 'menor') {

            } else if (pload === 'mayor') {

            } else {
                return allProducts
            }
            return {
                ...state,
                productsFilteredByPrice: state
            }
        case GET_BY_PRICE_RANGE:
            return {
                ...state,

            }
        case GET_BY_SALES:
            return {
                ...state,

            }
        case GET_BY_LIKES:
            return {
                ...state,

            }
        /* FIN FILTROS DE BUSQUEDA */
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default rootReducer