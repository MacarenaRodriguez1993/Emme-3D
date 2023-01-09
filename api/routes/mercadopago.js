const router = require("express").Router()
require("dotenv").config()
const { ACCESS_TOKEN_MP } = process.env
const mercadoPago = require("mercadopago")

//Credenciales
mercadoPago.configure({
    access_token: ACCESS_TOKEN_MP,
})

router.post("/", (req, res) => {
    const order = req.body.map((producto) => producto[0])

    try {
        let preference = {
            items: order.map((item) => {
                return {
                    ...item,
                    currency_id: "ARS",
                    quantity: parseInt(item.productAmount),
                    unit_price: item.productPrice,
                }
            }),
            back_urls: {
                // success: "https://m3dfront.onrender.com/successfulOrder",
                success: "http://localhost:5173/successfulOrder",
                failure: "https://m3dfront.onrender.com/products",
                pending: "https://m3dfront.onrender.com/products",
            },
        }
        mercadoPago.preferences.create(preference).then(function (response) {
            res.status(200).json(response.body.init_point)
            // res.json({
            //     id: response.body.id,
            // })
        })
    } catch (err) {
        res.status(404).send(err.message)
    }
})
module.exports = router
