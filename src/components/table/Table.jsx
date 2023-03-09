import "./Table.css";
import normal from "../../assets/images/normal.jpg";
import caution from "../../assets/images/caution.jpg";
import alert from "../../assets/images/alert.jpg";

export default function Table({ item, index }) {
  console.log(index);
  return (
    <tr style={{ backgroundColor: index % 2 !== 0 ? "#FBFBFB" : "#FFFFFF" }}>
      <td>
        {item.status === "pass" ? <img src={normal} alt="" /> : ""}
        {item.status === "fail" ? <img src={alert} alt="" /> : ""}
        {item.status === "indeterminate" ? <img src={caution} alt="" /> : ""}
      </td>
      <td>{item.dueDate}</td>
      <td>{item.assignedTo}</td>
      <td>Model {item.model}</td>
      <td>{item.controlId}</td>
      <td>
        {item.reviewType === "0" ? "Initial" : ""}
        {item.reviewType === "1" ? "Periodic" : ""}
        {item.reviewType === "2" ? "Remediation" : ""}
      </td>
    </tr>
  );
}
