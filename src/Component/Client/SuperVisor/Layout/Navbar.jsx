import React from "react";
import style from "./Navbar.module.css";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  const Username = localStorage.getItem("userName");

  return (
    <nav className={style["userNav-container"]}>
      <div className={style["userNav-menu"]}>
        <h2>Welcome </h2> &nbsp;&nbsp;&nbsp;&nbsp;
        <h4>{Username}</h4>
      </div>
      <div className={style["userNav-right"]}>
        <i className={style["userNav-notification"]}>
          <i>
            <IoIosNotifications />
            <span></span>
          </i>
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
