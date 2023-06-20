import React from "react";
import style from "./Dashboard.module.css";
import Status from "./Status";
const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.dashboard}>
        <Status />
      </div>
    </div>
  );
};

export default Dashboard;
