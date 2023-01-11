import { useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteToCart, updateUser } from "../../redux/actions/actions"
import { AiOutlineHeart } from "react-icons/ai"
import { Navigate, useNavigate } from "react-router-dom"
import { useModal } from "../../components/LoginModal/useModal"
import ModalLogin from "../../components/LoginModal/ModalLogin"
import { useState } from "react"

const Cart = () => {
    let productosCart = useSelector((state) => state.shoppingCart)
    let user = useSelector((state) => state.userByUid)
    const { isOpen, open, close } = useModal()

    const [userCart, setuserCart] = useState({
        id: "",
        cart: [],
    })

    useEffect(() => {
        setuserCart({
            ...userCart,
            id: user?.uid,
            cart: productosCart,
        })
    }, [productosCart, user])

    const dispatch = useDispatch()

    const deleteCart = (name) => {
        dispatch(deleteToCart(name))
        dispatch(updateUser(userCart))
    }
    const navigate = useNavigate()

    const url_api = "https://emme-3d-production-c491.up.railway.app"
    //const url_api = "http://localhost:3001"
    //let url_api = "https://emme-3d-production-5ffc.up.railway.app"

    const buy = () => {
        if (user === null) {
            console.log("open", open)
            return open()
            /* 
            alert(
                "Para poder comprar debe iniciar sesion o registrarse. Te redirigimos a Login"
                )

            setTimeout(() => {
                navigate("/login")
            }, 1000) */
        } else {
            fetch(`${url_api}/mercadopago`, {
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

    let sum = productosCart
        ?.filter((pr) => !isNaN(pr.price) && !isNaN(parseInt(pr.units)))
        .map((pr) => pr.price * pr.units)
    let totalPrice = sum?.length !== 0 ? sum.reduce((a, b) => a + b) : 0
    return (
        <div>
            <ModalLogin isOpen={isOpen} open={open} close={close} />
            <NavBar />
            <div className="products-container">
                <h2 className="titleCart">Carrito de Compras 🔖</h2>
                <div className="p-container">
                    {/* {productosCart?.map((p) => (
                        <div className="product">
                            {console.log("p", p)}
                            <div>
                                <img src={p[0]?.productImage[0]} id="pr-img" />
                            </div>
                            <div id="contenidoCart">
                                <p>{p[0]?.productName}</p>
                                <p>{p[0]?.description}</p>
                                <p>Precio por unidad ${p[0]?.productPrice}</p>
                                {p[0]?.productAmount > 1 && (
                                    <p>
                                        Precio por {p[0]?.productAmount}u. $
                                        {p[0]?.productPrice *
                                            p[0]?.productAmount}
                                    </p>
                                )}
                            </div>
                            <div id="cantidad">
                                <span>Cantidad</span>
                                <input
                                    type="number"
                                    id="cant"
                                    defaultValue={1}
                                    onChange={(e) => handlerChange(e, p[0])}
                                />
                            </div>
                            <p className="botonesCart">
                                <button
                                    id="deleteCart"
                                    onClick={() => {
                                        deleteCart(p[0]?.productName)
                                    }}
                                >
                                    x
                                </button>
                                <AiOutlineHeart size="1.5em" />
                            </p>
                        </div>
                    ))} */}
                    {productosCart?.map((p) => (
                        <div className="product">
                            <div>
                                <img src={p?.img} id="pr-img" />
                            </div>
                            <div id="contenidoCart">
                                <p className="pr-title">{p?.name}</p>
                                <p className="pr-description">
                                    {p?.description}
                                </p>
                                <p>Precio por unidad ${p?.price}</p>
                                {parseInt(p?.units) > 1 && (
                                    <p>
                                        Precio por {parseInt(p?.units)}u.
                                        <span className="pr-values">
                                            ${p?.price * parseInt(p?.units)}
                                        </span>
                                    </p>
                                )}
                            </div>
                            <p className="botonesCart">
                                <button
                                    id="deleteCart"
                                    onClick={() => {
                                        deleteCart(p?.name)
                                    }}
                                >
                                    x
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
                        Pagar ${totalPrice ? totalPrice : 0}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
