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
import SuccessfulOrder from "./pages/Successfull/successfulOrder"
import NotFound from "./components/NotFound/NotFound"
import { PrivateRoutes, AdminRoutes } from "./components/context/PrivateRoutes"

import { AuthProvider } from "./components/context/AuthContext"
import About from "./pages/About/about"
import ModalLogin from "./components/LoginModal/ModalLogin"


function App() {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path="/crear-producto" element={<AdminRoutes><CreateProduct /></AdminRoutes>} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    exact
                    strict
                    path="/crear-producto"
                    element={<AdminRoutes><CrearProducto /></AdminRoutes>}
                />
                <Route path="/modal" element={<ModalLogin/>} />
                <Route exact strict path="/home" element={<Home />} />
                <Route exact strict path="/products" element={<Productos />} />
                <Route exact strict path="/" element={<Home />} />
                <Route exact strict path="/login" element={<Login />} />
                <Route exact strict path="/register" element={<Register />} />
                <Route path="/details/:_id" element={<Details />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/updateproduct/:id" element={<CreateProduct />} />
                <Route exact path="/dashboard" element={<Homeadmin />} />
                <Route exact path="/dashboard/users" element={<Userlist />} />
                <Route exact path="/dashboard/user/:id" element={<User />} />

                <Route path="*" element={<NotFound />} />
                <Route path="/successfulOrder" element={<PrivateRoutes><SuccessfulOrder /></PrivateRoutes>} />
                <Route path="/about" element={<About />} />
            </Routes>
            </AuthProvider>
        </>
    )
}

export default App
