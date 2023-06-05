import React from 'react'
import style from './Class.module.css'
const Class = () => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <h5>Class ID</h5>
          <h4>CLS/7878/11</h4>
        </div>
        <div>
          <h5>Class Name</h5>
          <h4>Introduction to Computer</h4>
        </div>
        <div>
          <h5>Lecture</h5>
          <h4>Dr. Mikias Tbebe</h4>
        </div>
        <div>
          <h5>ECTS</h5>
          <h4>5 ECTS</h4>
        </div>
        <div>
          <h5>Credit Hours</h5>
          <h4>2 hours</h4>
        </div>
      </div>
    </div>
  );
}

export default Class