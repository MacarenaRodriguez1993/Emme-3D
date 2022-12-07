import React from "react"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Product from "../../components/Product/product"
import { image } from "../../assets/stitch.jpg"
import { llavero } from "../../assets/letras.jpg"

/* Esta es la pagina de productos  se podra renderizar en cards un listado de productos con paginacion */

const Products = () => {
    const producto = [
        {
            id: 0,
            name: "Set de mates Ángel",
            price: 2500,
            stock: 1,
            description:
                "Set de mates Ángel. Contiene mate - yerbero y azucarera con tapas a rosca - 2 cucharas.",
            category_id: "0001",
            review_id: "0001",
            img: [image],
            deleted: false,
        },
        {
            id: 1,
            name: "Llavero remera de Messi",
            price: 500,
            stock: 10,
            description:
                "llavero reemra de messi con la 10, viene con cadena. Fabricados en impresion 3d con PLA",
            category_id: "0002",
            review_id: "0002",
            img: [llavero],
            deleted: false,
        },
    ]
    return (
        <>
            <NavBar />
            <h1>PRODUCTOS</h1>
            {producto.map((p) => {
                return (
                    <Product
                        key={p.id}
                        name={p.name}
                        image={p.img}
                        desc={p.description}
                    />
                )
            })}
            <Footer />
        </>
    )
}

export default Products
