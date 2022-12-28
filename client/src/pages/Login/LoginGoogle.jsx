import React from "react"
import { app } from "../../components/firebase/firebase"
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"

export default function LoginGoogle() {
    const navigate = useNavigate()

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
                    dispatch(getUsers(user))
                    console.log(user)
                    navigate("/products")
                    // ...
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code
                    const errorMessage = error.message
                    // The email of the user's account used.
                    const email = error.customData.email
                    // The AuthCredential type that was used.
                    console.log(email)
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
