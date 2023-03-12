import React, { useRef } from "react"
import "./contacto.css"
import NavBar from "../../components/NavBar/NavBar"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { emailContacto } from "../../redux/actions/actions"
//import GoogleMap from "google-map-react"
import GoogleMapReact from "google-map-react"
import { FaMapMarkerAlt } from "react-icons/fa"
import {
    AiOutlineGlobal,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineMail,
    AiOutlineWhatsApp,
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
} from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Contacto = () => {
    console.log(import.meta.env.VITE_KEY_MAP)
    const EMME3D = [-27.340748, -65.591013]
    const dispatch = useDispatch()
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: EMME3D[0], lng: EMME3D[1] },
            map,
            title: "EMME 3D",
        })
        return marker
    }
    const [contact, setContact] = useState({
        name: "",
        surname: "",
        email: "",
        reason: "",
        phone: "",
        link: "",
        description: "",
        file: "",
    })
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
    }
    const deleteFile = () => {
        setContact({
            ...contact,
            file: "",
        })
    }
    const handleOpenWidget = async () => {
        var myWidget = await window.cloudinary.createUploadWidget(
            {
                cloudName: "emme3d",
                uploadPreset: "igsag6pi",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info)
                    setContact({
                        ...contact,
                        file: result.info.url,
                    })
                }
            }
        )
        myWidget.open()
    }
    const notify = () => {
        toast(
            "Formulario enviado correctamente, en breve recibira una respuesta"
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(emailContacto(contact))
        notify()
        setContact({
            ...contact,
            name: "",
            surname: "",
            email: "",
            reason: "",
            phone: "",
            link: "",
            description: "",
            file: "",
        })
    }

    return (
        <div className="contacto">
            <NavBar />
            <h1
                style={{
                    textAlign: "center",
                    padding: "0.2em",
                    fontSize: "xx-large",
                }}
            >
                Contactanos
            </h1>
            <div className="contenido">
                <div className="form">
                    <ToastContainer
                        theme="dark"
                        position="top-right"
                        autoClose={4000}
                    />
                    <h3>¿Tenes alguna duda sobre impresión 3D ?</h3>
                    <h3>¿Queres solicitar servicio tecnico ?</h3>
                    <h3>¿Queres cotizar un pedido personalizado ?</h3>
                    <form id="formContacto" onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            onChange={(e) => handleChange(e)}
                            value={contact.name}
                            required
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="Apellido"
                            onChange={(e) => handleChange(e)}
                            value={contact.surname}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                            value={contact.email}
                            required
                        />
                        <select
                            name="reason"
                            value={contact.reason}
                            onChange={(e) => handleChange(e)}
                            required
                        >
                            <option selected>Elegir Motivo</option>
                            <option value="Consulta" name="Consulta">
                                Consulta
                            </option>
                            <option
                                value="Servicio Tecnico"
                                name="Servicio Tecnico"
                            >
                                Servicio Técnico
                            </option>
                            <option
                                value="Cotizar Personalizacion"
                                name="Cotizar Personalizacion"
                            >
                                Cotizar personalizacion
                            </option>
                        </select>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Telefono"
                            onChange={(e) => handleChange(e)}
                            value={contact.phone}
                            required
                        />
                        <input
                            type="text"
                            name="link"
                            placeholder="Link del diseño"
                            onChange={(e) => handleChange(e)}
                        />
                        <textarea
                            name="description"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Descripcion"
                            onChange={(e) => handleChange(e)}
                            value={contact.description}
                        ></textarea>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <div>
                                {contact.file && (
                                    <>
                                        <AiOutlineCheckCircle
                                            size="2em"
                                            color="green"
                                        />
                                        <AiOutlineCloseCircle
                                            size="2em"
                                            color="red"
                                            onClick={deleteFile}
                                        />
                                        <h2>Archivo Cargado</h2>
                                    </>
                                )}
                            </div>
                            <button
                                id="button"
                                type="button"
                                name="file"
                                onClick={() => handleOpenWidget()}
                            >
                                cargar archivo jpeg-stl
                            </button>
                        </div>
                        <button id="enviarContact" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="maps">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            language: "en",
                        }}
                        defaultCenter={{ lat: EMME3D[0], lng: EMME3D[1] }}
                        defaultZoom={15}
                        onGoogleApiLoaded={({ map, maps }) =>
                            renderMarkers(map, maps)
                        }
                    ></GoogleMapReact>
                    <div
                        style={{
                            display: "flex",
                            margin: " 1.5em auto",
                        }}
                    >
                        <FaMapMarkerAlt size="1.2em" />
                        <p style={{ marginLeft: "0.5em" }}>
                            Ubicacion : 25 de mayo 474 dpto 2B - Concepcion -
                            Tucuman
                        </p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: " 5em 4em",
                }}
            >
                <div>
                    <h2>WEBS PARA ENCONTRAR DISEÑOS</h2>
                    <div>
                        <AiOutlineGlobal size="1.3em" />
                        <a
                            href="https://cults3d.com/es/usuarios/jmaximilianovallejo"
                            target="_blank"
                            style={{ color: "#ffe3e3", fontSize: "larger" }}
                        >
                            Cults
                        </a>
                    </div>
                    <div>
                        <AiOutlineGlobal size="1.3em" />
                        <a
                            href="https://www.thingiverse.com/"
                            target="_blank"
                            style={{ color: "#ffe3e3", fontSize: "larger" }}
                        >
                            Thingiverse
                        </a>
                    </div>
                </div>
                <div>
                    <h2>REDES</h2>
                    <div>
                        <AiOutlineInstagram size="1.5rem" />
                        <a
                            href="http://www.instagram.com/emme.3d"
                            target="_blank"
                            style={{ color: "#ffe3e3", fontSize: "larger" }}
                        >
                            Instagram
                        </a>
                    </div>
                    <div>
                        <AiOutlineFacebook size="1.5rem" />
                        <a
                            href="ttp://www.facebook.com/emme3d"
                            target="_blank"
                            style={{ color: "#ffe3e3", fontSize: "larger" }}
                        >
                            Facebook
                        </a>
                    </div>
                    <div style={{ display: "flex" }}>
                        <AiOutlineMail size="1.5em" />
                        <h4>emme.impresiones3d@gmail.com</h4>
                    </div>
                    <div style={{ display: "flex" }}>
                        <AiOutlineWhatsApp size="1.5em" />
                        <h4>3865323371</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacto
