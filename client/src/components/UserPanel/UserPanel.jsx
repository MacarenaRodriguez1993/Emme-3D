import "./UserPanel.css"
import { AiTwotoneEdit } from "react-icons/ai"

const UserPanel = ({ user, logout }) => {
    return (
        <div className="user-panel-container">
            <div className="user-info">
                <div className="user-img-cont">
                    <img
                        src={user?.photoURL}
                        alt={user?.photoURL}
                        className="user-img"
                    />
                    <AiTwotoneEdit className="img-edit-icon" />
                </div>

                <div className="user-name-email">
                    <p className="welcome-user">
                        ¡Bienvenido {user?.displayName}!
                    </p>
                    <p>{user?.email}</p>
                </div>
                <button onClick={() => logout()} className="user-logout">
                    Cerrar sesión
                </button>
            </div>
            <p className="user-data">Tus datos</p>
            <p className="user-data-fields">Nombre: </p>
            <p className="user-data-fields">Apellido: </p>
            <p className="user-data-fields">Teléfono: </p>
            <p className="user-data-fields">Dirección: </p>
            <p className="user-data-fields">Ciudad: </p>
            <p className="user-data-fields">Provincia: </p>
            <p className="user-data-fields">Código postal: </p>
            <button className="user-data-fields user-logout user-edit">
                Editar mi información
            </button>
            <p className="user-data">Tus pedidos</p>
        </div>
    )
}

export default UserPanel
