import "./User.css"
import {
    MdPermIdentity,
    MdCalendarToday,
    MdPhone,
    MdEmail,
    MdLocationPin,
    MdUpload,
} from "react-icons/md"
import { Link, useParams } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserByUid } from "../../../redux/actions/actions"
import validationsuser from "./validationsuser"
import { updateUser } from "../../../redux/actions/actions"
import { AiFillDelete } from "react-icons/ai"

export default function User() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const user = useSelector((state) => state.userByUid)
    useEffect(() => {
        dispatch(getUserByUid(id))
    }, [dispatch])
    const [userData, setUserData] = useState({
        id: id,
        username: "", //user.username,xxx
        email: "", //user.email,xxx
        name: "", //user.name,xxx
        surname: "", //user.surname,
        address: "", //user.address,
        city: "", //user.city,
        province: "", //user.province,
        cp: "", //user.cp,
        phone: "", //user.phone,
        img: "", //user.img,
        isAdmin: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(userData))
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
        setError(validationsuser(userData))
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
    console.log(error)
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
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
                                    src={user.img}
                                    alt="avatar"
                                    className="usershowimg"
                                />
                                <div className="usershowtoptitle">
                                    <span className="usershowusername">
                                        {`${user.name} ${user.surname}`}
                                    </span>
                                    <span className="usershowusertitle">
                                        {user.isAdmin ? "Admin" : "Usuario"}
                                    </span>
                                </div>
                            </div>
                            <div className="usershowbottom">
                                <span className="usershowtitle">Detalles</span>
                                <div className="usershowinfo">
                                    <MdPermIdentity className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        {user.username
                                            ? user.username
                                            : `${user.name} ${user.surname}`}
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <AiFillDelete className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        {user.deleted ? "true" : "false"}
                                    </span>
                                </div>
                                <span className="usershowtitle">Contacto</span>
                                <div className="usershowinfo">
                                    <MdPhone className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        {user.phone}
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <MdEmail className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <MdLocationPin className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        {`${user.address}, ${user.city}, ${user.province}, ${user.cp}`}
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
                                                user.username
                                                    ? user.username
                                                    : `${user.name} ${user.surname}`
                                            }
                                            name="username"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            placeholder={user.name}
                                            name="name"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Apellido</label>
                                        <input
                                            type="text"
                                            placeholder={user.surname}
                                            name="surname"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder={user.email}
                                            name="email"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Telefono</label>
                                        <input
                                            type="text"
                                            placeholder={user.phone}
                                            name="phone"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Direccion</label>
                                        <input
                                            type="text"
                                            placeholder={user.address}
                                            name="address"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Ciudad</label>
                                        <input
                                            type="text"
                                            placeholder={user.city}
                                            name="city"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Provincia</label>
                                        <input
                                            type="text"
                                            placeholder={user.province}
                                            name="province"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Codigo postal</label>
                                        <input
                                            type="text"
                                            placeholder={user.cp}
                                            name="cp"
                                            id=""
                                            className="userupdateinput"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="addProductItem">
                                        <label>Es admin?</label>
                                        <select
                                            onChange={(e) => handleChange(e)}
                                            name="isAdmin"
                                            id="isAdmin"
                                        >
                                            <option value=""></option>
                                            <option value="true">Si</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="userupdateright">
                                    <div className="userupdateupload">
                                        <img
                                            src={
                                                userData.img.length
                                                    ? userData.img
                                                    : user.img
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
            </div>
        </div>
    )
}
