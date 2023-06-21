import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import brandIcon from "../../../img/Group 1499.svg";
import { MdOutlineDashboard ,MdQuestionAnswer} from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { SiGoogleclassroom } from "react-icons/si";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className={style["admin-main-container"]}>
      <div className={style["admin-main-icon"]}>
        <img src={brandIcon} alt="" />
      </div>
      <nav className={style["admin-main-nav"]}>
        <ul className={style["admin-main-ul"]}>
          <li>
            <NavLink
              to={"/admin/dashboard"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdOutlineDashboard />
              </i>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/member"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <FiUsers />
              </i>
              Member
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/classes"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <SiGoogleclassroom />
              </i>
              Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/question-answer"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdQuestionAnswer />
              </i>
              Conference
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["logout"]}>
        <i onClick={handleLogout}>
          <HiOutlineLogout />
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
