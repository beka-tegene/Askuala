import React, { useState } from "react";
import style from "./CreateAnnouncement.module.css";
import { useDispatch } from "react-redux";
import { setCourse } from "../../../../Store/supervisor/dashboard";
const CreateCourse = (props) => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState({
    courseId: "",
    courseName: "",
    teacherId: "",
    ETCS: "",
    creditHours: "",
  });
  const changeHandler = (event) => {
    setForms({
      ...forms,
      [event.target.id]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const courseId = forms.courseId;
    const courseName = forms.courseName;
    const teacherId = forms.teacherId;
    const ETCS = forms.ETCS;
    const creditHours = forms.creditHours;
    dispatch(
      setCourse({
        data: {
          courseId,
          courseName,
          teacherId,
          ETCS,
          creditHours,
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Create new Course Announcement for online Teacher</h2>
        <form className={style.class} onSubmit={submitHandler}>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Course ID</label>
              <input type="text" onChange={changeHandler} id="courseId" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Course Name</label>
              <input type="text" onChange={changeHandler} id="courseName" />
            </div>
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Teachers ID</label>
            <input
              type="text"
              name=""
              onChange={changeHandler}
              id="teacherId"
            />
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">ETCS</label>
              <input type="text" name="" onChange={changeHandler} id="ETCS" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Credit hours</label>
              <input type="text" onChange={changeHandler} id="creditHours" />
            </div>
          </div>
          <div className={style.btn}>
            <button onClick={() => props.display()}>Cancel</button>
            <button>Announcement</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
