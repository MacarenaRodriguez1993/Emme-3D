import React, { useState, useEffect } from "react"
import "./Details.css"
import carrito from "../../assets/carrito.png"
import { useDispatch, useSelector } from "react-redux"
import { getDetails, addToCart } from "../../redux/actions/actions"
import ReactStarsRating from "react-awesome-stars-rating"
import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

export default function Details({ props }) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    useEffect(() => {
        dispatch(getDetails(id))
    }, [id])

    const productDetail = useSelector((state) => state.detail)
    let p = productDetail?.data
    console.log(p)

    const handleShopCar = (e) => {
        e.preventDefault()
        dispatch(addToCart(p))
    }
    return (
        <div className="container-details">
            <NavBar />
            <div className="container-header">
                <div className="conatainer-header-left">
                    <img
                        className="img-details"
                        src={p?.map((a) => a.img)}
                        alt={p?.map((a) => a.img)}
                    />
                </div>
                <div className="conatainer-header-right">
                    <div className="title-detail">
                        <h2>{p?.map((n) => n.name)}</h2>
                    </div>
                    <div className="container-info-detail">
                        <div className="info-detail buttons-details">
                            <div>
                                Precio
                                <span className="valor-info">
                                    ${p?.map((p) => p.price)}
                                </span>
                            </div>
                        </div>
                        <div className="info-detail buttons-details">
                            <span>
                                Categoria
                                <span className="valor-info">
                                    {p?.map((c) => c.categories_ids)}
                                </span>
                            </span>
                        </div>
                        <div className="info-detail buttons-details">
                            <div>
                                Stock
                                <span className="valor-info">
                                    {" "}
                                    {p?.map((s) => s.stock)} unidades
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="container-btn-detail">
                        <button className="btn-detail buttons-details">
                            Seleccionar color
                        </button>
                        <button className="btn-detail buttons-details">
                            Ver medios de pagos
                        </button>
                        <button
                            className="btn-agregar-carro buttons-details"
                            onClick={handleShopCar}
                        >
                            Agregar al carrito{" "}
                            <img
                                style={{ width: 20, height: 20 }}
                                src={carrito}
                            />
                        </button>
                        <button className="btn-compra buttons-details">
                            Comprar ahora
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-descripcion">
                <h2>Descripcion:</h2>
                <p>{p?.map((d) => d.description)}</p>
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
                    {/* <ReactStarsRating value={rating} onChange={setRating} /> */}
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
            <Footer />
        </div>
    )
}
