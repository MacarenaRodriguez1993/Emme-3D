import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth"
import { app, auth } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { getUserByUid, userNull } from "../../redux/actions/actions"
import UserPanel from "../../components/UserPanel/UserPanel"
import Navbar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import {useAuth} from "../../components/context/AuthContext"


export default function Perfil() {
    const user = useSelector((state) => state.userByUid)
    console.log("este es del perfil", user)
    const {logout} = useAuth()
    
    const logouth = async() => {
        try {
             await logout()
            
        } catch (error) {
            console.log(error)
        }
    }
    
    
    return (
        <div>
            <Navbar />
            
            <UserPanel user={user} logouth={logouth} />
            <Footer />
        </div>
    )
}
