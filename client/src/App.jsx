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
import Homeadmin from "./Admin/pages/homeadmin/Homeadmin"
import User from "./Admin/pages/user/User"
import Userlist from "../src/Admin/pages/Userlist/Userlist"
import Newuser from "../src/Admin/pages/newuser/Newuser"
import Productlist from "../src/Admin/pages/productlist/Productlist"
import Product from "../src/Admin/pages/product/Product"
import NewProduct from "../src/Admin/pages/newproduct/Newproduct"

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
                <Route exact strict path="/" element={<Landing />} />
                <Route exact strict path="/login" element={<Login />} />
                <Route exact strict path="/register" element={<Register />} />
                <Route path="/details/:_id" element={<Details />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/updateproduct/:id" element={<CreateProduct />} />
                <Route exact path="/dashboard" element={<Homeadmin />} />
                <Route exact path="/dashboard/users" element={<Userlist />} />
                <Route exact path="/dashboard/user/:id" element={<User />} />
                <Route exact path="/dashboard/newuser" element={<Newuser />} />
                <Route
                    exact
                    path="/dashboard/products"
                    element={<Productlist />}
                />
                <Route
                    exact
                    path="/dashboard/product/:id"
                    element={<Product />}
                />
                <Route
                    exact
                    path="/dashboard/newproduct"
                    element={<NewProduct />}
                />
            </Routes>
        </>
    )
}

export default App
