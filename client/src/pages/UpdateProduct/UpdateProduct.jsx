import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
const UpdateProduct = () => {
    const update_ID = useParams()
    const allProduct = useSelector((state) => state.productsFiltered)
    const updateProduct = allProduct.find((a) => console.log(a._id))

    const [formProduc, setFormProduc] = useState({
        name: updateProduct ? updateProduct.name : "",
        price: updateProduct ? updateProduct.price : 0,
        stock: updateProduct ? updateProduct.stock : 0,
        description: updateProduct ? updateProduct.description : "",
        categories_ids: updateProduct ? updateProduct.categories_ids : [],
        img: updateProduct ? updateProduct.img : [],
    })
    return (
        <>
            <form id="formProduc" onSubmit={(event) => onSubmit(event)}>
                <label>Activity name </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formProduc.name}
                    placeholder="ex: senderismo"
                />

                <label>Difficult </label>
                <input
                    id="difficult"
                    type="range"
                    name="difficult"
                    value={formProduc.price}
                />

                <label>Duration </label>
                <input
                    id="duration"
                    type="text"
                    name="duration"
                    placeholder="ex: 1 hours"
                    value={formProduc.stock}
                />

                <div className="button">
                    <button>crrear</button>
                </div>
            </form>
        </>
    )
}

export default UpdateProduct
