import React from "react"
import { useDispatch, useSelector } from "react-redux"
import UserPanel from "../../components/UserPanel/UserPanel"
import Navbar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { useAuth } from "../../components/context/AuthContext"
import {cartLogIn} from "../../redux/actions/actions"

export default function Perfil() {
    const user = useSelector((state) => state.userByUid)
    const dispatch = useDispatch()
    const { logout } = useAuth()

  /*   if (user?.cart?.length > 0) {
        dispatch(cartLogIn(user.cart))
    } */

    const logouth = async () => {
        await logout()
    }

    return (
        <div>
            <Navbar />

            <UserPanel user={user} logouth={logouth} />
            <Footer />
        </div>
    )
}
