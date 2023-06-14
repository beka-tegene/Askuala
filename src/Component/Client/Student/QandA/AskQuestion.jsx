import React, {  useRef, useState } from "react";
import style from "./AskQuestion.module.css";
import JoditEditor from "jodit-react";
import { setQuestionAnswer } from "../../../../Store/Student/dashboard";
import { useDispatch } from "react-redux";
const AskQuestion = (props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const Username = localStorage.getItem("userName");
  const department = localStorage.getItem("department");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const questions = editor.current.value;
    dispatch(
      setQuestionAnswer({
        data: {
          questions,
          department,
          Username,
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Ask any question for the student</h2>
        <form className={style.class} onSubmit={submitHandler}>
          <div className={style.formControl}>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} 
              onBlur={(newContent) => setContent(newContent)} 
              // onChange={(newContent) => {}}
            />
          </div>
          <div className={style.btn}>
            <button onClick={() => props.display()}>Cancel</button>
            <button>Question?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
