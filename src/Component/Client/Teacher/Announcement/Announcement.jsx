import React from "react";
import style from "./Announcement.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAnnounce, setRemoveAnnouncement } from "../../../../Store/Student/dashboard";
import { useParams } from "react-router-dom";
// import { TfiAnnouncement } from "react-icons/tfi";
const Announcement = (props) => {
  const {_id} = useParams()
  const dispatch = useDispatch()
  const announcement = useSelector((state) => state.student.announcement);
  useEffect(() => {
    dispatch(getAnnounce());
  }, [dispatch]);
  const filterAnnounce = announcement.filter((item)=> item.ClassId === _id)
  const columns = [
    {
      name: "Announcement",
      selector: (row) => (
        <>
          {row.AnnouncementTitle} <br /> {row.Announcement}
        </>
      ),
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.Time,
      sortable: true,
    },
    {
      name: "Url",
      selector: (row) => (
        <div onClick={() => window.open(`${row.ClassLink}`, "_self")}>{row.ClassLink}</div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className={style["Action-container"]}>
          <div className={style["Action-edit"]}>
            <FiEdit onClick={() => props.onEditClick(row._id)}/>
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
    dispatch(setRemoveAnnouncement({ data: id }));
  };
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
          <h6>{filterAnnounce.length} Posted</h6>
          <i onClick={props.onClick}>
            <abbr title="Create Announcement"><MdAddCircleOutline /></abbr>
          </i>
        </div>
        <hr />
        <DataTable
          columns={columns}
          data={filterAnnounce}
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
