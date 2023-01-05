import "./SearchFilters.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    filterByCategories,
    filterByPrice,
    filterByPriceRange,
    filterBySales,
    filterByLikes,
    getCategories,
} from "../../redux/actions/actions"

const SearchFilters = () => {
    /* ESTE COMPONENTE FUNCIONA SETEANDO EL ESTADO GLOBAL PRODUCTSFILTERED
    PARA USARLO HAY QUE IMPORTARLO EN DONDE SE QUIERA USAR Y TRAER Y RENDERIZAR EL 
    ESTADO FILTRADO */
    const dispatch = useDispatch()
    const categorias = useSelector((state) => state.categories)
    let filtrados = useSelector((state) => state.productsFiltered)
    /* *************************************************** */
    /* *************************************************** */
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    //console.log(`categorias ---> ${categorias.map((e) => e.name)}`)

    /* *************************************************** */
    /* *************************************************** */
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
        <div className="filters-container">
            {/* filtro de categorias */}
            <select
                onChange={(e) => handleCategories(e)}
                className="select-filters"
                defaultValue="Categorias"
            >
                <option value="categorias">Categorias</option>
                {categorias?.map((c) => (
                    <option value={c.name}>{c.name}</option>
                ))}
            </select>
            {/* filtro de precios */}
            <select
                defaultValue="Precio"
                onChange={(e) => handlePrices(e)}
                className="select-filters"
            >
                <option value="precio">Precio</option>
                <option value="menor">Mayor precio</option>
                <option value="mayor">Menor precio</option>
            </select>
            <select
                defaultValue="Rango de precios"
                onChange={(e) => handlePricesRange(e)}
                className="select-filters"
            >
                <option value="rango">Rango de precios</option>
                <option value="1a1000">$1 a $1000</option>
                <option value="1000a2000">$1000 a $2000</option>
                <option value="2000a4000">$2000 a $4000</option>
                <option value="mas4000">Mas de $4000</option>
            </select>
            {/* mas o menos vendidos */}
            <select
                onChange={(e) => handleSales(e)}
                className="select-filters"
                defaultValue="Por ventas"
            >
                <option value="ventas">Por ventas</option>
                <option value="masVendidos">Mas vendidos</option>
                <option value="menosVendidos">Menos vendidos</option>
            </select>
            {/* mejores valorados */}
            <select
                onChange={(e) => handleLikes(e)}
                className="select-filters"
                defaultValue="Por valoraciones"
            >
                <option value="valoraciones">Por valoraciones</option>
                <option value="mayorValoracion">Mayor valoracion</option>
                <option value="menorValoracion">Menor valoracion</option>
            </select>
        </div>
    )
}

export default SearchFilters
