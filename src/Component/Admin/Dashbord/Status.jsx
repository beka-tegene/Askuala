import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import style from "./Dashboard.module.css";

function Status() {
  return (
    <div className={style.status}>
      <div className={style.card + " " + style.pending}>
        <h3>Students</h3>
        <div className={style.statusInfo}>
          <h1>756</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 6%
          </div>
        </div>
      </div>
      <div className={style.card + " " + style.completed}>
        <h3>Teachers</h3>
        <div className={style.statusInfo}>
          <h1>23</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 10%
          </div>
        </div>
      </div>
      <div className={style.card + " " + style.canceled}>
        <h3>Supervisor</h3>
        <div className={style.statusInfo}>
          <h1>7</h1>
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
