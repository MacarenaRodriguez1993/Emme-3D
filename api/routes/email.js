const router = require("express").Router()
const nodemailer = require("nodemailer")
const { info } = require("../controllers/emailController")
router.post("/", async (req, res) => {
    const { name, email } = req.body
    try {
        const data = await info(name, email)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

module.exports = router
