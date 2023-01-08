import "./Featuredinfo.css";
import { RxArrowDown, RxArrowUp } from "react-icons/rx";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle">Ganancias</span>
        <div className="featuredmoneycontainer">
          <span className="featuredMoney">$2415</span>
          <span className="featuredMoneyrate">
            -11.4 <RxArrowDown className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparado con mes anterior</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Ventas</span>
        <div className="featuredmoneycontainer">
          <span className="featuredMoney">$4415</span>
          <span className="featuredMoneyrate">
            -1.4 <RxArrowDown className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparado con mes anterior</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Costos</span>
        <div className="featuredmoneycontainer">
          <span className="featuredMoney">$8415</span>
          <span className="featuredMoneyrate">
            +11.4 <RxArrowUp className="featuredicon positive" />
          </span>
        </div>
        <span className="featuredSub">Comparado con mes anterior</span>
      </div>
    </div>
  );
}
