import "./SearchFilters.css"
import { useDispatch, useSelector } from "react-redux"
import {
    filterByCategories,
    filterByPrice,
    filterByPriceRange,
    filterBySales,
    filterByLikes,
} from "../../redux/actions/actions"

const SearchFilters = () => {
    /* ESTE COMPONENTE FUNCIONA SETEANDO EL ESTADO GLOBAL PRODUCTSFILTERED
    PARA USARLO HAY QUE IMPORTARLO EN DONDE SE QUIERA USAR Y TRAER Y RENDERIZAR EL 
    ESTADO FILTRADO */
    const dispatch = useDispatch()
    const categorias = useSelector((state) => state.categories)
    let filtrados = useSelector((state) => state.productsFiltered)

    const handleCategories = (e) => {
        dispatch(filterByCategories(e.target.value))
    }
    const handlePrices = (e) => {
        dispatch(filterByPrice(e.target.value))
    }
    const handlePricesRange = (e) => {
        dispatch(filterByPriceRange(e.target.value))
    }
    const handleSales = (e) => {
        dispatch(filterBySales(e.target.value))
    }
    const handleLikes = (e) => {
        dispatch(filterByLikes(e.target.value))
    }

    return (
        <div>
            {/* filtro de categorias */}
            <select onChange={(e) => handleCategories(e)}>
                <option selected value="categorias">
                    Categorias
                </option>
                {categorias?.map((cat) => (
                    <option value={cat.name}>{cat.name}</option>
                ))}
            </select>
            {/* filtro de precios */}
            <select onChange={(e) => handlePrices(e)}>
                <option selected value="precio">
                    Precio
                </option>
                <option value="menor">Mayor precio</option>
                <option value="mayor">Menor precio</option>
            </select>
            <select onChange={(e) => handlePricesRange(e)}>
                <option selected value="rango">
                    Rango de precios
                </option>
                <option value="1a1000">$1 a $1000</option>
                <option value="1000a2000">$1000 a $2000</option>
                <option value="2000a4000">$2000 a $4000</option>
                <option value="mas4000">Mas de $4000</option>
            </select>
            {/* mas o menos vendidos */}
            <select onChange={(e) => handleSales(e)}>
                <option selected value="ventas">
                    Por ventas
                </option>
                <option value="masVendidos">Mas vendidos</option>
                <option value="menosVendidos">Menos vendidos</option>
            </select>
            {/* mejores valorados */}
            <select onChange={(e) => handleLikes(e)}>
                <option selected value="valoraciones">
                    Por valoraciones
                </option>
                <option value="mayorValoracion">Mayor valoracion</option>
                <option value="menorValoracion">Menor valoracion</option>
            </select>
        </div>
    )
}

export default SearchFilters
