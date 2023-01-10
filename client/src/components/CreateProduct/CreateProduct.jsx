import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import {
    postProduct,
    getCategories,
    getProducts,
} from "../../redux/actions/actions"
import "./CreateProduct.css"
import validations from "../../validations/validations-form"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CreateCategory from "../CreateCategory/CreateCategory"
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import { useNavigate, useParams } from "react-router-dom"
import { updateProducto } from "../../redux/actions/actions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const CreateProduct = () => {
    const dispatch = useDispatch()
    const update_ID = useParams()
    const navigate = useNavigate()
    const allProduct = useSelector((state) => state.productsFiltered)
    const err = useSelector((state) => state.error)
    const updateProduct = allProduct.find((a) => a._id === update_ID.id)

    /* ---------- INICIO DE LOS ESTADOS ---------- */
    const [created, setCreated] = useState(false)
    const [update, setUpdate] = useState(false)
    const [error, setError] = useState({})
    const [producto, setProducto] = useState({
        name: updateProduct ? updateProduct.name : "",
        price: updateProduct ? updateProduct.price : 0,
        stock: updateProduct ? updateProduct.stock : 0,
        description: updateProduct ? updateProduct.description : "",
        categories_ids: updateProduct ? updateProduct.categories_ids : [],
        img: updateProduct ? updateProduct.img : [],
    })
    useEffect(() => {
        dispatch(getCategories())
        setError(validations(producto))
    }, [dispatch, producto])
    let cat = useSelector((state) => state.categories)
    /* ---------- FIN DE LOS ESTADOS ---------- */
    /****************************************************/
    /* ---------- INICIO DE LOS HANDLERS ---------- */

    const handleChange = (e) => {
        setError(validations(producto))
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        })
    }
    const handleChangeCategory = (e) => {
        setError(validations(producto))
        setProducto({
            ...producto,
            categories_ids: [e.target.value],
        })
    }
    const notify = () => {
        if (updateProduct) {
            toast("Producto editado con exito")
        } else {
            toast("Nuevo producto creado con exito")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (updateProduct) {
            dispatch(updateProducto(update_ID.id, producto))
            notify()
            setUpdate(true)
            setTimeout(() => {
                setUpdate(false)
                navigate("/products")
            }, 3000)
        } else {
            console.log("estoy en crear")
            dispatch(postProduct(producto))
            notify()
            setCreated(true)
            setTimeout(() => {
                setCreated(false)
                navigate("/products")
            }, 3000)
            console.log(producto)
        }
    }
    const handleDelete = (e) => {
        //producto.img.pop(e.target.value)
        //console.log(producto.img.pop(e.target.value))
        /* setProducto({
            ...producto,
            img: producto.img.pop(e.target.value),
        }) */
    }
    /* ---------- FIN DE LOS HANDLERS ---------- */
    /****************************************************/
    /* ---------- INICIO DE LA FUNCION DE CLOUDINARY ---------- */
    const handleOpenWidget = async () => {
        var myWidget = await window.cloudinary.createUploadWidget(
            {
                cloudName: "emme3d",
                uploadPreset: "igsag6pi",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info)
                    setProducto({
                        ...producto,
                        img: [...producto.img, result.info.url],
                    })
                }
            }
        )
        myWidget.open()
    }
    /* ---------- FIN DE LA FUNCION DE CLOUDINARY ---------- */
    /****************************************************/
    return (
        <>
            <NavBar />
            <ToastContainer position="top-right" autoClose={4000} />
            <div className="general-box-ctr">
                {updateProduct ? (
                    <p className="create-product-title">Editar un producto</p>
                ) : (
                    <p className="create-product-title">Crear un producto</p>
                )}

                <div className="create-product-container">
                    <form
                        action=""
                        onSubmit={(e) => handleSubmit(e)}
                        className="form-create-product-container"
                    >
                        <input
                            className="create-product-input"
                            type="text"
                            name="name"
                            id=""
                            placeholder="Nombre del producto"
                            onChange={(e) => handleChange(e)}
                            value={producto.name}
                        />
                        {error.name && (
                            <p className="crt-errors">{error.name}</p>
                        )}
                        <input
                            className="create-product-input"
                            type="number"
                            name="price"
                            id=""
                            placeholder="Precio"
                            onChange={(e) => handleChange(e)}
                            value={producto.price}
                        />
                        {error.price && (
                            <p className="crt-errors">{error.price}</p>
                        )}
                        <select
                            name="categories_ids"
                            id=""
                            className="create-product-input crt-cats"
                            onChange={(e) => handleChange(e)}
                            value={producto.categories_ids}
                        >
                            <option selected>Categorias</option>
                            {cat?.map((e) => (
                                <option value={e._id} name={e.name}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                        {error.categories_ids && (
                            <p className="crt-errors">{error.categories_ids}</p>
                        )}
                        <input
                            className="create-product-input"
                            type="number"
                            name="stock"
                            id=""
                            placeholder="Stock"
                            onChange={(e) => handleChange(e)}
                            value={producto.stock}
                        />
                        {error.stock && (
                            <p className="crt-errors">{error.stock}</p>
                        )}
                        <textarea
                            className="create-product-input"
                            name="description"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Descripcion del producto"
                            onChange={(e) => handleChange(e)}
                            value={producto.description}
                        ></textarea>
                        {error.description && (
                            <p className="crt-errors">{error.description}</p>
                        )}
                        {updateProduct ? (
                            <button
                                type="submit"
                                className="create-product-input createpr"
                            >
                                Editar Producto
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="create-product-input createpr"
                            >
                                Crear producto
                            </button>
                        )}
                        {created && (
                            <p className="create-product-success">
                                Producto creado con exito!
                            </p>
                        )}
                        {update && (
                            <p className="create-product-success">
                                Producto actualziado con exito!
                            </p>
                        )}
                    </form>
                    <div className="add-img-box">
                        <div className="crt-img-box">
                            {producto.img?.map((img) => (
                                <div>
                                    <img src={img} className="loaded-img" />
                                    <p
                                        className="img-delete"
                                        onClick={(e) => handleDelete(e)}
                                    >
                                        X
                                    </p>
                                    {console.log(
                                        "imagenes cargadas ->",
                                        img.url
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="imgs-buttons">
                            <button
                                id="upload_widget"
                                type="button"
                                name="img"
                                onClick={() => handleOpenWidget()}
                            >
                                Cargar imagenes
                            </button>
                            {error.img && (
                                <p className="crt-errors-img">{error.img}</p>
                            )}
                            {producto.img && producto.img.length !== 0 && (
                                <p className="img-success">
                                    {producto.img.length} imagenes cargadas!
                                </p>
                            )}
                        </div>
                    </div>
                    <CreateCategory />
                </div>
            </div>
            <ImageCarousel />

            <Footer />
        </>
    )
}

export default CreateProduct
