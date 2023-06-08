import React from "react";
import style from "./Dashboard.module.css";
// import DataTables from "./DataTable";
// import Chart from "./Chart";
// import Expenses from "./Expenses";
import Status from "./Status";
const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.dashboard}>
        <Status />
        {/* <Chart /> */}
        {/* <Expenses /> */}
      </div>
      {/* <DataTables /> */}
    </div>
  );
};

export default Dashboard;
