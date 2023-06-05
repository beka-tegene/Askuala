import React from 'react'
import style from "./Dashboard.module.css";
import { BsArrowUpShort } from "react-icons/bs";

function Expenses() {
  return (
    <div className={style.expenses}>
      <div className={style.title}>All Transaction</div>
      <div className={style.cards}>
        <div className={style.titles}>
          <h3>Daily</h3>
          <h3>Monthly</h3>
          <h3>yearly</h3>
        </div>
        <div className={style.transaction}>
          <h4>Total Transaction</h4>
          <div className={style.growth}>
            <h2>12</h2>
            <p>
              <BsArrowUpShort />
              8%
            </p>
          </div>
        </div>
        <div className={style.transaction}>
          <h4>Total Money</h4>
          <div className={style.growth}>
            <h2>47,050$</h2>
            <p>
              <BsArrowUpShort />
              12%
            </p>
          </div>
        </div>
        <div className={style.transaction}>
          <h4>Interest</h4>
          <div className={style.growth}>
            <h2>2,134.23$</h2>
            <p>
              <BsArrowUpShort />
              5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses