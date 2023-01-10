const router = require("express").Router()
const { pago, newUser, contacto } = require("../controllers/emailController")

//Envia mail cuando el pago fue exitoso
router.post("/pagado", async (req, res) => {
    const { name, email } = req.body
    try {
        const data = await pago(name, email)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

//Envia mail cuando se crea usuario
router.post("/usuario", async (req, res) => {
    const { name, email } = req.body
    try {
        const data = await newUser(name, email)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

//Enviar mail a EMME3D cuando un usuario quiere contactar
router.post("/contacto", async (req, res) => {
    //const { email } = req.body
    try {
        const data = await contacto(req.body)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
module.exports = router
