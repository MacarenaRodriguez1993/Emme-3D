import "./Widgetsm.css"
import { MdVisibility } from "react-icons/md"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../../redux/actions/actions"
import Loading from "../../../components/Loading/Loading"
import { Link } from "react-router-dom"

export default function Widgetsm() {
    const dispatch = useDispatch()
    let users = useSelector((state) => state.users.data)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    if (users) {
        users = users.slice(-5)
    }
    console.log(users)
    return (
        <div className="widgetsm">
            <span className="widgetsmtitle">Nuevos Usuarios</span>
            {users ? (
                <ul className="widgetsmlist">
                    <li className="widgetsmlistitem">
                        <img
                            src={users[0].img}
                            alt="nuevousuario"
                            className="widgetsmimg"
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmusername">
                                {`${users[0].name} ${users[0].surname}`}
                            </span>
                            <span className="widgetsmusertitle">
                                {users[0].isAdmin ? "Admin" : "Usuario"}
                            </span>
                        </div>
                        <Link to={`/dashboard/user/${users[0].uid}`}>
                            <button className="widgetsmbutton">
                                <MdVisibility className="widgetsmicon" />
                                Ver
                            </button>
                        </Link>
                    </li>
                    <li className="widgetsmlistitem">
                        <img
                            src={users[1].img}
                            alt="nuevousuario"
                            className="widgetsmimg"
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmusername">
                                {`${users[1].name} ${users[1].surname}`}
                            </span>
                            <span className="widgetsmusertitle">
                                {users[1].isAdmin ? "Admin" : "Usuario"}
                            </span>
                        </div>
                        <Link to={`/dashboard/user/${users[1].uid}`}>
                            <button className="widgetsmbutton">
                                <MdVisibility className="widgetsmicon" />
                                Ver
                            </button>
                        </Link>
                    </li>
                    <li className="widgetsmlistitem">
                        <img
                            src={users[2].img}
                            alt="nuevousuario"
                            className="widgetsmimg"
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmusername">
                                {`${users[2].name} ${users[2].surname}`}
                            </span>
                            <span className="widgetsmusertitle">
                                {users[2].isAdmin ? "Admin" : "Usuario"}
                            </span>
                        </div>
                        <Link to={`/dashboard/user/${users[2].uid}`}>
                            <button className="widgetsmbutton">
                                <MdVisibility className="widgetsmicon" />
                                Ver
                            </button>
                        </Link>
                    </li>
                    <li className="widgetsmlistitem">
                        <img
                            src={users[3].img}
                            alt="nuevousuario"
                            className="widgetsmimg"
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmusername">
                                {`${users[3].name} ${users[3].surname}`}
                            </span>
                            <span className="widgetsmusertitle">
                                {users[3].isAdmin ? "Admin" : "Usuario"}
                            </span>
                        </div>
                        <Link to={`/dashboard/user/${users[3].uid}`}>
                            <button className="widgetsmbutton">
                                <MdVisibility className="widgetsmicon" />
                                Ver
                            </button>
                        </Link>
                    </li>
                    <li className="widgetsmlistitem">
                        <img
                            src={users[4].img}
                            alt="nuevousuario"
                            className="widgetsmimg"
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmusername">
                                {`${users[4].name} ${users[4].surname}`}
                            </span>
                            <span className="widgetsmusertitle">
                                {users[4].isAdmin ? "Admin" : "Usuario"}
                            </span>
                        </div>
                        <Link to={`/dashboard/user/${users[4].uid}`}>
                            <button className="widgetsmbutton">
                                <MdVisibility className="widgetsmicon" />
                                Ver
                            </button>
                        </Link>
                    </li>
                </ul>
            ) : (
                <Loading />
            )}
        </div>
    )
}
