const mongoose = require("mongoose")

const listProducts = async () => {
    const model = await Product.find({}, (err, total) => {
        return total
    })
}
const ProducByQuery = async (name) => {
    const byqu = product.find(
        {
            name: name,
        },
        (err, data) => {
            return data;
        }
    )
}
const productId = async (id) => {
    Product.find(
        { 
            id: id 
        }, 
        (err, quer) => {
            return  quer;
        })
}

module.exports = {
    listProducts,
    productId,
    ProducByQuery,
}
