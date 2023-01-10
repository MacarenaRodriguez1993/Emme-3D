import "./Sidebar.css"
import { MdHome, MdStore } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <Link to="/dashboard" className="link">
                            <li className="sidebarlistitem">
                                <MdHome className="sidebaricon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/dashboard/users" className="link">
                            <li className="sidebarlistitem">
                                <FaUsers className="sidebaricon" />
                                Usuarios
                            </li>
                        </Link>
                        <Link className="link" to="/products">
                            <li className="sidebarlistitem">
                                <MdStore className="sidebaricon" />
                                Productos
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
