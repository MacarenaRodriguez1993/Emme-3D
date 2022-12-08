const router = require("express").Router()
const listProducts = require("../controllers/index")

router.get("/", async (req, res) => {
    try {
        res.status(200).json(listProducts())
    } catch (err) {
        res.status(402).send(err.message)
    }
})

module.exports = router
