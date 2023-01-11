import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getCarouselImgs,
    carouselUpload,
    carouselDelete,
} from "../../redux/actions/actions"
import "./ImageCarousel.css"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
const ImageCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        setImages({
            name: "",
            img: "",
        })
        dispatch(carouselUpload(images))
        swal("Perfecto", "Imagen cargada con exito", "success")
        navigate("/home")
    }
    const handleDeleteSubmit = (e) => {
        e.preventDefault()
        setImages({
            name: "",
            img: "",
        })
        swal({
            title: "¿Estas seguro de eliminar esta imagen del carousel?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("imagen eliminada", {
                    icon: "success",
                })
                dispatch(carouselDelete(deleteImg.imgId))
            }
        })
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
                <button type="submit" className="create-product-input createpr">
                    Subir imagen al carrusel
                </button>
            </form>
            <hr />
            <form className="carousel-delete-img" onSubmit={handleDeleteSubmit}>

                <label htmlFor="" className="carrusel-p carr-labels carr-title">
                    Eliminar una imagen
                </label>
                <select className="create-product-input" onChange={(e) => handleChangeDel(e)}>
                    <option selected>Elegi una imagen</option>
                {carouselImages?.map((i) => (
                        <option key={i._id} value={i._id} name="i.name">
                            {i.name}
                        </option>
                    ))}

                </select>
                
                <button type="submit" className="create-product-input createpr">
                    Eliminar imagen
                </button>

            </form>
        </div>
    )
}
export default ImageCarousel
