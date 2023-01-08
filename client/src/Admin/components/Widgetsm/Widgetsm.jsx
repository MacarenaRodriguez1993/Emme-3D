import "./Widgetsm.css";
import { MdVisibility } from "react-icons/md";

export default function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">Nuevos Usuarios</span>
      <ul className="widgetsmlist">
        <li className="widgetsmlistitem">
          <img
            src="https://static.filmin.es/images/media/12934/1/still_0_3_790x398.webp"
            alt="nuevousuario"
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Jorge</span>
            <span className="widgetsmusertitle">Admin</span>
          </div>
          <button className="widgetsmbutton">
            <MdVisibility className="widgetsmicon" />
            Ver
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            src="https://static.filmin.es/images/media/12934/1/still_0_3_790x398.webp"
            alt="nuevousuario"
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Jorge</span>
            <span className="widgetsmusertitle">Admin</span>
          </div>
          <button className="widgetsmbutton">
            <MdVisibility className="widgetsmicon" />
            Ver
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            src="https://static.filmin.es/images/media/12934/1/still_0_3_790x398.webp"
            alt="nuevousuario"
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Jorge</span>
            <span className="widgetsmusertitle">Admin</span>
          </div>
          <button className="widgetsmbutton">
            <MdVisibility className="widgetsmicon" />
            Ver
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            src="https://static.filmin.es/images/media/12934/1/still_0_3_790x398.webp"
            alt="nuevousuario"
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Jorge</span>
            <span className="widgetsmusertitle">Admin</span>
          </div>
          <button className="widgetsmbutton">
            <MdVisibility className="widgetsmicon" />
            Ver
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            src="https://static.filmin.es/images/media/12934/1/still_0_3_790x398.webp"
            alt="nuevousuario"
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Jorge</span>
            <span className="widgetsmusertitle">Admin</span>
          </div>
          <button className="widgetsmbutton">
            <MdVisibility className="widgetsmicon" />
            Ver
          </button>
        </li>
      </ul>
    </div>
  );
}
