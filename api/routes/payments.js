const { Router } = require("express")
const router = Router()
const mercadopago = require("mercadopago")
require("dotenv").config()
const { MERCADOPAGO_ACCESS_TOKEN_TEST } = process.env

mercadopago.configure({
    access_token: MERCADOPAGO_ACCESS_TOKEN_TEST_VENDEDOR,
})

router.post("/", (req, res) => {
    let preference = {
        items: [
            {
                //items debe ser un array de objetos, cada objeto es un producto
                id: 5,
                title: "vasito3d",
                currency_id: "ARS",
                picture_url: "urlimage1",
                description: "description",
                category_id: "art",
                quantity: 1,
                unit_price: 15,
            },
        ],
        back_urls: {
            success: `http://localhost:3001/success`,
            failure: `http://localhost:3001/failure`,
            pending: `http://localhost:3001/pending`,
        },
        auto_return: "approved",
        binary_mode: true,
    }

    mercadopago.preferences
        .create(preference)
        .then((response) => {
            res.json({ response }) //response es un objeto, en init_point esta el link de cobro
        })
        .catch((error) => {
            console.log(error)
        })
    //res.status(200).send("POST /payments");
})

module.exports = router
