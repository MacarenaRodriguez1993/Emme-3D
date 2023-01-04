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
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    // The signed-in user info.
                    const user = result.user
            
                    dispatch(createUsers(user))
                  
                    navigate("/products")
                    createDoc()

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

        const createDoc = async() => {
            try {
                const docRef = await addDoc(collection(db, "users"),{
                    token: user.accessToken,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    photo: user.photoURL,
                    isAdmin: 'false'
                   
                });
                dispatch(getUser())
                console.log("Document written with ID: ", docRef);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            
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
