import React from "react";
import style from "./Book.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBooksList } from "../../../../Store/Student/dashboard";

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

const Book = () => {
  const username = localStorage.getItem("userName");
  const department = localStorage.getItem("department");
  const [title, setTitle] = useState();
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();

  const onFileHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFileInput(base64);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // const Classid = "7878";
    const BookName = title;
    const BookAuthor = username;
    const BookDepratmen = department
    dispatch(
      setBooksList({
        data: {
          BookName,
          BookAuthor,
          BookDepratmen,
          fileInput
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.books}>
        <h4>Book suggestion for student</h4>
        <form className={style.send} onSubmit={submitHandler}>
          <div className={style.formControl}>
            <label htmlFor="">Books title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Book File</label>
            <input type="file" onChange={(e) => onFileHandler(e)} />
          </div>
          <div className={style.btn}>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
