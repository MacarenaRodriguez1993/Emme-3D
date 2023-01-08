import "./NotFound.css"
import notFound from "../../assets/not-found.gif"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img src={notFound} alt={notFound} className="notfound-img" />
            <p className="notfound-d">Parece que esta página no existe.</p>
            <Link to="/products" className="notfound-b">
                Volver al sitio
            </Link>
        </div>
    )
}

export default NotFound
