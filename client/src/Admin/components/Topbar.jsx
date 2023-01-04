import React from "react"
import "./Topbar.css"
import { BsFillBellFill, BsFillGearFill } from "react-icons/bs"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">Emme3D</div>
                <div className="topRight">
                    <div className="topBarIcons">
                        <BsFillBellFill />
                        <span className="bellNumber">2</span>
                    </div>
                    <div className="topBarIcons">
                        <BsFillGearFill />
                        <span className="bellNumber">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
