import "./App.css"
import CrearProducto from "./components/CrearProducto"
import { Route, Routes } from "react-router-dom"
import "tailwindcss/tailwind.css"
function App() {
    return (
        <>
            <Routes>
                <Route path="/crear-producto" element={<CrearProducto />} />
            </Routes>
        </>
    )
}

export default App
