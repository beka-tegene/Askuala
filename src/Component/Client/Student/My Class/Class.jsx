import React, { useState } from "react";
import style from "./Class.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCreateClass } from "../../../../Store/teacher/dashboard";
const Class = (props) => {
  const id = localStorage.getItem("id");
  const department = localStorage.getItem("department");
  const classData = useSelector((state) => state.teacher.classFitch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  // console.log(classData,"class");
  const filter = classData?.filter(
    (item) =>
      item.courseDept === department &&
      item.Member?.some((item) => item.StudentId === id)
  );

  const [menuData, setMenuData] = useState(false);
  const [useData, setUseData] = useState();
  const menuHandler = (index) => {
    setMenuData(!menuData);
    setUseData(index);
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {filter?.map((item, index) => (
          <div className={style.card} key={index}>
            <div className={style.head}>
              <i onClick={() => menuHandler(index)}>
                <BsThreeDotsVertical />
              </i>
            </div>
            {menuData && useData === index && (
              <div className={style.menu}>
                <Link onClick={() => props.onClick(item)}>Show Details</Link>
              </div>
            )}
            <div className={style.info}>
              <h5>Class ID :-</h5>
              <h4>{item.CourseId}</h4>
            </div>
            <div className={style.info}>
              <h5>Class Name :-</h5>
              <h4>{item.CourseName}</h4>
            </div>
            <div className={style.info}>
              <h5>Lecture :-</h5>
              <h4>{item.lectureID}</h4>
            </div>
            <div className={style.info}>
              <h5>ECTS :-</h5>
              <h4>{item.Ects} ECTS</h4>
            </div>
            <div className={style.info}>
              <h5>Credit Hours :-</h5>
              <h4>{item.CreaditHour} hours</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
