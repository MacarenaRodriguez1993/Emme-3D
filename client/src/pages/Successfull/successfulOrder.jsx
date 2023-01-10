import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./successfulOrder.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import {
    emailSuccessfulOrder,
    successfulOrder,
} from "../../redux/actions/actions"

const SuccessfulOrder = () => {
    const dispatch = useDispatch()
    /* De los estados globales traigo USER - SHOPPINGCART*/
    /*FALTARIA VER CUANDO NICO HAGA SU CAMBIO SI SIGUE SIENDO USER EL ESTADO DONDE VAN LOS DATOS DEL USUARIO*/
    const user = useSelector((state) => state.userByUid)
    const order = useSelector((state) => state.shoppingCart)

    //VARIABLE PARA EL TOTAL
    let sum = 0
    const newOrder = order
    useEffect(() => {
        //DISPACHO AL BACK EL EMAIL DE ORDEN PAGADA CON EXITO
        newOrder.user_id = user._id
        const pay = window.location.search.split("&")[2]
        const stat = window.location.search.split("&")[3]
        const merch = window.location.search.split("&")[6]
        newOrder.payment_id = pay.split("=")[1]
        newOrder.status = stat.split("=")[1]
        newOrder.merchant_order_id = merch.split("=")[1]
        dispatch(emailSuccessfulOrder(user))
        dispatch(successfulOrder(newOrder))
    })

    return (
        <div className="successfulOrder">
            <h1 style={{ textAlign: "center", paddingTop: "1em" }}>
                {user.name} SU COMPRA FUE EXITOSA{" "}
            </h1>
            <h3 style={{ textAlign: "center" }}>
                Transaccion n°: {newOrder.payment_id}
            </h3>
            <div className="tabla">
                <table>
                    <tr>
                        <th>Producto</th>
                        <th>Imagen </th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                    {order?.map((o) => {
                        sum =
                            sum +
                            o[0].productPrice * parseInt(o[0].productAmount)
                        return (
                            <tr>
                                <td>{o[0].productName}</td>
                                <td>
                                    <img src={o[0].productImage} alt="" />
                                </td>
                                <td>{o[0].productAmount}</td>
                                <td>{o[0].productPrice}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <h2 style={{ textAlign: "center" }}>Monto abonado = {sum}</h2>
            <Link to={"/"}>
                <button id="goback">Volver al inicio</button>
            </Link>
        </div>
    )
}
export default SuccessfulOrder
