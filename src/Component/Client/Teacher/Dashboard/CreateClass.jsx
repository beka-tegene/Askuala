import React, { useState } from "react";
import style from "./CreateClass.module.css";
import { useDispatch } from "react-redux";
import { setClass } from "../../../../Store/teacher/dashboard";
const CreateClass = (props) => {
  const department = localStorage.getItem("department");
  const id = localStorage.getItem("id");
  const [forms, setForms] = useState({
    CourseId: "",
    CourseName: "",
    Ects: "",
    CreaditHour: "",
    StartedDay: "",
    EndDay: "",
    Description: "",
  });
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setForms({
      ...forms,
      [event.target.id]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const courseId = forms.CourseId;
    const courseName = forms.CourseName;
    const ETCS = forms.Ects;
    const creaditHours = forms.CreaditHour;
    const startedDay = forms.StartedDay;
    const endDay = forms.EndDay;
    const description = forms.Description;
    const classCreator = id;
    const courseDept = department;
    dispatch(
      setClass({
        data: {
          courseId,
          courseName,
          ETCS,
          creaditHours,
          startedDay,
          endDay,
          description,
          classCreator,
          courseDept,
        },
      })
    );
  };
  const filterCourse = props.courseData.filter((item) => item.lectureID === id);
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Create new class for online student</h2>
        <form className={style.class} onSubmit={submitHandler}>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Course ID</label>
              <select id="CourseId" onChange={changeHandler}>
                <option value=""></option>
                {filterCourse.map((item, index) => (
                  <option value={item.CourseId} key={index}>
                    {item.CourseId}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Course Name</label>
              <select id="CourseName" onChange={changeHandler}>
                <option value=""></option>
                {filterCourse.map((item, index) => (
                  <option value={item.CourseName} key={index}>
                    {item.CourseName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">ETCS</label>
              <select id="Ects" onChange={changeHandler}>
                <option value=""></option>
                {filterCourse.map((item, index) => (
                  <option value={item.Ects} key={index}>
                    {item.Ects}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Credit Hours</label>
              <select id="CreaditHour" onChange={changeHandler}>
                <option value=""></option>
                {filterCourse.map((item, index) => (
                  <option value={item.CreaditHour} key={index}>
                    {item.CreaditHour}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Started Day</label>
              <input type="month" id="StartedDay" onChange={changeHandler} />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">End Day</label>
              <input type="month" id="EndDay" onChange={changeHandler} />
            </div>
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Description</label>
            <textarea
              id="Description"
              cols="30"
              rows="7"
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className={style.btn}>
            <button onClick={() => props.display()}>Cancel</button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
