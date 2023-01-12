import "./User.css"
import {
    MdPermIdentity,
    MdCalendarToday,
    MdPhone,
    MdEmail,
    MdLocationPin,
    MdUpload,
} from "react-icons/md"
import { Link, useNavigate, useParams } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserByUid } from "../../../redux/actions/actions"
import { updateUser } from "../../../redux/actions/actions"
import { AiFillDelete } from "react-icons/ai"
import Loading from "../../../components/Loading/Loading"

export default function User() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const userEdit = users.data.find((u) => u.uid === id)
    console.log(userEdit)
    // useEffect(() => {
    // dispatch(getUserByUid(id))
    // }, [userEdit])
    const [userData, setUserData] = useState({
        address: userEdit.address,
        city: userEdit.city,
        cp: userEdit.cp,
        deleted: userEdit.deleted,
        email: userEdit.email,
        isAdmin: userEdit.isAdmin,
        name: userEdit.name,
        orders_ids: userEdit.orders_ids,
        phone: userEdit.phone,
        province: userEdit.province,
        reviews_ids: userEdit.reviews_ids,
        surname: userEdit.surname,
        uid: userEdit.uid,
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userData)
        dispatch(updateUser(userData))
        navigate("/home")
    }
    const handleChange = (e) => {
        if (userData.isAdmin === "true") {
            userData.isAdmin = true
        }
        if (userData.isAdmin === "false") {
            userData.isAdmin = false
        }
        setUserData({
            ...userData,
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
                    setUserData({
                        ...userData,
                        img: result.info.url,
                    })
                }
            }
        )
        myWidget.open()
    }
    console.log(userData)
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                {userEdit ? (
                    <div className="user">
                        <div className="usertitlecontainer">
                            <h1 className="usertitle">Editar Usuario</h1>
                            <Link className="link" to="/register">
                                <button className="useraddbutton">Crear</button>
                            </Link>
                        </div>
                        <div className="usercontainer">
                            <div className="usershow">
                                <div className="usershowtop">
                                    <img
                                        src={userEdit.img}
                                        alt="avatar"
                                        className="usershowimg"
                                    />
                                    <div className="usershowtoptitle">
                                        <span className="usershowusername">
                                            {`${userEdit.name} ${userEdit.surname}`}
                                        </span>
                                        <span className="usershowusertitle">
                                            {userEdit.isAdmin
                                                ? "Admin"
                                                : "Usuario"}
                                        </span>
                                    </div>
                                </div>
                                <div className="usershowbottom">
                                    <span className="usershowtitle">
                                        Detalles
                                    </span>
                                    <div className="usershowinfo">
                                        <MdPermIdentity className="usershowicon" />
                                        <span className="usershowinfotitle">
                                            {userEdit.username
                                                ? userEdit.username
                                                : `${userEdit.name} ${userEdit.surname}`}
                                        </span>
                                    </div>
                                    <div className="usershowinfo">
                                        <AiFillDelete className="usershowicon" />
                                        <span className="usershowinfotitle">
                                            {userEdit.deleted
                                                ? "true"
                                                : "false"}
                                        </span>
                                    </div>
                                    <span className="usershowtitle">
                                        Contacto
                                    </span>
                                    <div className="usershowinfo">
                                        <MdPhone className="usershowicon" />
                                        <span className="usershowinfotitle">
                                            {userEdit.phone}
                                        </span>
                                    </div>
                                    <div className="usershowinfo">
                                        <MdEmail className="usershowicon" />
                                        <span className="usershowinfotitle">
                                            {userEdit.email}
                                        </span>
                                    </div>
                                    <div className="usershowinfo">
                                        <MdLocationPin className="usershowicon" />
                                        <span className="usershowinfotitle">
                                            {`${userEdit.address}, ${userEdit.city}, ${userEdit.province}, ${userEdit.cp}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="userupdate">
                                <span className="userupdatetitle">Editar</span>
                                <form
                                    className="userupdateform"
                                    onSubmit={(e) => handleSubmit(e)}
                                >
                                    <div className="userupdateleft">
                                        <div className="userupdateitem">
                                            <label>Usuario</label>
                                            <input
                                                type="text"
                                                placeholder={
                                                    userEdit.username
                                                        ? userEdit.username
                                                        : `${userEdit.name} ${userEdit.surname}`
                                                }
                                                name="username"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Nombre</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.name}
                                                name="name"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Apellido</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.surname}
                                                name="surname"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.email}
                                                name="email"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Telefono</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.phone}
                                                name="phone"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Direccion</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.address}
                                                name="address"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Ciudad</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.city}
                                                name="city"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Provincia</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.province}
                                                name="province"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="userupdateitem">
                                            <label>Codigo postal</label>
                                            <input
                                                type="text"
                                                placeholder={userEdit.cp}
                                                name="cp"
                                                id=""
                                                className="userupdateinput"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="addProductItem">
                                            <label>Es admin?</label>
                                            <select
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                name="isAdmin"
                                                id="isAdmin"
                                            >
                                                <option
                                                    value={userEdit.isAdmin}
                                                >
                                                    Seleccione Opcion
                                                </option>
                                                <option value={true}>Si</option>
                                                <option value={false}>
                                                    No
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="userupdateright">
                                        <div className="userupdateupload">
                                            <img
                                                src={
                                                    userData.img
                                                        ? userData.img
                                                        : userEdit.img
                                                }
                                                alt="userupdateimg"
                                                className="userupdateimg"
                                            />
                                            <MdUpload
                                                className="userupdateicon"
                                                onClick={handleOpenWidget}
                                            />
                                        </div>
                                        <input
                                            type="submit"
                                            className="userupdatebutton"
                                            value="Actualizar datos"
                                        ></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}
