import React from "react"
import "./css/Details.css"
import logo from "../assets/naruto1.png"

export default function Details() {
    return (
        <div className="container-details">
            <div className="container-header">
                <div className="conatainer-header-left">
                    <img className="img-details" src={logo} />
                </div>
                <div className="conatainer-header-right">
                    <h2>Nombre del producto </h2>
                    <div>
                        <span>categoria: personajes</span>
                    </div>
                    <text>$ 1000</text>
                    <button>agregar al carrito</button>
                </div>
            </div>
            <div className="container-center">center details</div>
            <div className="container-footer">footer details</div>
        </div>
    )
}
