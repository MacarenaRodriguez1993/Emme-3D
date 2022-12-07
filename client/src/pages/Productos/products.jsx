import React from "react"
import "./products.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Product from "../../components/Product/product"

/* Esta es la pagina de productos  se podra renderizar en cards un listado de productos con paginacion */

const Products = () => {
    const producto = [
        {
            name: "Mate Harry Potter",
            price: 1500,
        },
        {
            name: "Lampara litofania",
            price: 3500,
        },
        {
            name: "Llavero camiseta Messi",
            price: 500,
        },
        {
            name: "Soporte para Notbook",
            price: 1500,
        },
    ]
    return (
        <div className="productos">
            <NavBar />

            {/* AQUI TIENEN QUE IR LOS FILTROS Y ORDENAMIENTOS */}
            <h5>Aqui van los filtros</h5>
            <div className="cardProduct">
                {producto.map((a) => {
                    return <Product name={a.name} price={a.price} />
                })}
            </div>

            {/* AQUI VA LA PAGINACION */}
            <p>Aqui va la paginacion</p>
            <Footer />
        </div>
    )
}

export default Products
