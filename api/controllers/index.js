const mongoose = require("mongoose")


const listProducts = async ()=>{
    const model = await  Product.find(
        Product.ProductSchema
    )
    
}
const apidbid = ()=>{

}




module.exports = {
    apidbid,
    apidbinfo
}