import React, { useEffect } from "react";
import style from "./Question.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../../Store/Student/dashboard";
import moment from "moment/moment";
import striptags from "striptags";
import { useState } from "react";
const Question = (props) => {
  const department = localStorage.getItem("department");
  const Username = localStorage.getItem("userName");
  const [styles, setStyle] = useState(true);
  const dispatch = useDispatch();
  const question = useSelector((state) => state.student.getQuestions);
  const filterQuestion = question?.filter(
    (item) => item.Department === department
  );
  const myQuestion = question?.filter(
    (item) => item.QuestionAsker === Username && item.Department === department
  );
  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.stack}>
        <div className={style.head}>
          <h2>All Question</h2>
          <div className={style.btn}>
            {styles ? (
              <button onClick={() => setStyle(false)}>My Question</button>
            ) : (
              <button onClick={() => setStyle(true)}>All Question</button>
            )}
            <button onClick={props.onClick}>Ask Question</button>
          </div>
        </div>
        <div className={style.question}>
          <h5>
            {styles ? filterQuestion.length : myQuestion.length} questions
          </h5>
        </div>
        <hr />
        <div className={style.cards}>
          {styles
            ? filterQuestion?.map((item, index) => (
                <Link
                  className={style.card}
                  key={index}
                  to={`/student/question-answer/${item._id}`}
                >
                  <div className={style.headCard}>
                    <p>student {item.QuestionAsker}</p>
                    <p>{item.Department}</p>
                  </div>
                  <h3>{striptags(item.Question)}</h3>
                  <h6>{moment(item.createdAt).fromNow()}</h6>
                  <h6>{item.Answer.length} answers</h6>
                  <hr />
                </Link>
              ))
            : myQuestion?.map((item, index) => (
                <Link
                  className={style.card}
                  key={index}
                  to={`/student/question-answer/${item._id}`}
                >
                  <div className={style.headCard}>
                    <p>student {item.QuestionAsker}</p>
                    <p>{item.Department}</p>
                  </div>
                  <h3>{striptags(item.Question)}</h3>
                  <h6>{moment(item.createdAt).fromNow()}</h6>
                  <h6>{item.Answer.length} answers</h6>
                  <hr />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
