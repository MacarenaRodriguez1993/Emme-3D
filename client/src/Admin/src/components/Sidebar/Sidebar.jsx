import "./Sidebar.css";
import {
  MdHome,
  MdAnalytics,
  MdTrendingUp,
  MdStore,
  MdAttachMoney,
  MdEmail,
  MdFeedback,
  MdMessage,
  MdReport,
} from "react-icons/md";
import { FaUsers, FaSuitcase } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to="/" className="link">
              <li className="sidebarlistitem">
                <MdHome className="sidebaricon" />
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <MdAnalytics className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <MdTrendingUp className="sidebaricon" />
              Ventas
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick menu</h3>
          <ul className="sidebarlist">
            <Link to="/users" className="link">
              <li className="sidebarlistitem">
                <FaUsers className="sidebaricon" />
                Usuarios
              </li>
            </Link>
            <Link className="link" to="/products">
              <li className="sidebarlistitem">
                <MdStore className="sidebaricon" />
                Productos
              </li>
            </Link>
            <li className="sidebarlistitem">
              <MdAttachMoney className="sidebaricon" />
              Transacciones
            </li>
            <li className="sidebarlistitem">
              <TbReportAnalytics className="sidebaricon" />
              Reportes
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <MdEmail className="sidebaricon" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <MdFeedback className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <MdMessage className="sidebaricon" />
              Mensajes
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <FaSuitcase className="sidebaricon" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <MdReport className="sidebaricon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
