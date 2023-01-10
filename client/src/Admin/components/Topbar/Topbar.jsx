import { MdNotifications, MdSettings } from "react-icons/md"
import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
    return (
        <div>
            <div className="topbaradminmarcos">
                <div className="topbarWrapper">
                    <div className="topleft">
                        <Link className="link" to="/">
                            <span className="logo">Emme3D</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
