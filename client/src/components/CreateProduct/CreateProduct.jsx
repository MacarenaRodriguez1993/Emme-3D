import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { postProduct } from "../../redux/actions/actions"

const CreateProduct = () => {
    /* ---------- INICIO DE LOS ESTADOS ---------- */
    const [images, setImages] = useState([])
    const [producto, setProducto] = useState({
        name: "",
        price: 0,
        stock: 0,
        description: "",
        categories_ids: [],
        img: [images],
    })
    //console.log(producto)
    const [imageToRemove, setImageToRemove] = useState(null)
    /* ---------- FIN DE LOS ESTADOS ---------- */
    /****************************************************/
    /* ---------- INICIO ---------- */

    /* ---------- FIN DE LOS ESTADOS ---------- */
    /****************************************************/
    /* ---------- INICIO DE LOS HANDLERS ---------- */
    const handleChange = (e) => {
        setProducto({
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchEvent(postProduct(producto))
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
                    setImages((prev) => [
                        ...prev,
                        {
                            url: result.info.url,
                            public_id: result.info.public_id,
                        },
                    ])
                }
            }
        )
        myWidget.open()
    }
    /* ---------- FIN DE LA FUNCION DE CLOUDINARY ---------- */
    /****************************************************/
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Nombre del producto"
                />
                <input type="text" name="price" id="" placeholder="Precio" />
                <select name="categories" id="">
                    <option value="categorias" selected>
                        Categorias
                    </option>
                </select>
                <input type="text" name="stock" id="" placeholder="Stock" />
                <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Descripcion del producto"
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
