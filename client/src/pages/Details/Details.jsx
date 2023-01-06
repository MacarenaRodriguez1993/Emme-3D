import React, { useState, useEffect } from "react"
import "./Details.css"
import carrito from "../../assets/carrito.png"
import { useDispatch, useSelector } from "react-redux"
import { getDetails, addToCart, getReviews, postReviews } from "../../redux/actions/actions"
import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import {Rating} from 'react-simple-star-rating'

export default function Details({ props }) {
    let { _id } = useParams()
    const dispatch = useDispatch()
    const [reviews, setReviews] = useState({
        rating: 0,
        opinion: ''
    })
    const id = 'dasfsf6sf46df46sdg'
  const  handleRating=(rate)=>{
    setReviews({...reviews, rating: rate})
  }

  const handleReviws = () => {
    dispatch(postReviews({
        'rating': reviews.rating,
        'reviws': reviews.opinion,
        'user_Id': id,
        'product_id': 'dasfhafkfaf5af'
      }))
    d//ispatch(getReviews())
  }
  
  console.log('este es el console',{
    'rating': reviews.rating,
    'opinion': reviews.opinion,
    'userId': id
  })
  //const onPointerEnter = () => console.log('Enter')
  //const onPointerLeave = () => console.log('Leave')
  //const onPointerMove = (value: , index: number) => console.log(value, index)


    useEffect(() => {
        dispatch(getDetails(_id))
    }, [])

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
                                    {p?.map((c) => c.category)}
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
                {p.reviews_ids?.map((r) => {
                    return (
                        <div style={{ marginBottom: 15 }}>
                            <div className="header-opinion">
                                <h2>{r.name}</h2>
                                <StarRating value={r.rating} />
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
                            <Rating
                onClick={handleRating}
                /* onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave} */
                initialValue={reviews.rating}

                //onPointerMove={onPointerMove}
                
                  />
                </div>
                <textarea
                    className="input-opinion"
                    placeholder="ingrea una opinion sobre el producto"
                    onChange={(e) => setReviews({...reviews, opinion: e.target.value})}
                />
                <span>el mensaje tiene que ser mayor a 5 plabras</span>
                <div className="btn-valoracion">
                    <button onClick={() => handleReviws()}>Enviar</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
