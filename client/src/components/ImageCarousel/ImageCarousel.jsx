import { useState } from "react"
import "./ImageCarousel.css"

const ImageCarousel = () => {
    const [images, setImages] = useState({
        name: "",
        img: "",
    })

    const handleChange = (e) => {
        setImages({
            [e.target.name]: e.target.value,
        })
    }
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
                    setImages({
                        ...images,
                        img: result.info.url,
                    })
                }
            }
        )
        myWidget.open()
    }
    /* ---------- FIN DE LA FUNCION DE CLOUDINARY ---------- */
    /****************************************************/
    return (
        <div>
            <form className="">
                <label>Carga una nueva imagen en el carrusel</label>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id=""
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="imagen">Imagen</label>
                <button
                    id="upload_widget"
                    type="button"
                    name="img"
                    onChange={(e) => handleChange(e)}
                    onClick={() => handleOpenWidget()}
                >
                    Cargar imagene
                </button>
                <label>
                    La resolucion maxima de las imagenes es de 1280px de ancho.
                </label>
            </form>
            <form action="">
                <div>
                    <label htmlFor="">Eliminar una imagen</label>
                    <select name="" id="">
                        <option selected>Elegi una imagen</option>
                    </select>
                    {images?.map((img) => (
                        <option value={img._id}>{img.name}</option>
                    ))}
                </div>
            </form>
        </div>
    )
}
export default ImageCarousel
