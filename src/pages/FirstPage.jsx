import "./FirstPage.css";
import SideBar from "../components/sidebar/SideBar";
import Container from "../components/container/Container";

export default function FirstPage() {
  return (
    <div className="moni-firstpage-wrapper">
      <SideBar />
      <Container />
    </div>
  );
}
