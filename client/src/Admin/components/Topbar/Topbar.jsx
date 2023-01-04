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
                    <img
                        src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration-.jpg"
                        alt="admin"
                        className="adminAvatar"
                    />
                </div>
            </div>
        </div>
    )
}
