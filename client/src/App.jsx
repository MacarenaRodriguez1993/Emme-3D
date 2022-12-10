import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Details from "./pages/Details/Details"
import ProductsContainer from "./components/ProductsContainer/ProductsContainer"
import Home from "./pages/Home/home"
import Productos from "./pages/Productos/products"
import Landing from "./pages/Landing/landing"
import { useEffect } from "react"
import { getProducts } from "./redux/actions/actions"
import { useDispatch } from "react-redux"

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    })
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CrearProducto />} />
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
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </>
    )
}

export default App
