import "./Table.css";
export default function Table({ item }) {
  return (
    <div>
      <tr>
        <td> {item.status}</td>
        <td>{item.dueDate}</td>
        <td>{item.assignedTo}</td>
        <td>{item.model}</td>
        <td>{item.controlId}</td>
        <td>{item.reviewType}</td>
      </tr>
    </div>
  );
}
