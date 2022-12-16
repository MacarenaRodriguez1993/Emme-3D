const router = require("express").Router()
const mercadoPago = require("mercadopago")

//Credenciales
mercadoPago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
})

router.post("/", (req, res) => {
    try {
        let preference = {
            items: req.body.map((item) => {
                return {
                    ...item,
                    currency_id: "ARS",
                }
            }),
            back_urls: {
                success: "https://www.google.com",
                failure: "http://www.failure.com",
                pending: "http://www.pending.com",
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
