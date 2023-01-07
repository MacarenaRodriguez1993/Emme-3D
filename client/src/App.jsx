import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Details from "./pages/Details/Details"
import ProductsContainer from "./components/ProductsContainer/ProductsContainer"
import Home from "./pages/Home/home"
import Productos from "./pages/Productos/products"
import Landing from "./pages/Landing/landing"
import CreateProduct from "./components/CreateProduct/CreateProduct"
import Cart from "./pages/Cart/Cart"
import Register from "./pages/register/Register"
import Perfil from "./pages/perfil/Perfil"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "./components/firebase/firebase"
import { useDispatch } from "react-redux"
import { getUsers } from "./redux/actions/actions"
import { useEffect } from "react"
import Contacto from "./pages/Contacto/contacto"

function App() {
    const dispatch = useDispatch()

    const auth = getAuth(app)
    /*  onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(getUsers(user))
            const uid = user.uid

            // ...
        } else {
            // User is signed out
            // ...
        }
    })

    useEffect(() => {
        onAuthStateChanged()
    }, []) */

    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CreateProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/productos" element={<ProductsContainer />} />
                <Route
                    exact
                    strict
                    path="/crear-producto"
                    element={<CrearProducto />}
                />
                <Route exact strict path="/home" element={<Home />} />
                <Route exact strict path="/products" element={<Productos />} />
                <Route exact strict path="/" element={<Home />} />
                <Route exact strict path="/login" element={<Login />} />
                <Route exact strict path="/register" element={<Register />} />
                <Route path="/details/:_id" element={<Details />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/updateproduct/:id" element={<CreateProduct />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </>
    )
}

export default App
