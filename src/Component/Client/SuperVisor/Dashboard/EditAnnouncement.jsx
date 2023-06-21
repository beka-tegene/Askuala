import React from 'react'
import style from './EditAnnouncement.module.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUpdateCourse } from '../../../../Store/supervisor/dashboard';
const EditAnnouncement = (props) => {

    const Username = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const [forms, setForms] = useState({
    courseId: "",
    courseName: "",
    teacherId: "",
    ETCS: "",
    creditHours: "",
    courseDept: "",
  });
  const changeHandler = (event) => {
    setForms({
      ...forms,
      [event.target.id]: event.target.value,
    });
  };
  console.log(props.useData);
  const submitHandler = (e) => {
    e.preventDefault();
    const _id = props.useData
    const courseId = forms.courseId; 
    const courseName = forms.courseName;
    const teacherId = forms.teacherId;
    const ETCS = forms.ETCS;
    const creaditHours = forms.creditHours;
    const courseDept = forms.courseDept;
    const CourseCreator = Username;
    dispatch(
      setUpdateCourse({
        data: {
          _id,
          courseId,
          courseName,
          teacherId,
          ETCS,
          creaditHours,
          courseDept,
          CourseCreator,
        },
      })
    );
  };

  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.editDisplay()}></div>
      <div className={style.classes}>
        <h2>Edit Course for online Teacher</h2>
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
              <input type="text" onChange={changeHandler} id="teacherId" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Course Department</label>
              <input type="text" onChange={changeHandler} id="courseDept" />
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
            <button onClick={() => props.editDisplay()}>Cancel</button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditAnnouncement