import "./ListTable.css";
import { useState } from "react";
import MonitaurData from "../../db.json";
import Table from "../table/Table";
export default function ListTable() {
  const [tableData, setTableData] = useState(MonitaurData);

  const modelsData = tableData.models.data;
  console.log(modelsData[0]);
  let keysOfModelObject = Object.keys(modelsData[0]);

  return (
    <div className="moni-list-table">
      <table>
        <thead>
          <tr>
            {keysOfModelObject.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {modelsData.map((item) => {
            return <Table item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
