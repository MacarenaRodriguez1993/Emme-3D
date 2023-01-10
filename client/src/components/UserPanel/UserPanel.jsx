import "./UserPanel.css"
import { AiTwotoneEdit } from "react-icons/ai"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../redux/actions/actions"
import { getUserByUid } from "../../redux/actions/actions"
import userDefaultImg from "../../assets/user.png"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const UserPanel = ({ user, logouth }) => {
    const dispatch = useDispatch()
    //const userId = useSelector((state) => state.users)
    const userDetails = useSelector((state) => state.userByUid)
    console.log("este es el user de props", user)
    console.log("este es el userDetails", userDetails)
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
    /* ******************************************************************* */
    useEffect(() => {
        if (user?.uid !== null) {
            dispatch(getUserByUid(user?.uid))
        }
    }, [])
    useEffect(() => {
        if (userDetails) {
            setUserData({
                id: user?.uid,
                name: userDetails ? userDetails.name : "",
                surname: userDetails ? userDetails.surname : "",
                phone: userDetails ? userDetails.phone : "",
                address: userDetails ? userDetails.address : "",
                city: userDetails ? userDetails.city : "",
                province: userDetails ? userDetails.province : "",
                cp: userDetails ? userDetails.cp : "",
                img: userDetails ? userDetails.img : "",
            })
        }
    }, [])
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
        console.log(userData)
    }
    const notify = () => {
        toast("Usuario editado")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(userData))
        notify()
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
                                userDetails?.img ||
                                userDefaultImg
                            }
                            alt={
                                user?.photoURL ||
                                userDetails?.img ||
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
                        {userDetails?.name && userDetails?.surname ? (
                            <p className="welcome-user">
                                ¡Bienvenid@ {userDetails?.name}{" "}
                                {userDetails?.surname}!
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
                    <button onClick={logouth} className="user-logout">
                        Cerrar sesión
                    </button>
                </div>
            </div>
            {/* ******DATOS DEL USUARIO****** */}
            <div className="user-data-container" id="user-data-container">
                <p className="user-data">Tus datos</p>
                <p className="user-data-fields">
                    Nombre:{" "}
                    {userDetails?.name ? (
                        <span className="user-data-span">
                            {userDetails?.name}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Apellido:{" "}
                    {userDetails?.surname ? (
                        <span className="user-data-span">
                            {userDetails?.surname}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Teléfono:{" "}
                    {userDetails?.phone ? (
                        <span className="user-data-span">
                            {userDetails?.phone}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Dirección:{" "}
                    {userDetails?.address ? (
                        <span className="user-data-span">
                            {userDetails?.address}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Ciudad:{" "}
                    {userDetails?.city ? (
                        <span className="user-data-span">
                            {userDetails?.city}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Provincia:{" "}
                    {userDetails?.province ? (
                        <span className="user-data-span">
                            {userDetails?.province}
                        </span>
                    ) : (
                        <span className="user-msg">
                            Por favor, completá tu información.
                        </span>
                    )}
                </p>
                <p className="user-data-fields">
                    Código postal:{" "}
                    {userDetails?.cp ? (
                        <span className="user-data-span">
                            {userDetails?.cp}
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
                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                />
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
