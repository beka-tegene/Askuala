import React from "react";
import style from "./ClassDetail.module.css";
import { RiBook2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
const ClassDetail = (props) => {
  const DUMMY_DATA = [
    {
      title: "grade",
    },
    {
      title: "material for student ",
    },
    {
      title: "exam 22/2/2023",
    },
    {
      title: "oxford book",
    },
    {
      title: "grade",
    },
    {
      title: "material for student ",
    },
    {
      title: "exam 22/2/2023",
    },
    {
      title: "oxford book",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <div className={style.left}>
          <div className={style.info}>
            <h5>Class ID :-</h5>
            <h4>{props.data.classID}</h4>
          </div>
          <div className={style.info}>
            <h5>Class Name :-</h5>
            <h4>{props.data.className}</h4>
          </div>
          <div className={style.info}>
            <h5>Lecture :-</h5>
            <h4>{props.data.lecture}</h4>
          </div>
          <div className={style.info}>
            <h5>ECTS :-</h5>
            <h4>{props.data.ECTS} ECTS</h4>
          </div>
          <div className={style.info}>
            <h5>Credit Hours :-</h5>
            <h4>{props.data.creditHours} hours</h4>
          </div>
          <div className={style.info}>
            <h5>Description </h5>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eum
              sapiente laudantium voluptates temporibus dicta saepe totam. Esse,
              repellat corporis, recusandae porro voluptatem amet architecto eum
              cumque aliquid, voluptate aperiam? hours
            </h4>
          </div>
        </div>
        <div className={style.right}>
          <h1>Class Material</h1>
          <div className={style.librarian}>
            {DUMMY_DATA.map((item , index) => (
              <div className={style.library} key={index}>
                <div>
                  <i>
                    <RiBook2Fill />
                  </i>
                  <h5>{item.title}</h5>
                </div>
                <h6>
                  <i>
                    <FaDownload />
                  </i>
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
