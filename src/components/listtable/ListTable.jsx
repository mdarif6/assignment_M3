import "./ListTable.css";
import arrow from "../../assets/images/arrow.jpg";
import { useState } from "react";
import MonitaurData from "../../db.json";
import Table from "../table/Table";
export default function ListTable() {
  const [tableData, setTableData] = useState(MonitaurData);

  const modelsData = tableData.models.data;
  console.log(tableData, setTableData);

  let keysOfModelObject = Object.keys(modelsData[0]);

  return (
    <div className="moni-list-table">
      <table className="moni-table-content">
        <thead>
          <tr>
            {keysOfModelObject.map((item) => {
              return (
                <th>
                  {item === "status" ? (
                    <>
                      status <img src={arrow} alt="" />
                    </>
                  ) : (
                    item
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {modelsData.map((item, index) => {
            return <Table item={item} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
