import { MdNotifications, MdSettings } from "react-icons/md"
import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
    return (
        <div>
            <div className="topbaradminmarcos">
                <div className="topbarWrapper">
                    <div className="topleft">
                        <span className="logo">
                            <Link className="linkHomeAdmin" to={"/home"}>
                                Emme3D
                            </Link>
                        </span>
                    </div>
                    <div className="topright"></div>
                </div>
            </div>
        </div>
    )
}
