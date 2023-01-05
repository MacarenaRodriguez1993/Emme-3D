import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getCarouselImgs,
    carouselUpload,
    carouselDelete,
} from "../../redux/actions/actions"
import "./ImageCarousel.css"

const ImageCarousel = () => {
    const dispatch = useDispatch()
    const carouselImages = useSelector((state) => state.carouselImages)
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
        dispatch(carouselDelete(deleteImg.imgId))
    }
    const handleChangeDel = (e) => {
        setDelteImg({
            ...deleteImg,
            imgId: e.target.value,
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
            <form
                className="carousel-upload-img"
                onSubmit={(e) => handleUploadSubmit(e)}
            >
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
                    onClick={() => handleOpenWidget()}
                >
                    Cargar imagen
                </button>
                <label>
                    La resolucion maxima de las imagenes es de 1280px de ancho.
                </label>
                <button type="submit">Subir imagen</button>
            </form>
            <form className="carousel-delete-img" onSubmit={handleDeleteSubmit}>
                <div>
                    <label htmlFor="">Eliminar una imagen</label>
                    <select name="" id="" onChange={(e) => handleChangeDel(e)}>
                        <option selected>Elegi una imagen</option>
                        {carouselImages?.map((i) => (
                            <option value={i._id} name={i.name}>
                                {i.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Eliminar imagen</button>
            </form>
        </div>
    )
}
export default ImageCarousel
