const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

const initialState = {
    allProducts: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }

    }
}

export default rootReducer