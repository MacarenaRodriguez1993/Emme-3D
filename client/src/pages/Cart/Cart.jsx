import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteToCart } from "../../redux/actions/actions"
import { AiOutlineHeart } from "react-icons/ai"
import { Navigate, useNavigate } from "react-router-dom"
const Cart = () => {
    let productosCart = useSelector((state) => state.shoppingCart)
    let user = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const deleteCart = (name) => {
        dispatch(deleteToCart(name))
    }
    const navigate = useNavigate()
    const buy = () => {
        if (user.length === 0) {
            alert(
                "Para poder comprar debe iniciar sesion o registrarse. Te redirigimos a Login"
            )
            setTimeout(() => {
                navigate("/login")
            }, 1000)
        } else {
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
    }
    return (
        <div>
            <NavBar />
            <div className="products-container">
                <h2 className="titleCart">Carrito de Compras 🔖</h2>
                <div className="p-container">
                    {productosCart.map((p) => (
                        <div className="product">
                            <div>
                                <img src={p[0].img[0]} id="pr-img" />
                            </div>
                            <div id="contenidoCart">
                                <p>{p[0].name}</p>
                                <p>$ {p[0].price}</p>
                                <p>{p[0].description}</p>
                            </div>
                            <div id="cantidad">
                                <span>Cantidad</span>
                                <input type="number" id="cant" />
                            </div>
                            <p className="botonesCart">
                                <button
                                    id="deleteCart"
                                    onClick={() => {
                                        deleteCart(p[0].name)
                                    }}
                                >
                                    x
                                </button>
                                <AiOutlineHeart size="1.5em" />
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
