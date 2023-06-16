import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import brandIcon from "../../../../img/Group 1499.svg";
import {
  MdOutlineDashboard,
  MdQuestionAnswer,
  MdOutlineEventAvailable,
} from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
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
              to={"/supervisor/dashboard"}
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
              to={"/supervisor/teachers"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <SiGoogleclassroom />
              </i>
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/supervisor/students"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdOutlineEventAvailable />
              </i>
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/supervisor/classes"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <SiGoogleclassroom />
              </i>
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/supervisor/question-answer"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdQuestionAnswer />
              </i>
              Confirm
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["logout"]}>
        <i onClick={handleLogout}>
          <abbr title="Logout">
            <HiOutlineLogout />
          </abbr>
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
