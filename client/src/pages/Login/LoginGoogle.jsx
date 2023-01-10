import React from "react"

import "./Login.css"

import { useAuth } from "../../components/context/AuthContext"


export default function LoginGoogle() {
   
    const {loginWithGoogle} = useAuth()
   


    const loginGoogle = async() => {

        await loginWithGoogle()
      
    }

    return (
        
            <button className="btn-submit" onClick={loginGoogle}>
                Login Google
            </button>
        
    )
}
