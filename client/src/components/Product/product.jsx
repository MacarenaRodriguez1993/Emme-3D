import React from "react"

const Product = ({ name, image, desc }) => {
    return (
        <>
            <h1>Hola mundo</h1>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>{desc}</p>
        </>
    )
}

export default Product
