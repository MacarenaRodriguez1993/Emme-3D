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
    const dispatch = useDispatch()
    const categorias = useSelector((state) => state.categories)

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
                <option selected>Categorias</option>
                {categorias?.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                ))}
            </select>
            {/* filtro de procios */}
            <select onChange={(e) => handlePrices(e)}>
                <option selected>Precio</option>
                <option value="menor">Mayor precio</option>
                <option value="mayor">Menor precio</option>
            </select>
            <select onChange={(e) => handlePricesRange(e)}>
                <option selected>Rango de precios</option>
                <option value="1a1000">$1 ~ $1000</option>
                <option value="1001a2000">$1001 ~ $2000</option>
                <option value="2001a4000">$2001 ~ $4000</option>
                <option value="mas4000">Mas de $4000</option>
            </select>
            {/* mas o menos vendidos */}
            <select onChange={(e) => handleSales(e)}>
                <option selected>Por ventas</option>
                <option value="masVendidos">Mas vendidos</option>
                <option value="menosVendidos">Menos vendidos</option>
            </select>
            {/* mejores valorados */}
            <select onChange={(e) => handleLikes(e)}>
                <option selected>Por valoraciones</option>
                <option value="mayorValoracion">Mayor valoracion</option>
                <option value="menorValoracion">Menor valoracion</option>
            </select>
        </div>
    )
}

export default SearchFilters
