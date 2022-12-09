import React from "react"
import "./product.css"
import stitch from "../../assets/stitch.png"

const Product = ({ name, price }) => {
    return (
        <div className="card">
            <img className="imageCard" src={stitch} alt={name} />
            <h2>{name}</h2>
            <p>$ {price}</p>
        </div>
    )
}

export default Product
