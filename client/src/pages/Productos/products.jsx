import React from "react"
import "./products.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Product from "../../components/Product/product"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import SearchFilters from "../../components/SearchFilters/SearchFilters"
import SearchByName from "../../components/SearchByName/searchByName"

/* Esta es la pagina de productos  se podra renderizar en cards un listado de productos con paginacion */

const Products = () => {
    /* Dejo listo el dispatch para cuando temgamos la conexion con el back*/
    /*Aqui tomo el estado global de allProducts*/
    const allProducts = useSelector((state) => state.allProducts)
    let productos = useSelector((state) => state.productsFiltered)
    console.log(productos)
    const error = useSelector((state) => state.error)
    const dispatch = useDispatch()

    return (
        <div className="productos">
            <NavBar />

            {/* AQUI TIENEN QUE IR LOS FILTROS Y ORDENAMIENTOS */}
            <SearchFilters />
            <SearchByName />
            <div className="cardProduct">
                {productos.length === 0
                    ? allProducts.map((a) => {
                          return (
                              <a href={`/details/${a.id}`}>
                                  <Product name={a.name} price={a.price} />
                              </a>
                          )
                      })
                    : productos?.map((a) => {
                          return (
                              <a href={`/details/${a.id}`}>
                                  <Product name={a.name} price={a.price} />
                              </a>
                          )
                      })}
            </div>

            <Link to="/crear-producto">
                <button className="addButton"> Crear Producto </button>
            </Link>

            {/* AQUI VA LA PAGINACION */}
            <p>Aqui va la paginacion</p>
            <Footer />
        </div>
    )
}

export default Products
