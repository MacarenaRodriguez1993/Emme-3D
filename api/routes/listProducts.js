const  router  = require("express").Router()


router.get("/", async (req,res)=>{
   res.send( " ya estamos en ruta ")
})



module.exports = router;