import React, { useState, useEffect } from "react"
import "./Details.css"
import carrito from "../../assets/carrito.png"
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from "../../redux/actions/actions"
import ReactStarsRating from "react-awesome-stars-rating"

export default function Details({ props }) {
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    const id = 5
    useEffect(() => {
        dispatch(getDetails(id))
    }, [id])

    const p = useSelector((state) => state.detail)
    console.log(rating)

    return (
        <div className="container-details">
            <div className="container-header">
                <div className="conatainer-header-left">
                    <img className="img-details" src={p.img} />
                </div>
                <div className="conatainer-header-right">
                    <div className="title-detail">
                        <h2>{p.name}</h2>
                    </div>
                    <div className="container-info-detail">
                        <div className="info-detail">
                            <text>
                                Precio
                                <span className="valor-info">${p.price}</span>
                            </text>
                        </div>
                        <div className="info-detail">
                            <span>
                                Categoria
                                <span className="valor-info">
                                    {p.categories}
                                </span>
                            </span>
                        </div>
                        <div className="info-detail">
                            <text>
                                Stock
                                <span className="valor-info">
                                    {" "}
                                    {p.stock} unidades
                                </span>
                            </text>
                        </div>
                    </div>
                    <div className="container-btn-detail">
                        <button className="btn-detail">
                            Seleccionar color
                        </button>
                        <button className="btn-detail">
                            Ver medios de pagos
                        </button>
                        <button className="btn-agregar-carro">
                            Agregar al carrito{" "}
                            <img
                                style={{ width: 20, height: 20 }}
                                src={carrito}
                            />
                        </button>
                        <button className="btn-compra">Comprar ahora</button>
                    </div>
                </div>
            </div>
            <div className="container-descripcion">
                <h2>Descripcion:</h2>
                <p>{p.description}</p>
            </div>
            {/* <div className="container-opiniones">
                {p.reviews.map((r) => {
                    return (
                        <div style={{ marginBottom: 15 }}>
                            <div className="header-opinion">
                                <h2>{r.name}</h2>
                                <ReactStarsRating
                                    isEdit={false}
                                    value={r.rating}
                                />
                            </div>
                            <div className="opinion-reviews">
                                <span>{r.reviews}</span>
                            </div>
                        </div>
                    )
                })}
            </div> */}
            <div className="container-valoracion ">
                <div className="header-valoracion">
                    <h2>Ingresa tu valoracion</h2>
                    <ReactStarsRating value={rating} onChange={setRating} />
                </div>
                <textarea
                    className="input-opinion"
                    placeholder="ingrea una opinion sobre el producto"
                    onChange={(e) => setReview(e.target.value)}
                />
                <div className="btn-valoracion">
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}
