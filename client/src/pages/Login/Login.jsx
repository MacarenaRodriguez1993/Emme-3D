import React, { useState, useEffect } from "react"
import logo from "../../assets/logo1.png"
import { useDispatch, useSelector } from "react-redux"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { app } from "../../components/firebase/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getUsers } from "../../redux/actions/actions"
import LoginGoogle from "./LoginGoogle"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = useSelector((state) => state.users)
    console.log(user)

    const auth = getAuth(app)
    const onSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                dispatch(getUsers(user))
                navigate("/products")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
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
                <form className="formulario-login" onSubmit={onSubmit}>
                    <h2 style={{ color: "white", fontSize: 30 }}>
                        Inicia sesion en tu cuenta
                    </h2>
                    <div style={{ flexDirection: "column" }}>
                        <div>
                            <input
                                name="email"
                                type="email"
                                value={email}
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
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="recuperar-password">
                        <div class="text-sm">
                            <a href="#" className="forgot-password">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button className="btn-submit">
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
                            Inicia sesion
                        </button>
                    </div>
                    <LoginGoogle />
                    <span className="link-registro">
                        No tienes una cuenta?{" "}
                        <Link className="forgot-password" to="#">
                            Registrate
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}
