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
import { useEffect } from "react"
import Contacto from "./pages/Contacto/contacto"
import Homeadmin from "./Admin/pages/homeadmin/Homeadmin"
import User from "./Admin/pages/user/User"
import Userlist from "../src/Admin/pages/Userlist/Userlist"
import Newuser from "../src/Admin/pages/newuser/Newuser"
import Productlist from "../src/Admin/pages/productlist/Productlist"
import Product from "../src/Admin/pages/product/Product"
import NewProduct from "../src/Admin/pages/newproduct/Newproduct"
import SuccessfulOrder from "./pages/Successfull/successfulOrder"
import NotFound from "./components/NotFound/NotFound"
import { PrivateRoutes, AdminRoutes } from "./components/context/PrivateRoutes"

import { AuthProvider } from "./components/context/AuthContext"

const PRIVATE = "/profile"
const PUBLIC = "/"

function App() {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path="/crear-producto" element={<CreateProduct />} />
                <Route path="/cart" element={<Cart />} />
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
                <Route path="/profile" element={<PrivateRoutes><Perfil /></PrivateRoutes>} />
                <Route path="/updateproduct/:id" element={<AdminRoutes> <CreateProduct /> </AdminRoutes> } />
                <Route path="/contacto" element={<Contacto />} />
                <Route exact path="/dashboard" element={<AdminRoutes><Homeadmin /></AdminRoutes>} />
                <Route exact path="/dashboard/users" element={<AdminRoutes><Userlist /> </AdminRoutes>} />
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
                <Route path="*" element={<NotFound />} />
            </Routes>
            </AuthProvider>
        </>
    )
}

export default App
