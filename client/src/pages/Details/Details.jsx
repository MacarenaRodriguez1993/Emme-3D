import React, { useState, useEffect, useRef } from "react"
import "./Details.css"
import carrito from "../../assets/carrito.png"
import { useDispatch, useSelector } from "react-redux"
import {
    getDetails,
    addToCart,
    getReviews,
    postReviews,
} from "../../redux/actions/actions"
import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { Rating } from "react-simple-star-rating"

export default function Details({ props }) {
    let { _id } = useParams()
    const dispatch = useDispatch()
    const R = useSelector((state) => state.reviews)

    const reviewref = useRef("")
    const [ratin, setRatin] = useState({
        rating: 0,
    })

    const id = "63b75335fc73e6f7739e7eda"
    const handleRating = (rate) => {
        setRatin({ ...ratin, rating: rate })
    }

    /*  const filterReviewsById = () => {
      const reviewsFiltered = R.filter((r) => r.product_id == _id)
      if(reviewsFiltered.length <= 0){
        console.log('no tiene reviews este producto')
      }
      console.log('esta son las filtradas',reviewsFiltered)
    } */
    const filterReviewsById = () => {
        const reviewsFiltered = R.filter((re) => re.product_id === _id)
        if (reviewsFiltered.length <= 0) {
            return (
                <div className="container-opiniones">
                    <span>no tiene reseñas aun...</span>
                    {/*  {reviewsFiltered?.map((r) => {
                    return (
                        <div style={{ marginBottom: 10 }}>
                            <div className="header-opinion">
                                {//<h2>{r.name}</h2> }
                                <Rating
                                    disableFillHover={true}
                                    onPointerEnter={r.rating}
                                    readonly
                                    initialValue={r.rating}
                                    size={18}
                                />
                            </div>
                            <div className="opinion-reviews">
                                <span>{r.review}</span>
                            </div>
                        </div>
                    )
                })} */}
                </div>
            )
        }
        console.log("esta son las filtradas", reviewsFiltered)
        return (
            <div className="container-opiniones">
                {reviewsFiltered?.map((r) => {
                    return (
                        <div style={{ marginBottom: 10 }}>
                            <div className="header-opinion">
                                {/* <h2>{r.name}</h2> */}
                                <Rating
                                    disableFillHover={true}
                                    onPointerEnter={r.rating}
                                    readonly
                                    initialValue={r.rating}
                                    size={18}
                                />
                            </div>
                            <div className="opinion-reviews">
                                <span>{r.review}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const handleReviws = () => {
        dispatch(
            postReviews({
                rating: ratin.rating,
                review: reviewref.current.value,
                user_id: id,
                product_id: _id,
            })
        )
        reviewref.current.value = ""

        setTimeout(function () {
            dispatch(getReviews(_id))
            console.log("Hola Mundo")
        }, 2000)
    }
    console.log("desde consola", {
        rating: ratin.rating,
        review: reviewref.current.value,
        user_id: id,
        product_id: _id,
    })

    /* console.log('este es el console',{
    'rating': reviews.rating,
    'opinion': reviews.opinion,
    'userId': id
  }) */
    //const onPointerEnter = () => console.log('Enter')
    //const onPointerLeave = () => console.log('Leave')
    //const onPointerMove = (value: , index: number) => console.log(value, index)

    useEffect(() => {
        dispatch(getDetails(_id))
        dispatch(getReviews(_id))
    }, [dispatch])

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
            <div className="container-opiniones">
                {R.map((r) => {
                    return (
                        <div style={{ marginBottom: 10 }}>
                            <div className="header-opinion">
                                {/* <h2>{r.name}</h2> */}
                                <Rating
                                    disableFillHover={true}
                                    onPointerEnter={r.rating}
                                    readonly
                                    initialValue={r.rating}
                                    size={18}
                                />
                            </div>
                            <div className="opinion-reviews">
                                <span>{r.review}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            {filterReviewsById()}
            <div className="container-valoracion ">
                <div className="header-valoracion">
                    <h2>Ingresa tu valoracion</h2>
                    <Rating
                        size={22}
                        onClick={handleRating}
                        initialValue={ratin.rating}

                        /* onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave} */
                        // initialValue={reviews.rating}

                        //onPointerMove={onPointerMove}
                    />
                </div>
                <textarea
                    className="input-opinion"
                    placeholder="ingrea una opinion sobre el producto"
                    ref={reviewref}
                    //onChange={(e) => setReviews({...reviews, opinion: e.target.value})}
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
