import "./SideBar.css";

import logo from "../../assets/images/Vector.svg";
import navicon from "../../assets/images/Vector2.svg";
export default function SideBar() {
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

      <div className="moni-sidebar-pagedetail">
        <div className="moni-sidebar-navicons link-active">
          <img src={navicon} alt="" />
          <p>Page 1</p>
        </div>
        <div className="moni-sidebar-navicons">
          <img src={navicon} alt="" />
          <p>Page 2</p>
        </div>
      </div>

      <div className="moni-sidebar-logindetail">
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
