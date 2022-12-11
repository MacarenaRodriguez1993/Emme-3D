import React from "react"
import "./product.css"
import stitch from "../../assets/stitch.png"
import { AiFillEdit, AiFillDelete, AiOutlineHeart } from "react-icons/ai"
const Product = ({ name, price }) => {
    return (
        <div className="card">
            <img className="imageCard" src={stitch} alt={name} />
            <div className="contentCard">
                <h4>{name}</h4>
                <div className="contenido">
                    <p>$ {price}</p>
                    <div>
                        <button className="buttonActions">
                            <AiFillEdit size="1.5em" />
                        </button>
                        <button className="buttonActions">
                            <AiFillDelete size="1.5em" />
                        </button>
                        <button className="buttonActions">
                            <AiOutlineHeart size="1.5em" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
