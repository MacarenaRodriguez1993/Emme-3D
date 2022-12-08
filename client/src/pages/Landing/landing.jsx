import React from "react";
import './landing.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Landing = ()=>{
    return(
        <div className="landing">
            <div className="title">
                <h1>Emme 3D</h1>
                <h4>Servicio de Venta y Diseño en impresion 3D</h4>
                <Link to='/products'>
                    <button>Ver Productos</button>
                </Link>
            </div>
            <div className="portada">
                <img src={logo} alt="" />
            </div>
            

        </div>
    )
}

export default Landing;