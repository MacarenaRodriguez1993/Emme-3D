import React from "react"

const product = [
    {
        title: "Mate harry",
        quantity: 1,
        description: "Mate Harry",
        price: 2500,
    },
    {
        title: "llavero messi",
        quantity: 2,
        description: "llaveros messi",
        price: 500,
    },
]
const MercadoPago = () => {
    const redirigirMP = () => {
        const pedido = product.map((item) => {
            return {
                title: item.title,
                quantity: item.quantity,
                description: item.description,
                unit_price: item.price,
            }
        })
        fetch("http://localhost:3001/mercadoPago", {
            method: "POST",
            body: JSON.stringify(pedido),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.href = data
            })
    }

    return (
        <div>
            <button onClick={redirigirMP}>Pagar con Mercado Pago</button>
        </div>
    )
}
export default MercadoPago
