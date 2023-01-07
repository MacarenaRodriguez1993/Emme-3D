import React, { useRef } from "react"
import "./contacto.css"
import NavBar from "../../components/NavBar/NavBar"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { emailContacto } from "../../redux/actions/actions"
import tt from "@tomtom-international/web-sdk-maps"
import { useEffect } from "react"
const Contacto = () => {
    const API_KEY = "Ah89ndJiYp454Z1mibMySdzm7zGSCRDQ"
    const EMME3D = [-65.591013, -27.340748]
    const dispatch = useDispatch()
    const refe = useRef()
    useEffect(() => {
        tt.map({
            key: API_KEY,
            container: refe.current,
            center: EMME3D,
            zoom: 15,
        })
    })
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
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(emailContacto(contact))
    }
    const maps = () => {}
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
                    <h4>¿Tenes alguna duda sobre impresión 3D ?</h4>
                    <h4>¿Queres solicitar servicio tecnico ?</h4>
                    <h4>¿Queres cotizar un pedido personalizado ?</h4>
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
                        <div>
                            <button
                                id="button"
                                type="button"
                                name="file"
                                onClick={() => handleOpenWidget()}
                            >
                                cargar archivo jpeg-stl
                            </button>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div ref={refe} className="maps"></div>
            </div>
        </div>
    )
}
export default Contacto
