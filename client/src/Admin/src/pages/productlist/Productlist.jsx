import "./Productlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../hardcodeddata";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Productlist() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nombre", width: 200 },
    {
      field: "product",
      headerName: "Foto",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product">
            <img src={params.row.img} alt="avatar" className="productimg" />
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 90,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Precio",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Accion",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="productlistedit">Editar</button>
            </Link>
            <MdDelete
              className="productlistdelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
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
