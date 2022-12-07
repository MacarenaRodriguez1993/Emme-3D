const router = require("express").Router()
const producdetails = require("../controllers/index")


router.get("/", async (req, res) => {
    try {
        if (name) {
        }
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    res.send("por id")
})

module.exports = router
