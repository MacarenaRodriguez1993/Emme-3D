import "./UserPanel.css"
import { AiTwotoneEdit } from "react-icons/ai"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../redux/actions/actions"
import { getUserByUid } from "../../redux/actions/actions"
import userDefaultImg from "../../assets/user.png"

const UserPanel = ({ user, logout }) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.users)
    const userDetails = useSelector((state) => state.userByUid)
    /* ******************************************************************* */
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        surname: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        cp: "",
        img: "",
    })
    console.log(userData)
    /* ******************************************************************* */
    useEffect(() => {
        if (userId !== null) {
            dispatch(getUserByUid(userId.uid))
        }
    }, [user])
    useEffect(async () => {
        if (user) {
            setUserData({
                id: user?.uid,
            })
        }
    }, [user])
    useEffect(() => {
        if (userDetails) {
            setUserData({
                id: user?.uid,
                name: userDetails[0] ? userDetails[0].name : "",
                surname: userDetails[0] ? userDetails[0].surname : "",
                phone: userDetails[0] ? userDetails[0].phone : "",
                address: userDetails[0] ? userDetails[0].address : "",
                city: userDetails[0] ? userDetails[0].city : "",
                province: userDetails[0] ? userDetails[0].province : "",
                cp: userDetails[0] ? userDetails[0].cp : "",
                img: userDetails[0] ? userDetails[0].img : "",
            })
        }
    }, [userDetails])
    /* ******************************************************************* */
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
    /* ******************************************************************* */
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        dispatch(updateUser(userData))
    }
    /* ******************************************************************* */
    const handleOpenWidget = async () => {
        var myWidget = await window.cloudinary.createUploadWidget(
            {
                cloudName: "emme3d",
                uploadPreset: "igsag6pi",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info)
                    setUserData({
                        ...userData,
                        img: result.info.url,
                    })
                }
            }
        )
        myWidget.open()
    }
    /* ******************************************************************* */
    return (
        <div className="user-panel-container">
            {/* ******ENCABEZADO DEL PERFIL****** */}
            <div className="user-info">
                <div className="user-info">
                    <div className="user-img-cont">
                        <img
                            src={
                                user?.photoURL ||
                                userDetails[0]?.img ||
                                userDefaultImg
                            }
                            alt={
                                user?.photoURL ||
                                userDetails[0]?.img ||
                                userDefaultImg
                            }
                            className="user-img"
                        />
                        <AiTwotoneEdit
                            className="img-edit-icon"
                            onClick={handleOpenWidget}
                        />
                    </div>

                    <div className="user-name-email">
                        {userDetails[0]?.name && userDetails[0]?.surname ? (
                            <p className="welcome-user">
                                ¡Bienvenid@ {userDetails[0]?.name}{" "}
                                {userDetails[0]?.surname}!
                            </p>
                        ) : (
                            <p className="welcome-user">
                                ¡Bienvenid@ {user?.displayName}!
                            </p>
                        )}

                        <p>{user?.email}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => logout()} className="user-logout">
                        Cerrar sesión
                    </button>
                </div>
            </div>
            {/* ******DATOS DEL USUARIO****** */}
            <div className="user-data-container" id="user-data-container">
                <p className="user-data">Tus datos</p>
                <p className="user-data-fields">
                    Nombre:{" "}
                    {userDetails[0]?.name ? (
                        <span className="user-data-span">
                            {userDetails[0]?.name}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Apellido:{" "}
                    {userDetails[0]?.surname ? (
                        <span className="user-data-span">
                            {userDetails[0]?.surname}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Teléfono:{" "}
                    {userDetails[0]?.phone ? (
                        <span className="user-data-span">
                            {userDetails[0]?.phone}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Dirección:{" "}
                    {userDetails[0]?.address ? (
                        <span className="user-data-span">
                            {userDetails[0]?.address}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Ciudad:{" "}
                    {userDetails[0]?.city ? (
                        <span className="user-data-span">
                            {userDetails[0]?.city}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Provincia:{" "}
                    {userDetails[0]?.province ? (
                        <span className="user-data-span">
                            {userDetails[0]?.province}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Código postal:{" "}
                    {userDetails[0]?.cp ? (
                        <span className="user-data-span">
                            {userDetails[0]?.cp}
                        </span>
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
            {/* ******FORMULARIO PARA EDITAR DATOS DE USUARIO****** */}
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
                            value={userData.name}
                        />
                        <input
                            type="text"
                            name="surname"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                            value={userData.surname}
                        />
                        <input
                            type="text"
                            name="phone"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                            value={userData.phone}
                        />
                        <input
                            type="text"
                            name="address"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                            value={userData.address}
                        />
                        <input
                            type="text"
                            name="city"
                            id=""
                            className="user-edits"
                            onChange={handleChange}
                            value={userData.city}
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
                            value={userData.cp}
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
            {/* ******PEDIDOS REALIZADOS POR EL USUARIO****** */}
            <p className="user-data">Tus pedidos</p>
        </div>
    )
}

export default UserPanel
