import "./Userlist.css"
import { DataGrid } from "@mui/x-data-grid"
import { useState, useEffect } from "react"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom"
import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getUsers } from "../../../redux/actions/actions"
import Loading from "../../../components/Loading/Loading"

export default function Userlist() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    const users = useSelector((state) => state.users.data)
    if (users) {
        users.forEach((userobj) => (userobj.id = userobj._id))
    }
    const [data, setData] = useState(users)

    const columns = [
        { field: "_id", headerName: "ID", flex: 0.1 },
        { field: "address", headerName: "Direccion", flex: 0.1 },
        { field: "city", headerName: "Ciudad", flex: 0.1 },
        { field: "cp", headerName: "CP", flex: 0.1 },
        { field: "createdAt", headerName: "Creado el", flex: 0.1 },
        { field: "deleted", headerName: "Borrado?", flex: 0.1 },
        { field: "email", headerName: "Email", flex: 0.1 },
        { field: "isAdmin", headerName: "esAdmin?", flex: 0.1 },
        { field: "name", headerName: "Nombre", flex: 0.1 },
        { field: "orders_ids", headerName: "orders_ids", flex: 0.1 },
        { field: "phone", headerName: "Telefono", flex: 0.1 },
        { field: "province", headerName: "Provincia", flex: 0.1 },
        { field: "reviews_ids", headerName: "reviews_ids", flex: 0.1 },
        { field: "surname", headerName: "Apellido", flex: 0.1 },
        { field: "uid", headerName: "UID", flex: 0.1 },
        { field: "updatedAt", headerName: "Actualizado el", flex: 0.1 },
        { field: "_v", headerName: "_v", flex: 0.1 },
        {
            field: "img",
            headerName: "img",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <div className="img">
                        <img
                            src={params.row.img}
                            alt="imgnodisponible"
                            className="img"
                        />
                    </div>
                )
            },
        },
        {
            field: "action",
            headerName: "Accion",
            type: "number",
            width: 110,
            renderCell: (params) => {
                return (
                    <div>
                        <Link
                            to={`/dashboard/user/${params.row.uid}`}
                            className="link"
                        >
                            <button className="userlistedit">Editar</button>
                        </Link>
                        <MdDelete
                            className="userlistdelete"
                            onClick={() => handleDelete(params.row.uid)}
                        />
                    </div>
                )
            },
        },
    ]

    const handleDelete = async (uid) => {
        dispatch(deleteUser(uid))
    }
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div
                    style={{ height: "84vh", width: "100%" }}
                    className="griduser"
                >
                    {users ? (
                        <DataGrid
                            rows={users}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[8]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </div>
    )
}
