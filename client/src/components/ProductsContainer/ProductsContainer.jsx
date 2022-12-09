//import { useSelector } from "react-redux"
import SearchFilters from "../SearchFilters/SearchFilters"
import { useSelector } from "react-redux"
import "./ProductsContainer.css"

const ProductsContainer = () => {
    /* hice este componente solamente para probar los filtros */
    const productos = useSelector((state) => state.allProducts)
    let filtros = useSelector((state) => state.productsFiltered)
    const error = useSelector((state) => state.error)
    console.log(`PRODUCTOS: ${productos.map((p) => p.name)}`)
    console.log(`FILTRADOS: ${filtros.map((f) => f.name)}`)

    return (
        <div className="products-container">
            <SearchFilters />
            <p>Productos filtrados</p>
            <div className="p-container">
                {filtros &&
                    filtros.map((p) => (
                        <div className="product">
                            <h3>Nombre</h3>
                            <p>{p.name}</p>
                            <h3>Precio</h3>
                            <p>{p.price}</p>
                            <h3>Categoria</h3>
                            <p>{p.categoria.name}</p>
                            <h3>Stock</h3>
                            <p>{p.stock}</p>
                            <h3>Descripcion</h3>
                            <p>{p.description}</p>
                            <h3>Vendidos</h3>
                            <p>{p.vendidos}</p>
                            <h3>valoracion</h3>
                            <p>{p.valoracion}</p>
                            <img src={p.img} alt={p.img} id="pr-img" />
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default ProductsContainer
