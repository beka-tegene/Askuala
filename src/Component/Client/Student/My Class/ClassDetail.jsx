import React from "react";
import style from "./ClassDetail.module.css";
import { RiBook2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import download from "downloadjs";
const ClassDetail = (props) => {
  const handleDownload = (file) => {
    const fileName = `${file.Title}.txt`; 
    const base64Data = file.File; 
    download(base64Data, fileName, 'application/octet-stream');
  };
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <div className={style.left}>
          <div className={style.info}>
            <h5>Class ID :-</h5>
            <h4>{props.data.CourseId}</h4>
          </div>
          <div className={style.info}>
            <h5>Class Name :-</h5>
            <h4>{props.data.CourseName}</h4>
          </div>
          <div className={style.info}>
            <h5>Lecture :-</h5>
            <h4>{props.data.lectureID}</h4>
          </div>
          <div className={style.info}>
            <h5>ECTS :-</h5>
            <h4>{props.data.Ects} ECTS</h4>
          </div>
          <div className={style.info}>
            <h5>Credit Hours :-</h5>
            <h4>{props.data.CreaditHour} hours</h4>
          </div>
          <div className={style.info}>
            <h5>Start Day :-</h5>
            <h4>{props.data.StartDay}</h4>
          </div>
          <div className={style.info}>
            <h5>End Day :-</h5>
            <h4>{props.data.EndDay}</h4>
          </div>
          <div className={style.info}>
            <h5>Description </h5>
            <h4>{props.data.Description}</h4>
          </div>
        </div>
        <div className={style.right}>
          <h1>Class Material</h1>
          <div className={style.librarian}>
            {props.data.Material?.map((item, index) => (
              <div className={style.library} key={index}>
                <div>
                  <i>
                    <RiBook2Fill />
                  </i>
                  <h5>{item.Title}</h5>
                </div>
                <h6>
                  <i onClick={() => handleDownload(item)}>
                    <FaDownload />
                  </i>
                </h6>
              </div>
            ))}
          </div>
          <form className={style.forms} >
            <div className={style.formControl}>
              <textarea name="" id="" cols="30" rows="1"></textarea>
            </div>
            <div className={style.btn}>
              <button>Send</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ClassDetail;
