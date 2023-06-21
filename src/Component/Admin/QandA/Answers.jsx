import React from "react";
import style from "./Answers.module.css";
import { SiAnswer } from "react-icons/si";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getQuestion,
  setRemoveQuestion,
} from "../../../Store/Student/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import striptags from "striptags";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";

const GETAnswers = (props) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.student.getQuestions);
  const filterQuestion = question.filter((item) => item._id === id);
  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);

  const filterAnswer = filterQuestion?.map((item) => item.Answer);
  const deleteQuestionHandler = (id) => {
    dispatch(setRemoveQuestion({ data: id }));
    console.log(id);
  };
  const deleteAnswerHandler = (id) => {
    console.log(id);
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link className={style.span} to={"/admin/question-answer"}>
          <i>
            <BiArrowBack />
          </i>
          Back
        </Link>
      </div>
      <div className={style.cards}>
        {filterQuestion?.map((item, index) => (
          <>
            <div className={style.counter}>1</div>
            <div className={style.card} key={index}>
              <div className={style.headCard}>
                <p>student {item.QuestionAsker}</p>
                <p>{item.Department}</p>
              </div>
              <h3>{striptags(item.Question)}</h3>
              <h6>{moment(item.createdAt).fromNow()}</h6>
              <h6>{item.Answer.length} answers</h6>
              <span onClick={() => deleteQuestionHandler(item._id)}>
                <FaTrashAlt />
              </span>
              <hr />
            </div>
          </>
        ))}
      </div>
      {/* <h3>Answers</h3> */}
      {filterAnswer[0]?.map((item, index) => (
        <div className={style.answerCards}>
          <div className={style.answerCounter}>
            <SiAnswer />
          </div>
          <div className={style.answerCard} key={index}>
            <div className={style.headAnswerCard}>
              <p>student {item.Name}</p>
              {/* <p>{item.department}</p> */}
            </div>
            <h3>{striptags(item.Answer)}</h3>
            <h6>{moment(item.createdAt).fromNow()}</h6>
            <span onClick={() => deleteAnswerHandler(item._id)}>
              <FaTrashAlt />
            </span>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GETAnswers;
