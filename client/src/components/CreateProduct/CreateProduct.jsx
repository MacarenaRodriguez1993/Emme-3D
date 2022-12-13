import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { postProduct, getCategories } from "../../redux/actions/actions"
import "./CreateProduct.css"
import validations from "../../validations/validations-form"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CreateCategory from "../CreateCategory/CreateCategory"

const CreateProduct = () => {
    const dispatch = useDispatch()
    /* ---------- INICIO DE LOS ESTADOS ---------- */
    const [created, setCreated] = useState(false)
    const [error, setError] = useState({})
    const [producto, setProducto] = useState({
        name: "",
        price: 0,
        stock: 0,
        description: "",
        categories_ids: [],
        img: [],
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
            categories_ids: [{ id: e.target.value, name: e.target.name }],
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postProduct(producto))
        setCreated(true)
        setTimeout(() => {
            setCreated(false)
        }, 3000)
        console.log(producto)
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
            <div className="general-box-ctr">
                <p className="create-product-title">Crear un producto</p>
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
                        />
                        {error.price && (
                            <p className="crt-errors">{error.price}</p>
                        )}
                        <select
                            name="categories_ids"
                            id=""
                            className="create-product-input crt-cats"
                            onChange={(e) => handleChange(e)}
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
                        ></textarea>
                        {error.description && (
                            <p className="crt-errors">{error.description}</p>
                        )}
                        {Object.entries(error).length ? (
                            <button
                                type="button"
                                className="create-product-input createpr not-allow"
                            >
                                Crear producto
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
            <Footer />
        </>
    )
}

export default CreateProduct
