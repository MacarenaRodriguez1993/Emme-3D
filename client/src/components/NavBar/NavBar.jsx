import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"

const NavBar = () => {
    const user = useSelector((state) => state.users)
    let productosCart = useSelector((state) => state.shoppingCart)
    return (
        <div className="navBar">
            <ul>
                <Link to="/">
                    <h2 className="titleHome">Emme 3D</h2>
                </Link>
                <div className="items">
                    <Link to="/cart">
                        <div className="cart">
                            <FaShoppingCart />
                            <p id="indexCart"> {productosCart.length}</p>
                        </div>
                    </Link>
                    <Link to="/products">
                        <h4>Productos</h4>
                    </Link>
                    <Link to="/about">
                        <h4>Nosotros</h4>
                    </Link>
                    <Link to="/contact">
                        <h4>Contacto</h4>
                    </Link>
                    <button className="buttonLogin login-btn">
                        {user ? (
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
