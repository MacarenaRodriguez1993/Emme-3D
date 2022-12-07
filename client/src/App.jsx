import React from "react"
import { Route } from "react-router-dom"
import Home from "./pages/Home/home"
import "./App.css"
import Products from "./pages/Productos/products"

const App = () => {
    return (
        <div className="App">
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/products" component={Products} />
        </div>
    )
}

export default App
