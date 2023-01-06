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
import { createUsers, getUser, getUsers } from "../../redux/actions/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { collection, addDoc } from "firebase/firestore"; 

export default function LoginGoogle() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const user = useSelector(state => state.user)

    console.log('user de store',user)

    const loginGoogle = () => {
        try {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    // The signed-in user info.
                    const usua = result.user
            
                    dispatch(createUsers({
                        'name': usua.displayName,
                        'uid': usua.uid,
                        'email': usua.email,
                        //'password': user.password,
                        'photo': usua.photoURL,
                        'phone': usua.phoneNumber
                        
        
                    }))
                    dispatch(getUser(usua.uid))
                    navigate("/products")
                    
                  
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
