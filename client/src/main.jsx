import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store/store.js"
import "./index.css"
import axios from "axios"
import dotenv from "dotenv"
//let url_api = process.env.REACT_APP_API || "http://localhost:3001"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
