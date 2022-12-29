import React from "react"
import { app } from "../../components/firebase/firebase"
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    getRedirectResult,
} from "firebase/auth"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { getUsers } from "../../redux/actions/actions"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function LoginGoogle() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const loginGoogle = () => {
        try {
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    // The signed-in user info.
                    const user = result.user

                    console.log(user)
                    console.log(token)
                    dispatch(getUsers(user))
                    navigate("/products")

                    /* if (user == token) {
                        dispatch(getUsers(user))
                        console.log(user)
                        navigate("/products")
                    } else {
                        alert("error")
                    } */
                    // ...
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code
                    const errorMessage = error.message
                    // The email of the user's account used.
                    const email = error.reloadUserInfo.email
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
