import React from "react"
import "./products.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Product from "../../components/Product/product"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import SearchFilters from "../../components/SearchFilters/SearchFilters"
import SearchByName from "../../components/SearchByName/searchByName"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/actions"

/* Esta es la pagina de productos  se podra renderizar en cards un listado de productos con paginacion */

const Products = () => {
    /* Dejo listo el dispatch para cuando temgamos la conexion con el back*/
    /*Aqui tomo el estado global de allProducts*/
    const allProducts = useSelector((state) => state.allProducts)
    let productos = useSelector((state) => state.productsFiltered)
    const error = useSelector((state) => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className="productos">
            <NavBar />
            {/* AQUI TIENEN QUE IR LOS FILTROS Y ORDENAMIENTOS */}
            <SearchFilters />
            <SearchByName />
            <div className="cardProduct">
                {error}
                {productos.length === 0
                    ? allProducts.map((a) => {
                          return (
<<<<<<< HEAD
                              <a href={`/details/${a.id}`}>
                                  <Product
                                      key={a.id}
                                      name={a.name}
                                      price={a.price}
                                  />
=======
                              <a href={`/details/${a._id}`}>
                                  <Product name={a.name} price={a.price} />
>>>>>>> df47e0e00e3e157f0c210e7fdb486cb6995620c1
                              </a>
                          )
                      })
                    : productos?.map((a) => {
                          return (
<<<<<<< HEAD
                              <a href={`/details/${a.id}`}>
                                  <Product
                                      key={a.id}
                                      name={a.name}
                                      price={a.price}
                                  />
=======
                              <a href={`/details/${a._id}`}>
                                  <Product name={a.name} price={a.price} />
>>>>>>> df47e0e00e3e157f0c210e7fdb486cb6995620c1
                              </a>
                          )
                      })}
            </div>

            <Link to="/crear-producto">
                <button className="addButton product-btn">
                    {" "}
                    Crear Producto{" "}
                </button>
            </Link>

            {/* AQUI VA LA PAGINACION */}
            <p>Aqui va la paginacion</p>
            <Footer />
        </div>
    )
}

export default Products
