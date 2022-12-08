import React from "react"
import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import Products from "./pages/Productos/products"
import Landing from './pages/Landing/landing'

function App() {
    return (
        <>
            <Routes>
                <Route exact strict path="/crear-producto" element={<CrearProducto />} />
                <Route path="/home" element={<Home/>}/>
                <Route exact strict path="/products" element={<Products/>}/>
                <Route exact strict path="/" element={<Landing/>}/>
            </Routes>
        </>
    )
}

export default App
