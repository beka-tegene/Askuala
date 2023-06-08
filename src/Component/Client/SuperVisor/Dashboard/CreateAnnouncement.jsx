import React from "react";
import style from "./CreateAnnouncement.module.css";
const CreateCourse = (props) => {
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Create new Course Announcement for online Teacher</h2>
        <form className={style.class}>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Course ID</label>
              <input type="text" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Course Name</label>
              <input type="text" />
            </div>
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Teachers ID</label>
            <input type="text" name="" id="" />
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">ETCS</label>
              <input type="text" name="" id="" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Credit hours</label>
              <input type="text" />
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
