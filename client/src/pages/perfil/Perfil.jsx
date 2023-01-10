import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth"
import { app } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { getUserByUid, userNull } from "../../redux/actions/actions"
import UserPanel from "../../components/UserPanel/UserPanel"
import Navbar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import swal from "sweetalert"
export default function Perfil() {
    const user = useSelector((state) => state.userByUid)
    console.log("este es del perfil", user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)

    const logout = () => {
        try {
            swal({
                title: "¿Quieres cerrar sesion?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Sesion cerrada", {
                        icon: "success",
                    })
                    signOut(auth)
                        .then(() => {
                            // Sign-out successful.
                            dispatch(userNull())
                            navigate("/products")
                            console.log("sesion cerrada")
                        })
                        .catch((error) => {
                            // An error happened.
                        })
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Navbar />
            <UserPanel user={user} logout={logout} />
            <Footer />
        </div>
    )
}
