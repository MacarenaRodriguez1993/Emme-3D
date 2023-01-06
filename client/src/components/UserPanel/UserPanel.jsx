import "./UserPanel.css"
import { AiTwotoneEdit } from "react-icons/ai"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../../redux/actions/actions"

const UserPanel = ({ user, logout }) => {
    let usId = user.uid
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        //id: "",
        name: "",
        surname: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        cp: "",
    })

    /* useEffect(() => {
        if (user) {
            setUserData({
                id: user.uid,
            })
        }
    }, [user]) */
    const editInfo = () => {
        document.getElementById("user-data-container").style.display = "none"
        document.getElementById("user-edit").style.display = "contents"
    }
    const cancelEdit = (e) => {
        e.preventDefault()
        document.getElementById("user-edit").style.display = "none"
        document.getElementById("user-data-container").style.display =
            "contents"
    }
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(usId, userData))
        console.log(usId, userData)
    }
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
                    {user?.name && user?.surname ? (
                        <p className="welcome-user">
                            ¡Bienvenid@ {user?.name} {user?.surname}!
                        </p>
                    ) : (
                        <p className="welcome-user">
                            ¡Bienvenid@ {user?.displayName}!
                        </p>
                    )}

                    <p>{user?.email}</p>
                </div>
                <button onClick={() => logout()} className="user-logout">
                    Cerrar sesión
                </button>
            </div>
            <div className="user-data-container" id="user-data-container">
                <p className="user-data">Tus datos</p>
                <p className="user-data-fields">
                    Nombre:{" "}
                    {user?.name ? (
                        user?.name
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Apellido:{" "}
                    {user?.surname ? (
                        user?.surname
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Teléfono:{" "}
                    {user?.phone ? (
                        user?.phone
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Dirección:{" "}
                    {user?.address ? (
                        user?.address
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Ciudad:{" "}
                    {user?.city ? (
                        user?.city
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Provincia:{" "}
                    {user?.province ? (
                        user?.province
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Código postal:{" "}
                    {user?.cp ? (
                        user?.cp
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <button
                    className="user-data-fields user-logout user-edit"
                    onClick={editInfo}
                >
                    Editar mi información
                </button>
            </div>
            <form
                className="user-data-edit-container"
                id="user-edit"
                onSubmit={handleSubmit}
            >
                <p className="user-data">Modifica tus datos</p>
                <div className="user-form-container">
                    <div className="user-form-labels">
                        <p className="user-data-fields">Nombre: </p>
                        <p className="user-data-fields">Apellido: </p>
                        <p className="user-data-fields">Teléfono: </p>
                        <p className="user-data-fields">Dirección: </p>
                        <p className="user-data-fields">Ciudad: </p>
                        <p className="user-data-fields">Provincia: </p>
                        <p className="user-data-fields">Código postal: </p>
                    </div>
                    <div className="user-form-inputs">
                        <input
                            type="text"
                            name="name"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="surname"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="address"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="province"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="cp"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="edit-btns">
                    <button className="user-data-fields user-logout user-edit u-edit-s">
                        Enviar
                    </button>
                    <button
                        className="user-data-fields user-logout user-edit u-edit-c"
                        onClick={cancelEdit}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            <p className="user-data">Tus pedidos</p>
        </div>
    )
}

export default UserPanel
