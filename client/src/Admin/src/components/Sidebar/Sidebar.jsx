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
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <MdHome className="sidebaricon" />
              Home
            </li>
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
            <li className="sidebarlistitem">
              <FaUsers className="sidebaricon" />
              Usuarios
            </li>
            <li className="sidebarlistitem">
              <MdStore className="sidebaricon" />
              Productos
            </li>
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
