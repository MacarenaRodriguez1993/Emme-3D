import "./UserPanel.css"

const UserPanel = ({ user, logout }) => {
    return (
        <div className="user-panel-container">
            <div className="user-info">
                <img
                    src={user?.photoURL}
                    alt={user?.photoURL}
                    className="user-img"
                />
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
            <p className="user-data-fields">Dirección: </p>
            <p className="user-data-fields">Ciudad: </p>
            <p className="user-data-fields">Provincia: </p>
            <p className="user-data-fields">Código postal: </p>
            <button className="user-data-fields user-logout">
                Editar mi información
            </button>
            <p className="user-data">Tus pedidos</p>
        </div>
    )
}

export default UserPanel
