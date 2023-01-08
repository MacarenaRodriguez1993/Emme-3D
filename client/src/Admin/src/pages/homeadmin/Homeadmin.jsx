import Chart from "../../components/Chart/Chart"
import Featuredinfo from "../../components/Featuredinfo/Featuredinfo"
import "./Homeadmin.css"
import { userData } from "../../hardcodeddata"
import Widgetsm from "../../components/Widgetsm/Widgetsm"
import Widgetlg from "../../components/Widgetlg/Widgetlg"
export default function Home() {
    return (
        <div className="homeadmin">
            <Featuredinfo />
            <Chart
                data={userData}
                title="Usuarios Activos"
                grid
                dataKey="Usuarios Activos"
            />
            <div className="homewidgets">
                <Widgetsm />
                <Widgetlg />
            </div>
        </div>
    )
}
