import React from "react"
import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                other pages
            </div>
        </div>
    )
}

export default Dashboard
