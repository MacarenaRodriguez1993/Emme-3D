import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth"
import { app } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { createUsers, getUsers } from "../../redux/actions/actions"
export default function Perfil() {
    const user = useSelector((state) => state.userInfo)
    console.log(user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)
    
    const logout = () => {
        try {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    dispatch(createUsers(null))
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
            Perfil
            <h2>{user?.displayName} </h2>
            <button onClick={() => logout()}>cerrar sesion </button>
        </div>
    )
}
