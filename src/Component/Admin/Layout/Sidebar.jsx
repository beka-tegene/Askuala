import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import brandIcon from "../../../img/Group 1499.svg";
import {
  MdOutlineDashboard,
} from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";

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
                <BiTransfer />
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
                <BiTransfer />
              </i>
              Class
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["logout"]}>
        <i>
          <HiOutlineLogout />
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
