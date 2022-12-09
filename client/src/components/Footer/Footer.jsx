import React from "react"
import "./footer.css"
import {
    AiOutlineWhatsApp,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyrigth">
                <p>Equipo de desarrolo Henry FT-31a-04</p>
                <p>Todos los derechos reservado</p>
            </div>

            <div className="redes">
                <Link to="/">
                    <AiOutlineWhatsApp size="1.5rem" />
                </Link>
                <a href="http://www.facebook.com/emme3d" target="_blank">
                    <AiOutlineFacebook size="1.5rem" />
                </a>
                <a href="http://www.instagram.com/emme.3d" target="_blank">
                    <AiOutlineInstagram size="1.5rem" />
                </a>
                <a href="mailto:emme.impresiones3d@gmail.com">
                    <AiOutlineMail size="1.5rem" />
                </a>
            </div>
        </div>
    )
}

export default Footer
