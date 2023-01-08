import "./Newproduct.css"
import { MdUpload } from "react-icons/md"
import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/Sidebar/Sidebar"

export default function NewProduct() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="newproduct">
                    <h1 className="addProductTitle">Nuevo Producto</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Imagen</label>
                            <label for="file">
                                <MdUpload />
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Apple Airpods" />
                        </div>
                        <div className="addProductItem">
                            <label>Stock</label>
                            <input type="text" placeholder="123" />
                        </div>
                        <div className="addProductItem">
                            <label>Activo</label>
                            <select name="active" id="active">
                                <option value="yes">Si</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="addProductButton">Crear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
