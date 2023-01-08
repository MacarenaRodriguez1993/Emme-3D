import React from "react"
import { app, db } from "../../components/firebase/firebase"
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    getRedirectResult,
} from "firebase/auth"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { getUserByUid, createUsers } from "../../redux/actions/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function LoginGoogle() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const userById = useSelector((state) => state.userByUid)
    console.log(userById)
    const loginGoogle = () => {
        try {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    // The signed-in user info.
                    const u = result.user
                    //Verifico si es la primera vez que se ingresa
                    console.log(u?.uid)
                    dispatch(getUserByUid(u?.uid))
                    setTimeout(() => {
                        
                        if (userById?.email) {
                            navigate("/products")
                        } else {
                            
                                dispatch(
                                    createUsers({
                                        'uid': u?.uid,
                                        'name': u?.name,
                                        //surname: u.apellido,
                                        'email': u?.email,
                                        //password: user.password,
                                        'phone': u?.phoneNumber,
                                        'photo': u?.photoURL,
                                    })
                                )
                                navigate("/products")
                           
                        }
                    }, 1000);
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code
                    const errorMessage = error.message
                    // The email of the user's account used.
                    const email = error.reloadUserInfo
                    console.log("errores", error.reloadUserInfo)
                    // The AuthCredential type that was used.

                    const credential =
                        GoogleAuthProvider.credentialFromError(error)
                    // ...
                })
        } catch (error) {
            errorMessage
        }
    }

    return (
        <div>
            <button className="btn-submit" onClick={() => loginGoogle()}>
                Login Google
            </button>
        </div>
    )
}
