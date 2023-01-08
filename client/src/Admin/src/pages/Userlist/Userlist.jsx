import "./Userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../hardcodeddata";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Userlist() {
  const [data, setData] = useState(rows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "username", headerName: "username", width: 200 },
    {
      field: "avatar",
      headerName: "avatar",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="avatar">
            <img src={params.row.avatar} alt="avatar" className="avatar" />
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "email",
      width: 90,
    },
    {
      field: "status",
      headerName: "status",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "transacion",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "accion",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userlistedit">Editar</button>
            </Link>
            <MdDelete
              className="userlistdelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
