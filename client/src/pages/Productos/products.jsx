import React, { useEffect } from "react"
import "./products.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Product from "../../components/Product/product"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import SearchFilters from "../../components/SearchFilters/SearchFilters"
import { getProducts, addToCart, cartLogIn } from "../../redux/actions/actions"
import Carousel from "../../components/Carousel/Carousel"
import Loading from "../../components/Loading/Loading"

/* Esta es la pagina de productos  se podra renderizar en cards un listado de productos con paginacion */

const Products = () => {
    /* Dejo listo el dispatch para cuando temgamos la conexion con el back*/
    /*Aqui tomo el estado global de allProducts*/
    let productos = useSelector((state) => state.productsFiltered)
    //para probar la animacion de carga descomentar la linea de abajo y comentar la de arriba
    //let productos
    const error = useSelector((state) => state.error)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userByUid)
   
    
    
 

let load = true;
useEffect(() => {
    if(load &&  user?.cart?.length > 0 ){
   /*  setUserCart({
      ...userCart,
      id: u?.uid,
      cart: ucart
    }) */
    dispatch(cartLogIn(user.cart))
  }
  return () => {
    load = false;
  }
},[])
/* if (user && user?.cart?.length > 0) {
   dispatch(cartLogIn(user.cart))
}  */  

useEffect(() => {
    dispatch(getProducts())
    }, [dispatch])
    /* useEffect(() => {
        if (user && user.cart.length > 0) {
            dispatch(addToCart(user.cart))
        }
    }, [user]) */

    if (!productos) {
        return (
            <>
                <NavBar />
                <Loading />
                <Footer />
            </>
        )
    }
    return (
        <div className="productos">
            <NavBar />
            {/* AQUI TIENEN QUE IR LOS FILTROS Y ORDENAMIENTOS */}
            <div className="barContainer">
                <SearchFilters />
            </div>

            {user?.isAdmin && <h4 className="textTitle">Productos Activos</h4>}
            <div className="cardProduct">
                {productos?.map((a) => {
                    if (a.deleted === false) {
                        return (
                            <Product
                                id={a._id}
                                key={a._id}
                                name={a.name}
                                price={a.price}
                                image={a.img}
                            />
                        )
                    }
                })}
            </div>
            {user?.isAdmin && (
                <>
                    <h4 className="textTitle">Productos inactivos</h4>
                    <div className="cardProduct">
                        {productos?.map((a) => {
                            if (a.deleted === true) {
                                return (
                                    <Product
                                        id={a._id}
                                        key={a._id}
                                        name={a.name}
                                        price={a.price}
                                        image={a.img}
                                    />
                                )
                            }
                        })}
                    </div>
                </>
            )}
            {user?.isAdmin && (
                <Link to="/crear-producto">
                    <button className="addButton product-btn">
                        {" "}
                        Crear Producto{" "}
                    </button>
                </Link>
            )}
            {/* AQUI VA LA PAGINACION */}
            {/* <p>Aqui va la paginacion</p> */}
            <Footer />
        </div>
    )
}

export default Products
