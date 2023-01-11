import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth"
import { app, auth } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom"
import {
    getUserByUid,
    userNull,
    cartLogOut,
    updateUser,
} from "../../redux/actions/actions"
import UserPanel from "../../components/UserPanel/UserPanel"
import Navbar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { useAuth } from "../../components/context/AuthContext"
import { useEffect } from "react"
import { persistor } from "../../redux/store/store"

export default function Perfil() {
    const user = useSelector((state) => state.userByUid)
    const ucart = useSelector((state) => state.shoppingCart)
    const dispatch = useDispatch()
    console.log("este es del perfil", user)
    console.log(ucart)
    const { logout } = useAuth()
    const [userCart, setUserCart] = useState({
        id: "",
        cart: {},
    })
    useEffect(() => {
        if (user && ucart) {
            setUserCart({
                id: user.uid,
                cart: ucart,
            })
        }
    }, [user, ucart])
    console.log("usercart", userCart)
    const logouth = async () => {
        try {
            dispatch(updateUser(userCart))
            dispatch(cartLogOut())
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
