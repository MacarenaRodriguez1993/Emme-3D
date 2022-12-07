import React from "react"
import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import Products from "./pages/Productos/products"

function App() {
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CrearProducto />} />
                <Route exact strict path="/" element={<Home/>}/>
                <Route exact strict path="/productos" element={<Products/>}/>
            </Routes>
        </>
    )
}

export default App
