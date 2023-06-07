import React from "react";
import style from "./TeacherDashboard.module.css";
import user from "../../../../img/pexels-photo-614810.png";
import { MdOutlineNotificationsNone } from "react-icons/md";
const TeacherDashboard = (props) => {
  const DUMMY_DATA = [
    {
      className: "Python",
      student: 22,
      notification: 3,
    },
    {
      className: "C++",
      student: 42,
      notification: 2,
    },
    {
      className: "C++",
      student: 42,
      notification: 2,
    },
    {
      className: "C#",
      student: 35,
      notification: 3,
    },
    {
      className: "Java Script",
      student: 33,
      notification: 7,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.user}>
              <img src={user} alt="user" />
            </div>
            <div className={style.information}>
              <h2>yonatan mekonnen</h2>
              <h5>Computer science teacher</h5>
              <h5>NSR/5320/12</h5>
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
        {DUMMY_DATA.map((item, index) => (
          <div className={style.card} key={index}>
            <h3>{item.className}</h3>
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
