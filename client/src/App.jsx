import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Details from "./pages/Details"

function App() {
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CrearProducto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </>
    )
}

export default App
