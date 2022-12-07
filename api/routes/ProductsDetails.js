const  router  = require("express").Router()


router.get("/",async(req,res)=>{
  res.send("ruta por query")
})

router.get("/:id",async(req,res)=>{
res.send("por id")
})







module.exports = router