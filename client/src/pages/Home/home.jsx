import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Carousel from "../../components/Carousel/Carousel"
import { AiOutlineTool } from "react-icons/ai"
import { BsShop, BsFillFilePlusFill, BsDashSquareFill } from "react-icons/bs"
import { BiDesktop } from "react-icons/bi"

import "./home.css"
import { Link } from "react-router-dom"
import { useState } from "react"
const Home = () => {
    const pyr = [
        {
            pregunta: "¿Qué es la impresión 3D?",
            respuesta:
                "La impresión 3D es un grupo de tecnologías de fabricación por adición capaz de crear un objeto tridimensional mediante la superposición de capas sucesivas de un determinado material. Un proceso por el que se crean objetos físicos a través de la colocación de un material en capas a partir de un modelo digital. Por lo tanto, se trata de un proceso en el que se crear un objeto físico en tres dimensiones a través de un objeto o modelos digital mediante una impresora 3D que puede usar diferentes tecnologías y materiales para ir superponiendo capas hasta crear una réplica perfecta.",
        },
        {
            pregunta: "¿Que tipo de filamentos utilizán?",
            respuesta:
                "En Emme3D utilizamos filamento PLA(ácido poliláctico), es un termoplástico fabricado a base de recursos renovables como el almidón de maíz, raíces de tapioca o caña de azúcar. Teniendo en cuentas estas caracteristica el material es NO TOXICO y biodegradable",
        },
        {
            pregunta: "¿Los precios son finales?",
            respuesta:
                "Si, los precios publicados en cada producto son precios finales.",
        },
        {
            pregunta:
                "¿Pueden hacer una impresión si envio un link de un archivo?",
            respuesta:
                "Si, puede ingresar a la seccion de Contactas y enviarnos el enlace del modelo y podemos cotizarlo",
        },
        {
            pregunta:
                "Vi en una foto algo que quiero pero no esta en productos. ¿Pueden inprimirlo?",
            respuesta:
                "Te invitamos a que vayas a la seccion de CONTACTOS y nos compartas la imagen para poder confirmarte si se puede o no imprimir.",
        },
    ]
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="home">
            <NavBar />
            <Carousel />
            <h1 style={{ textAlign: "center", fontSize: "xxx-large" }}>
                Nuestros Servicios
            </h1>
            <div className="divContain">
                <div className="cardHome">
                    <BsShop size="3em" />
                    <h2 id="titleCard">Impresiones 3D</h2>
                    <p id="contentCard">
                        Aqui podes encontrar los productos ams originales para
                        regalar o regalarte. <br />
                        Explora nuestra tienda y encontrá lo que mas te guste.
                    </p>
                    <Link to={"/products"}>
                        <button id="buttonHome">Ver Tienda</button>
                    </Link>
                </div>
                <div className="cardHome">
                    <BiDesktop size="3em" />
                    <h2 id="titleCard">Diseño - modelado 3D</h2>
                    <p id="contentCard">
                        Tenes una idea pero no sabes diseñar - modelar en 3D?
                        <br />
                        Envíanos el boseto o imagen de lo que quieras hacer y te
                        ayudamos a realizarla.
                    </p>
                    <Link to={"/contacto"}>
                        <button id="buttonHome">Contactanos</button>
                    </Link>
                </div>
                <div className="cardHome">
                    <AiOutlineTool size="3em" />
                    <h2 id="titleCard">Servicio Técnico</h2>
                    <p id="contentCard">
                        Tenes problemas con tu impresora 3D ? <br />
                        Podes traerla a nuestro taller y te hacemos un
                        presupuesto.
                    </p>
                    <Link to={"/contacto"}>
                        <button id="buttonHome">Contactanos</button>
                    </Link>
                </div>
            </div>
            <h1 style={{ textAlign: "center", fontSize: "xxx-large" }}>
                Preguntas Frecuentes
            </h1>
            <div className="preguntas">
                {pyr.map((item, i) => (
                    <div className="item">
                        <div className="pregunta" onClick={() => toggle(i)}>
                            <h3>{item.pregunta}</h3>
                            <span>
                                {selected === i ? (
                                    <BsDashSquareFill size="1.5em" />
                                ) : (
                                    <BsFillFilePlusFill size="1.5em" />
                                )}
                            </span>
                        </div>
                        <div className={selected === i ? "show" : "respuesta"}>
                            <p>{item.respuesta}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home
