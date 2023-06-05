import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import style from "./Dashboard.module.css";

function Status() {
  return (
    <div className={style.status}>
      <div className={style.card + " " + style.pending}>
        <h3>Pending</h3>
        <div className={style.statusInfo}>
          <h1>437</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 6%
          </div>
        </div>
      </div>
      <div className={style.card + " " + style.completed}>
        <h3>Completed</h3>
        <div className={style.statusInfo}>
          <h1>999</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 10%
          </div>
        </div>
      </div>
      <div className={style.card + " " + style.canceled}>
        <h3>Canceled</h3>
        <div className={style.statusInfo}>
          <h1>217</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 3%
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Status;
