import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteToCart } from "../../redux/actions/actions"
import axios from "axios"

const Cart = () => {
    let productosCart = useSelector((state) => state.shoppingCart)
    const dispatch = useDispatch()
    const deleteCart = (name) => {
        dispatch(deleteToCart(name))
    }
    const buy = () => {
        fetch("http://localhost:3001/mercadopago", {
            method: "POST",
            body: JSON.stringify(productosCart),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.href = data
            })
    }
    return (
        <div>
            <NavBar />
            <div className="products-container">
                <h2 className="titleCart">Carrito de Compras 🔖</h2>
                <div className="p-container">
                    {productosCart.map((p) => (
                        <div className="product">
                            <h3>Nombre</h3>
                            <p>{p[0].name}</p>
                            <h3>Precio</h3>
                            <p>{p[0].price}</p>
                            <h3>Categoria</h3>
                            <p>{p[0].categories_ids[0]}</p>
                            <h3>Stock</h3>
                            <p>{p[0].stock}</p>
                            <h3>Descripcion</h3>
                            <p>{p[0].description}</p>
                            <img src={p[0].img[0]} id="pr-img" />
                            <p>
                                <button
                                    onClick={() => {
                                        deleteCart(p[0].name)
                                    }}
                                >
                                    Sacar del carrito
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                    <button
                        className="compra"
                        onClick={() => {
                            buy()
                        }}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
