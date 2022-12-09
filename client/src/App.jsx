import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import ProductsContainer from "./components/ProductsContainer/ProductsContainer"

function App() {
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CrearProducto />} />
                <Route path="/productos" element={<ProductsContainer />} />
            </Routes>
        </>
    )
}

export default App
