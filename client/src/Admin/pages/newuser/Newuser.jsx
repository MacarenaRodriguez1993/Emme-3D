import "./Newuser.css"
import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/Sidebar/Sidebar"

export default function Newuser() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="newuser">
                    <h1 className="newusertitle">Nuevo Usuario</h1>
                    <form action="" className="newuserform">
                        <div className="newuseritem">
                            <label>Nombre de usuario</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="juanprogamer666HD"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Nombre y Apellido</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="juan lopez"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Email</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="juan@gmail.com"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Password</label>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="password"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Telefono</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="+54 9 2944 123456"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Direccion</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="direccion"
                            />
                        </div>
                        <div className="newuseritem">
                            <label>Sexo</label>
                            <div className="newusergender">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="male"
                                />
                                <label htmlFor="male">Hombre</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                />
                                <label htmlFor="female">Mujer</label>
                            </div>
                        </div>
                        <div className="newuseritem">
                            <label>Activo</label>
                            <select
                                name="active"
                                id="active"
                                className="newuserselect"
                            >
                                <option value="si">Si</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="newuserbutton">Crear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
