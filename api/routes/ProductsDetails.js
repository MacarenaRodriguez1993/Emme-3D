const router = require("express").Router()
const productId = require("../controllers/index")
const ProducByQuery = require("../controllers/index")

router.get("/", async (req, res) => {
    const {name} = req.query.name
    try {
        if (name) {
        res.status(200).json(ProducByQuery(name))
        }
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    const {id} = req.params.id
    try{
    res.status(200).json(productId(id))
}catch(err){
    res.status(404).send(err.message)
}
})

module.exports = router
