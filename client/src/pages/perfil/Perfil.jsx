import React from "react"
import { useSelector } from "react-redux"

export default function Perfil() {
    const user = useSelector((state) => state.users)
    return (
        <div>
            Perfil
            <h2>{user.displayName} </h2>
        </div>
    )
}
