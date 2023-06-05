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
  return (
    <div className={style["admin-main-container"]}>
      <div className={style["admin-main-icon"]}>
        <img src={brandIcon} alt="" />
      </div>
      <nav className={style["admin-main-nav"]}>
        <ul className={style["admin-main-ul"]}>
          <li>
            <NavLink
              to={"/student/dashboard"}
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
              to={"/student/my-class"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <SiGoogleclassroom />
              </i>
              My Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/student/Available-class"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdOutlineEventAvailable />
              </i>
              Available Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/student/question-answer"}
              className={(navData) => (navData.isActive ? style.active : "")}
            >
              <i>
                <MdQuestionAnswer />
              </i>
              Q/A
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["logout"]}>
        <i>
          <abbr title="Logout">
            <HiOutlineLogout />
          </abbr>
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
