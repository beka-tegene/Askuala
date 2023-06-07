import React from "react";
import style from "./Announcement.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import DataTable from "react-data-table-component";
// import { TfiAnnouncement } from "react-icons/tfi";

const Announcement = (props) => {
  const columns = [
    {
      name: "Announcement",
      selector: (row) => (
        <>
          {row.title} <br /> {row.message}
        </>
      ),
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Url",
      selector: (row) => (
        <div onClick={() => window.open(`${row.url}`, "_self")}>{row.url}</div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className={style["Action-container"]}>
          <div className={style["Action-edit"]}>
            <FiEdit />
          </div>
          <div className={style["Action-delete"]}>
            <FaTrashAlt onClick={() => deleteHandler(row._id)} />
          </div>
        </div>
      ),
    },
  ];
  const deleteHandler = (id) => {
    console.log(id);
  };
  const data = [
    {
      id: "0001",
      title: "hello world",
      message: "shgfjadshfiuhe ejkfhidahf khsahfkfas hasfkjhas",
      time: "3:20",
      url: "https://www.worldwar.com",
    },
    {
      id: "0001",
      title: "hello world",
      message: "shgfjadshfiuhe  khsahfkfas hasfkjhas",
      time: "3:20",
      url: "https://www.worldwar.com",
    },
    {
      id: "0001",
      title: "hello world",
      message: "shgfjadshfiuhe ejkfhidahf khsahfkfas hasfkjhas",
      time: "3:20",
      url: "https://www.worldwar.com",
    },
  ];
  const customStyle = {
    rows: {
      style: {
        cursor: "pointer",
        backgroundColor: "#fefefe",
        color: "#272727",
        "&:hover": {
          backgroundColor: "#979797",
          color: "#fff",
        },
      },
    },
    headCells: {
      style: {
        backgroundColor: "#ffffff",
        color: "#272727",
      },
    },
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <div className={style.head}>
          <div className={style.headLeft}>
            <h6>computer Science</h6>
            <h3>Course Announcements</h3>
          </div>
          <div className={style.headRight}>search</div>
        </div>
        <hr />
        <div className={style.add}>
          <h6>3 Posted</h6>
          <i onClick={props.onClick}>
            <abbr title="Create Announcement"><MdAddCircleOutline /></abbr>
          </i>
        </div>
        <hr />
        <DataTable
          columns={columns}
          data={data}
          // selectableRows
          fixedHeader
          pagination
          customStyles={customStyle}
        />
      </div>
    </div>
  );
};

export default Announcement;
