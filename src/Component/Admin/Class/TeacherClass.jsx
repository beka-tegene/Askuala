import React, { useState } from "react";
import style from "./Class.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCreateClass,
  setRemoveClass,
} from "../../../Store/teacher/dashboard";
const TeacherClass = () => {
  const classData = useSelector((state) => state.teacher.classFitch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);

  const [menuData, setMenuData] = useState(false);
  const [useData, setUseData] = useState();
  const menuHandler = (index) => {
    setMenuData(!menuData);
    setUseData(index);
  };
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(setRemoveClass({ data: id }));
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {classData.map((item, index) => (
          <div className={style.card} key={index}>
            <div className={style.head}>
              <i onClick={() => menuHandler(index)}>
                <BsThreeDotsVertical />
              </i>
            </div>
            {menuData && useData === index && (
              <div className={style.menu}>
                <Link>Show Details</Link>
                <Link onClick={() => deleteHandler(item._id)}>
                  Remove Class
                </Link>
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

export default TeacherClass;
