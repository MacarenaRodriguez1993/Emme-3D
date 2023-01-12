import React from "react"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import "./about.css"
import image from "../../assets/person.jpg"
import imageCris from "../../assets/Cristian.jpg"
import imageMarcos from "../../assets/Marcos.jpg"
import imagePau from "../../assets/Pau.jpg"
import imageMaca from "../../assets/Mca.jpg"
import imageNico from "../../assets/Nico.jpg"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
const About = () => {
    return (
        <div className="about">
            <NavBar />
            <h1 className="titleAbout">¿Que es Emme3D?</h1>
            <p className="pAbout">
                Emme 3D es un emprendimiento dedicado al diseño y venta de
                productos fabricados en impresoras 3D que nacio a fines del 2020
                🦠 como respuesta a las ganas de aprovechar parte de nuestro
                conocimiento técnico en el campo de la tecnología tratanto de
                mejorar la cantidad y calidad de los productos dia a dia.
            </p>
            <h2 className="titleAbout">¿Que productos / servicios ofrecen ?</h2>
            <p className="pAbout">
                🟣Imagina que tienes una idea o imaginas un posible producto,
                nosotros podemos crearlo. Nos cuentas lo que quieres con el
                mayor detalle posible, nosotros lo diseñamos utilizando (Fusion
                - Blender - TinkerCad - SolidWorks). Una vez diseñado contamos
                con la posibilidad de poder imprimir tu producto tal cual lo
                imaginaste.
                <br />
                🟣Imagina que tienes una impresora 3D y comienza a fallar o
                simplemente necesias hacer un service por cantidad de hora de
                uso. Puedes llevarla a nuestro taller y nosotros la dejamos a
                punto para que sigas imprimiendo.
                <br />
                🟣Imagina que necesitas filamentos 3D para poder seguir
                imprimiendo. Nosotros ofrecemos una amplia gama de filamentos en
                colores.
            </p>
            <h1 className="titleAbout">Equipo de desarrollo de la App</h1>
            <p className="pAbout">
                Este equipo trabajo por 4 semanas con mucho esfuerzo y
                dedicacion para dejar la app funcionando de la mejor manera.
            </p>
            <h2 className="titleAbout">Ingregrantes</h2>
            <div className="containCardAbout">
                <div className="cardAbout">
                    <img className="imageAbout" src={imagePau} alt="" />
                    <h3>Pau Marin</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/Pau-Marin"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pau-marin/ "
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
                <div className="cardAbout">
                    <img className="imageAbout" src={imageCris} alt="" />
                    <h3>Cristian Lo Giudice</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/cflg"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cristian-lg/"
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
                <div className="cardAbout">
                    <img className="imageAbout" src={imageNico} alt="" />
                    <h3>Nicolas Lo Giudice</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/oversightdolores"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolas-lo-giudice-54a4a0229"
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
                <div className="cardAbout">
                    <img className="imageAbout" src={imageMarcos} alt="" />
                    <h3>Marcos Cuadrado</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/oversightdolores"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cristian-lg/"
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
                <div className="cardAbout">
                    <img className="imageAbout" src={image} alt="" />
                    <h3>Alexis Vega</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/121218952415"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/macarenabelenrodriguez/"
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
                <div className="cardAbout">
                    <img className="imageAbout" src={imageMaca} alt="" />
                    <h3>Macarena Rodriguez</h3>
                    <div>
                        <a
                            className="linkAbout"
                            href="https://github.com/MacarenaRodriguez1993"
                            target="_blank"
                        >
                            <AiOutlineGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/macarenabelenrodriguez/"
                            target="_blank"
                            className="linkAbout"
                        >
                            <AiOutlineLinkedin size="2em" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About
