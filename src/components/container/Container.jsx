import "./Container.css";
import ListTable from "../listtable/ListTable";
import PageHeader from "../pageheader/PageHeader";

export default function Container() {
  return (
    <div className="firstpage-container">
      <PageHeader />
      <ListTable />
    </div>
  );
}
