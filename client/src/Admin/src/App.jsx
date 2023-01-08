import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import "./App.css"
import Home from "./pages/home/Home"

export default function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    )
}
