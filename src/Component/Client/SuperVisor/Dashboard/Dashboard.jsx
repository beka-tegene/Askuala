import React from "react";
import style from "./Dashboard.module.css";
import user from "../../../../img/pexels-photo-614810.png";
import DataTable from "react-data-table-component";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { setRemoveCourse } from "../../../../Store/supervisor/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../../Store/Auth";
import { getCreateClass } from "../../../../Store/teacher/dashboard";
const Dashboard = (props) => {
  const Username = localStorage.getItem("userName");
  const userType = localStorage.getItem("userType");
  const id = localStorage.getItem("id");
  const filterCourse = props.courseData.filter((item => item.CourseCreator === Username )) 
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const classData = useSelector((state) => state.teacher.classFitch);
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  const Student = users?.filter((item) => item.role === "Student");
  const Teacher = users?.filter((item) => item.role === "Teacher");
  const columns = [
    {
      name: "Course Id",
      selector: (row) => row.CourseId,
      sortable: true,
    },
    {
      name: "Course Name",
      selector: (row) => row.CourseName,
      sortable: true,
    },
    {
      name: "Credit Hour",
      selector: (row) => row.CreaditHour,
      sortable: true,
    },
    {
      name: "ETCS",
      selector: (row) => row.Ects,
      sortable: true,
    },
    {
      name: "Course Department",
      selector: (row) => row.courseDept,
      sortable: true,
    },
    {
      name: "Lecture ID",
      selector: (row) => row.lectureID,
      sortable: true,
    },
    
    {
      name: "Course Creator",
      selector: (row) => row.CourseCreator,
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
    dispatch(setRemoveCourse({ data: id }));
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
      <div className={style.head}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.user}>
              <img src={user} alt="user" />
            </div>
            <div className={style.information}>
              <h2>{Username}</h2>
              <h5>{userType}</h5>
              <h5>{id}</h5>
              <br />
              <h5>5 Department</h5>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.average}>
              <h1>{classData.length}</h1>
              <h5>Classes</h5>
            </div>
            <div className={style.attendance}>
              <h1>{Teacher.length}</h1>
              <h5>Teachers</h5>
            </div>
            <div className={style.grade}>
              <h1>{Student.length}</h1>
              <h5>Students</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.cardHead}>
          <div className={style.headLeft}>
            <h3>Create Course</h3>
          </div>
          <div className={style.headRight}>search</div>
        </div>
        <hr />
        <div className={style.add}>
          <h6>{filterCourse.length} Posted</h6>
          <i onClick={props.onClick}>
            <abbr title="Create Announcement">
              <MdAddCircleOutline />
            </abbr>
          </i>
        </div>
        <hr />
        <DataTable
          columns={columns}
          data={filterCourse}
          // selectableRows
          fixedHeader
          pagination
          customStyles={customStyle}
        />
      </div>
    </div>
  );
};

export default Dashboard;
