import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth"
import { app } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { getUsers } from "../../redux/actions/actions"
import UserPanel from "../../components/UserPanel/UserPanel"
import Navbar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"

export default function Perfil() {
    const user = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)
    const logout = () => {
        try {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    dispatch(getUsers(null))
                    navigate("/login")
                    console.log("sesion cerrada")
                })
                .catch((error) => {
                    // An error happened.
                })
        } catch (err) {
            console.log(err)
        }
    }
    console.log(user)
    return (
        <div>
            <Navbar />

            <UserPanel user={user} logout={logout} />
            <Footer />
        </div>
    )
}
