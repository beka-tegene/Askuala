import React from "react";
import style from "./ClassDetail.module.css";
import { RiBook2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMaterialClass } from "../../../../Store/teacher/dashboard";
import download from "downloadjs";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const ClassDetails = (props) => {
  const [title, setTitle] = useState();
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();

  const onFileHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFileInput(base64);
  };

  const handleDownload = (file) => {
    const fileName = `${file.Title}.txt`; 
    const base64Data = file.File; 

    download(base64Data, fileName, 'application/octet-stream');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const Classid = props.data._id;
    dispatch(
      setMaterialClass({
        data: {
          title,
          Classid,
          fileInput,
        },
      })
    );
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
          <form action="" onSubmit={submitHandler} className={style.form}>
            <div className={style.formControl}>
              <div className={style.inputTitle}>
                <label htmlFor="">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className={style.inputTitle}>
                <label htmlFor="">file</label>
                <input type="file" onChange={(e) => onFileHandler(e)} />
              </div>
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

export default ClassDetails;
