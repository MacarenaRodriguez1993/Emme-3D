import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { postProduct } from "../../redux/actions/actions"
import "./CreateProduct.css"

const CreateProduct = () => {
    const dispatch = useDispatch()
    /* ---------- INICIO DE LOS ESTADOS ---------- */
    const [images, setImages] = useState([])
    const [producto, setProducto] = useState({
        name: "",
        price: 0,
        stock: 0,
        description: "",
        categories_ids: [],
        img: [],
    })
    //console.log(producto)
    const [imageToRemove, setImageToRemove] = useState(null)
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
    /* ---------- FIN DE LOS HANDLERS ---------- */
    /****************************************************/
    /* ---------- INICIO DE LA FUNCION DE CLOUDINARY ---------- */
    const handleOpenWidget = () => {
        //var myWidget = window.cloudinary.createUploadWidget(
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "emme3d",
                uploadPreset: "igsag6pi",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info)
                    /* setImages((prev) => [
                        ...prev,
                        {
                            url: result.info.url,
                            public_id: result.info.public_id,
                        },
                    ]) */
                    setProducto({
                        ...producto,
                        img: [...result.info.url],
                    })
                }
            }
        )
        myWidget.open()
    }
    /* ---------- FIN DE LA FUNCION DE CLOUDINARY ---------- */
    /****************************************************/
    return (
        <div className="create-product-container">
            <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="form-create-product-container"
            >
                <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Nombre del producto"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="price"
                    id=""
                    placeholder="Precio"
                    onChange={(e) => handleChange(e)}
                />
                <select name="categories" id="">
                    <option value="categorias" selected>
                        Categorias
                    </option>
                </select>
                <input
                    type="text"
                    name="stock"
                    id=""
                    placeholder="Stock"
                    onChange={(e) => handleChange(e)}
                />
                <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Descripcion del producto"
                    onChange={(e) => handleChange(e)}
                ></textarea>
                <button type="submit">Crear producto</button>
            </form>
            <div>
                <p>Agregar imagen</p>
                <button
                    id="upload_widget"
                    type="button"
                    name="img"
                    onClick={() => handleOpenWidget()}
                >
                    Cargar imagenes
                </button>
                {images && images.length !== 0 && <p>Imagen cargada!</p>}
                <img id="uploadedimage" src=""></img>
            </div>
            <div>
                <p>Imagenes cargadas</p>
                {images?.map((img) => (
                    <div>
                        <img src={img.url} alt={img.public_id} />
                        {console.log(img.url)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateProduct
