import "./User.css"
import {
    MdPermIdentity,
    MdCalendarToday,
    MdPhone,
    MdEmail,
    MdLocationPin,
    MdUpload,
} from "react-icons/md"
import { Link } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"

export default function User() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="user">
                    <div className="usertitlecontainer">
                        <h1 className="usertitle">Editar Usuario</h1>
                        <Link className="link" to="/dashboard/newuser">
                            <button className="useraddbutton">Crear</button>
                        </Link>
                    </div>
                    <div className="usercontainer">
                        <div className="usershow">
                            <div className="usershowtop">
                                <img
                                    src="https://qph.cf2.quoracdn.net/main-qimg-b34e90aceb60257be11e8f1bcef61ed0-lq"
                                    alt="avatar"
                                    className="usershowimg"
                                />
                                <div className="usershowtoptitle">
                                    <span className="usershowusername">
                                        Juan Pedroche
                                    </span>
                                    <span className="usershowusertitle">
                                        Admin
                                    </span>
                                </div>
                            </div>
                            <div className="usershowbottom">
                                <span className="usershowtitle">Detalles</span>
                                <div className="usershowinfo">
                                    <MdPermIdentity className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        annabeck99
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <MdCalendarToday className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        10/12/1999
                                    </span>
                                </div>
                                <span className="usershowtitle">Contacto</span>
                                <div className="usershowinfo">
                                    <MdPhone className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        +54 9 2944 123456
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <MdEmail className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        annabeck99@gmail.com
                                    </span>
                                </div>
                                <div className="usershowinfo">
                                    <MdLocationPin className="usershowicon" />
                                    <span className="usershowinfotitle">
                                        calle falsa 123
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="userupdate">
                            <span className="userupdatetitle">Editar</span>
                            <form className="userupdateform">
                                <div className="userupdateleft">
                                    <div className="userupdateitem">
                                        <label>Usuario</label>
                                        <input
                                            type="text"
                                            placeholder="annabeck99"
                                            name=""
                                            id=""
                                            className="userupdateinput"
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            placeholder="Juan Pedroche"
                                            name=""
                                            id=""
                                            className="userupdateinput"
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder="annabeck99@gmail.com"
                                            name=""
                                            id=""
                                            className="userupdateinput"
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Telefono</label>
                                        <input
                                            type="text"
                                            placeholder="+54 9 2944 123456"
                                            name=""
                                            id=""
                                            className="userupdateinput"
                                        />
                                    </div>
                                    <div className="userupdateitem">
                                        <label>Direccion</label>
                                        <input
                                            type="text"
                                            placeholder="calle falsa 123"
                                            name=""
                                            id=""
                                            className="userupdateinput"
                                        />
                                    </div>
                                </div>
                                <div className="userupdateright">
                                    <div className="userupdateupload">
                                        <img
                                            src="https://qph.cf2.quoracdn.net/main-qimg-b34e90aceb60257be11e8f1bcef61ed0-lq"
                                            alt="userupdateimg"
                                            className="userupdateimg"
                                        />
                                        <label htmlFor="file">
                                            <MdUpload className="userupdateicon" />
                                        </label>
                                        <input
                                            type="file"
                                            name=""
                                            id="file"
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                    <button className="userupdatebutton">
                                        Actualizar datos
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
