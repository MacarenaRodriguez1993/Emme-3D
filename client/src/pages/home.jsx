import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

import "./home.css"
function Home() {
    return (
        <div className="home">
            <NavBar />
            <h1>Home</h1>
            <Footer />
        </div>
    )
}

export default Home
