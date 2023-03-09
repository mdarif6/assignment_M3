import "./SideBar.css";

import logo from "../../assets/images/Vector.svg";
import navicon from "../../assets/images/Vector2.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SideBar() {
  const [currentTab, setCurrentTab] = useState(0);
  const [bgColor, setBgColor] = useState("#3da4ac;");
  const [txtColor, setTextColor] = useState("white");

  let navigate = useNavigate();
  function routeChange2() {
    setCurrentTab(1);
    higlightNav();
    navigate("/secondpage");
  }
  function routeChange1() {
    setCurrentTab(0);
    higlightNav();
    navigate("/");
  }

  function higlightNav() {
    setBgColor("#3da4ac");
    setTextColor("white");
  }
  return (
    <div className="moni-sidebar">
      <div className="moni-sidebar-logodetail">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <p>Monitaur</p>
        </div>
      </div>

      <div className="moni-sidebar-pagedetail page">
        <div
          className="moni-sidebar-navicons "
          onClick={routeChange1}
          style={
            currentTab === 0
              ? { backgroundColor: bgColor, color: txtColor }
              : {}
          }
        >
          <img src={navicon} alt="" />
          <p>Page 1</p>
        </div>
        <div
          className="moni-sidebar-navicons "
          onClick={routeChange2}
          style={
            currentTab === 1
              ? { backgroundColor: bgColor, color: txtColor }
              : {}
          }
        >
          <img src={navicon} alt="" />
          <p>Page 2</p>
        </div>
      </div>

      <div className="moni-sidebar-logindetail account">
        <div className="moni-sidebar-navicons">
          <p>Account</p>
          <i class="fa-regular fa-user"></i>
        </div>
        <div className="moni-sidebar-navicons">
          <p>Logout</p>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
    </div>
  );
}
