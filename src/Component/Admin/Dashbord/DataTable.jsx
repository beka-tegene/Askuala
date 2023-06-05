import React from "react";
import style from "./Dashboard.module.css";
import DataTable from "react-data-table-component";
function DataTables() {
  const DUMMY_DATA = [
    {
      name: "Adam God",
      country: "world",
      receiver: 1000261762173,
      date: "12 - 6 - 0001",
      status: "Successful",
      money: "1834.45$",
    },
    {
      name: "Abel Adam",
      country: "world",
      receiver: 1000261762173,
      date: "12 - 6 - 0021",
      status: "pending",
      money: "1.45$",
    },
    {
      name: "Eva God",
      country: "world",
      receiver: 1000261762173,
      date: "12 - 6 - 0100",
      status: "failed",
      money: "524.65$",
    },
  ];
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Receiver",
      selector: (row) => row.receiver,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      conditionalCellStyles: [
        {
          when: (row) => row.status === "Successful",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status === "pending",
          style: {
            color: "orange",
          },
        },
        {
          when: (row) => row.status === "failed",
          style: {
            color: "red",
          },
        },
      ],
      sortable: true,
    },
    {
      name: "Money",
      selector: (row) => row.money,
      sortable: true,
    },
  ];
  const customStyle = {
    rows: {
      style: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#ededed",
        },
      },
    },
    headCells: {
      style: {
        backgroundColor: "#262626",
        color: "#fff",
      },
    },
  };
  return (
    <div className={style.transactions}>
      <h5>Last Transaction</h5>
      <DataTable
        data={DUMMY_DATA}
        columns={columns}
        customStyles={customStyle}
      />
    </div>
  );
}

export default DataTables;
