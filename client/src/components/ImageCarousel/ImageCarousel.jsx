import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
    getCarouselImgs,
    carouselUpload,
    carouselDelete,
} from "../../redux/actions/actions"
import "./ImageCarousel.css"

const ImageCarousel = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarouselImgs())
    }, [dispatch])
    /*--------------- ESTADOS ---------------*/
    const [images, setImages] = useState({
        name: "",
        img: "",
    })
    const [deleteImg, setDelteImg] = useState({
        imgId: "",
    })
    /*--------------- HANDLERS ---------------*/
    const handleChange = (e) => {
        setImages({
            ...images,
            name: e.target.value,
        })
    }
    const handleUploadSubmit = (e) => {
        e.preventDefault()
        console.log(images)
        dispatch(carouselUpload(images))
    }
    const handleDeleteSubmit = (e) => {
        e.preventDefault()
        dispatch(carouselDelete(deleteImg))
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
        <div className="form-carrusel-container">
            <form
                className="carousel-upload-img"
                onSubmit={(e) => handleUploadSubmit(e)}
            >
                <label className="carrusel-p carr-title">
                    Carga una nueva imagen en el carrusel
                </label>
                <label htmlFor="nombre" className="carrusel-p carr-labels">
                    Nombre
                </label>

                <input
                    type="text"
                    name="name"
                    id=""
                    onChange={(e) => handleChange(e)}
                    className="create-product-input carr-labels"
                />
                <label htmlFor="imagen" className="carrusel-p carr-labels">
                    Imagen
                </label>
                <button
                    id="upload_widget"
                    type="button"
                    name="img"
                    onClick={() => handleOpenWidget()}
                    className="create-product-input createpr"
                >
                    Cargar imagen
                </button>
                <label className="carrusel-p carr-labels">
                    La resolucion maxima de las imagenes es de 1280px de ancho.
                </label>
                {/* <button type="submit" className="create-product-input createpr">
                    Subir imagen
                </button> */}
            </form>
            <hr />
            <form className="carousel-delete-img" onSubmit={handleDeleteSubmit}>
                <label htmlFor="" className="carrusel-p carr-labels carr-title">
                    Eliminar una imagen
                </label>
                <select name="" id="" className="create-product-input">
                    <option selected>Elegi una imagen</option>
                </select>
                {/* {images?.map((img) => (
                        <option value={img._id} name="imgId">
                            {img.name}
                        </option>
                    ))} */}

                <button type="submit" className="create-product-input createpr">
                    Eliminar imagen
                </button>
            </form>
        </div>
    )
}
export default ImageCarousel
