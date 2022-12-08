const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const ERROR = "ERROR"

const initialState = {
    allProducts: [],
    error: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return { ...state }
    }
}

export default rootReducer
