import React, { useState, useEffect } from "react"
import logo from "../../assets/logo1.png"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../components/firebase/firebase"

export default function register() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rPassword, setRpassword] = useState("")

    const auth = getAuth(app)

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
    }

    return (
        <div className="container-login">
            <div className="container-logo">
                <img
                    style={{ marginLeft: 50, height: 500, width: 500 }}
                    src={logo}
                    alt="emme3d"
                />
            </div>
            <div>
                <form className="formulario-login" onSubmit={register}>
                    <h2 style={{ color: "white", fontSize: 30 }}>Registrate</h2>
                    <div style={{ flexDirection: "column" }}>
                        <div>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                required
                                className="input"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                required
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                name="repeatPassword"
                                type="password"
                                value={rPassword}
                                required
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setRpassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="recuperar-password">
                        <div class="text-sm"></div>
                    </div>

                    <div>
                        <button type="submit" className="btn-submit">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}