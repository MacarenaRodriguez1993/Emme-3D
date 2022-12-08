const mongoose = require("mongoose")

const listProducts = async () => {
    const model = await Product.find({},(err,total)=>{
         res.send({total})
    })
    
}
const ProducByQuery = async (name)=>{
const byqu  =  prodduct.find({
    name : name 
},()=>{
  
})
}
const producdetails = (id) => {}

module.exports = {
    producdetails,
    listProducts,
    ProducByQuery
}
