import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const NavBar = () => {
    //const dispatch = useDispatch()
    const user = useSelector((state) => state.userByUid)
    console.log("usernav", user?.email)
    let productosCart = useSelector((state) => state.shoppingCart)

    /* useEffect(() => {
        if (user.length === 0) {
            dispatch()
        }
    }) */

    return (
        <div className="navBar">
            <ul className="ulelement">
                <Link to="/" className="linkk">
                    <h2 className="titleHome">Emme 3D</h2>
                </Link>
                <div className="items">
                    <Link to="/cart" className="linkk">
                        <div className="cart">
                            <FaShoppingCart />
                            <p id="indexCart"> {productosCart.length}</p>
                        </div>
                    </Link>
                    <Link to="/products" className="linkk">
                        <h4>Productos</h4>
                    </Link>
                    <Link to="/about" className="linkk">
                        <h4>Nosotros</h4>
                    </Link>
                    <Link to="/contacto" className="linkk">
                        <h4>Contacto</h4>
                    </Link>
                    <button className="buttonLogin login-btn">
                        {user?.email ? (
                            <Link to="/profile">Perfil </Link>
                        ) : (
                            <Link to="/login"> LogIn </Link>
                        )}
                    </button>
                </div>
            </ul>
        </div>
    )
}

export default NavBar
