import "./Widgetlg.css";

export default function Widgetlg() {
  const Button = ({ type }) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Ultimas transacciones</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Usuario</th>
          <th className="widgetlgth">Fecha</th>
          <th className="widgetlgth">Monto</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/800px-Turkish_strained_yogurt.jpg"
              alt="userphoto"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Usuariocomprador1</span>
          </td>
          <td className="widgetlgdate">6 de enero de 2023</td>
          <td className="widgetlgamount">$123</td>
          <td className="widgetlgstatus">
            <Button type="Aprobado" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/800px-Turkish_strained_yogurt.jpg"
              alt="userphoto"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Usuariocomprador1</span>
          </td>
          <td className="widgetlgdate">6 de enero de 2023</td>
          <td className="widgetlgamount">$123</td>
          <td className="widgetlgstatus">
            <Button type="Aprobado" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/800px-Turkish_strained_yogurt.jpg"
              alt="userphoto"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Usuariocomprador1</span>
          </td>
          <td className="widgetlgdate">6 de enero de 2023</td>
          <td className="widgetlgamount">$123</td>
          <td className="widgetlgstatus">
            <Button type="Rechazado" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/800px-Turkish_strained_yogurt.jpg"
              alt="userphoto"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Usuariocomprador1</span>
          </td>
          <td className="widgetlgdate">6 de enero de 2023</td>
          <td className="widgetlgamount">$123</td>
          <td className="widgetlgstatus">
            <Button type="Pendiente" />
          </td>
        </tr>
      </table>
    </div>
  );
}
