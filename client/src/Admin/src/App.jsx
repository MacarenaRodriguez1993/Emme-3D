import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import "./App.css"
import Homeadmin from "./pages/homeadmin/Homeadmin"

export default function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Homeadmin />
            </div>
        </div>
    )
}
