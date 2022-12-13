import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { postProduct, getCategories } from "../../redux/actions/actions"
import "./CreateProduct.css"

const CreateProduct = () => {
    const dispatch = useDispatch()
    /* ---------- INICIO DE LOS ESTADOS ---------- */
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
    }, [producto.img])
    let cat = useSelector((state) => state.categories)
    /* ---------- FIN DE LOS ESTADOS ---------- */
    /****************************************************/
    /* ---------- INICIO DE LOS HANDLERS ---------- */

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(producto)
        dispatch(postProduct(producto))
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
                    <input
                        className="create-product-input"
                        type="text"
                        name="price"
                        id=""
                        placeholder="Precio"
                        onChange={(e) => handleChange(e)}
                    />
                    <select
                        name="categories_ids"
                        id=""
                        className="create-product-input crt-cats"
                    >
                        <option value="categories_ids" selected>
                            Categorias
                        </option>
                        {cat?.map((e) => (
                            <option value={e._id}>{e.name}</option>
                        ))}
                    </select>
                    <input
                        className="create-product-input"
                        type="text"
                        name="stock"
                        id=""
                        placeholder="Stock"
                        onChange={(e) => handleChange(e)}
                    />
                    <textarea
                        className="create-product-input"
                        name="description"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Descripcion del producto"
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                    <button
                        type="submit"
                        className="create-product-input createpr"
                    >
                        Crear producto
                    </button>
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
                                {console.log("imagenes cargadas ->", img.url)}
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
                        {producto.img && producto.img.length !== 0 && (
                            <p className="img-success">
                                {producto.img.length} imagenes cargadas!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct
