const mongoose = require("mongoose")

const listProducts = async () => {
    const model = await Product.find(Product.ProductSchema)
}
const producdetails = (id) => {}

module.exports = {
    producdetails,
    listProducts,
}
