import React from "react";
import style from "./TeacherDashboard.module.css";
import user from "../../../../img/pexels-photo-614810.png";
import { MdOutlineNotificationsNone } from "react-icons/md";
const TeacherDashboard = (props) => {
  const Username = localStorage.getItem("userName");
  const department = localStorage.getItem("department");
  const id = localStorage.getItem("id");
  const filterClass = props.classData.filter((item) => item.lectureID === id);
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
              <h5>{department} teacher</h5>
              <h5>{id}</h5>
              <br />
              <h5>4 Classes</h5>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.average}>
              <h1>142</h1>
              <h5>Students</h5>
            </div>
            <div className={style.attendance}>
              <h1>50%</h1>
              <h5>Attendance</h5>
            </div>
            <div className={style.grade}>
              <div></div>
              <h5>Grade</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        {filterClass.map((item, index) => (
          <div className={style.card} key={index}>
            <h3>{item.CourseName}</h3>
            <div className={style.notify}>
              <i>
                <MdOutlineNotificationsNone />
              </i>
              {item.notification}
            </div>
            <h6>{item.student} student</h6>
          </div>
        ))}
        <div className={style.create} onClick={()=>props.onClick()}>
            <h1>+</h1>
            <p>Create New</p>
            <p>Class</p>
          </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
