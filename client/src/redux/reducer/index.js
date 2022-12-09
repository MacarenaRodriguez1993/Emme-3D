import { GET_DETAILS } from "../actions/actions"

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const ERROR = "ERROR"

const initialState = {
    allProducts: [],
    error: {},
    detail: {
        name: "prueba",
        price: 1500,
        stock: 50,
        description:
            "esta es una descripcion de prueba repdida muchas veces esta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas vecesesta es una descripcion de prueba repdida muchas veces",
        categories: "Personajes",
        reviews: [
            {
                name: "chicharito",
                rating: 8,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "juanito",
                rating: 5,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "benilancio",
                rating: 7,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "nicolas",
                rating: 3,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "chicharito",
                rating: 8,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "juanito",
                rating: 5,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "benilancio",
                rating: 7,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "nicolas",
                rating: 3,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "chicharito",
                rating: 8,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "juanito",
                rating: 5,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "benilancio",
                rating: 7,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
            {
                name: "nicolas",
                rating: 3,
                reviews:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem, obcaecati maxime voluptatem numquam sed iste velit ratione quae quod dolores. Deleniti ratione consectetur at delectus quos provident architecto quae.",
            },
        ],
        img: "https://static.tycsports.com/imagesOnRFS/noticias/2015/10/18/11-impresionantes-cosas-que-puedes-hacer-con-una-impresora-3d-007_0.jpg",
    },
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
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return { ...state }
    }
}

export default rootReducer
