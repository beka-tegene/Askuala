import React from "react";
import style from "./Navbar.module.css";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className={style["userNav-container"]}>
      <div className={style["userNav-menu"]}>
        <h2>Welcome</h2>
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
