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

function App() {
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CreateProduct />} />
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
                <Route
                    exact
                    strict
                    path="/updateproduct/:id"
                    element={<CreateProduct />}
                />
            </Routes>
        </>
    )
}

export default App
