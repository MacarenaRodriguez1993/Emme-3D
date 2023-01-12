import React from "react"
import "./product.css"
import stitch from "../../assets/stitch.png"
import { AiFillEdit, AiFillDelete, AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from "../../redux/actions/actions"
import { Link } from "react-router-dom"
import swal from "sweetalert"
const Product = ({ id, name, price, image }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userByUid)
    const onClickDelete = (id) => {
        swal({
            title: "¿Estas seguro?",
            text: "Una vez inhabilitado el producto no aparecera en la tienda",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Producto inhabilitado con exito", {
                    icon: "success",
                })
                dispatch(deleteProduct(id))
                dispatch(getProducts())
            }
        })
    }

    return (
        <div className="card">
            <Link to={`/details/${id}`}>
                <img className="imageCard" src={image} alt={name} />
            </Link>
                <h5 style={{ margin: '10px'}}>{name}</h5>
            <div className="contentCard">
                <div className="contenido">
                    <p>$ {price}</p>
                    <div>
                        {user?.isAdmin ? (
                            <>
                                <Link to={`/updateproduct/${id}`}>
                                    <button className="buttonActions">
                                        <AiFillEdit size="1.5em" />
                                    </button>
                                </Link>
                                <button
                                    className="buttonActions"
                                    onClick={() => onClickDelete(id)}
                                >
                                    <AiFillDelete size="1.5em" />
                                </button>
                            </>
                        ) : (
                            ""
                        )}
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
