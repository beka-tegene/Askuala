import React, { useRef, useState } from "react";
import style from "./AskQuestion.module.css";
import JoditEditor from "jodit-react";
import { useDispatch } from "react-redux";
import { setAnswerQuestion } from "../../../../Store/Student/dashboard";
import { useParams } from "react-router-dom";
const GiveAnswer = (props) => {
  const { id } = useParams();
  const Username = localStorage.getItem("userName");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const answer = editor.current.value;
    dispatch(
      setAnswerQuestion({
        data: {
          answer,
          Username,
          id
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Answer for this question</h2>
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
            <button>Answers!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveAnswer;
