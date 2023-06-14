import React from "react";
import style from "./Answers.module.css";
import { SiAnswer } from "react-icons/si";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
const Answers = (props) => {
  //   const { id } = useParams();
  const DUMMY_DATA = [
    {
      _id: 31242343242342343423,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
      answer: 8,
    },
  ];
  const DUMMY_ANSWER = [
    {
      _id: 31242343242342343423,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
    },
    {
      _id: 423432432432,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
    },
    {
      _id: 3434546547665767,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
    },
    {
      _id: 325235332353253535,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
    },
    {
      _id: 3425465566879657574575,
      name: "yonatan mekonnen",
      department: "computer science",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, perspiciatis soluta suscipit, recusandae saepe dolorum quibusdam deserunt et atque asperiores labore.",
      timer: "1 hour ago",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link className={style.span} to={"/student/question-answer"}>
          <i>
            <BiArrowBack />
          </i>{" "}
          Back
        </Link>
        <button onClick={props.onClick}>Answers</button>
      </div>
      <div className={style.cards}>
        {DUMMY_DATA.map((item, index) => (
          <>
            <div className={style.counter}>1</div>
            <div className={style.card} key={index}>
              <div className={style.headCard}>
                <p>student {item.name}</p>
                <p>{item.department}</p>
              </div>
              <h3>{item.question}</h3>
              <h6>{item.timer}</h6>
              <h6>{item.answer} answers</h6>
              <hr />
            </div>
          </>
        ))}
      </div>
      {/* <h3>Answers</h3> */}
      <div className={style.answerCards}>
        {DUMMY_ANSWER.map((item, index) => (
          <>
            <div className={style.answerCounter}>
              <SiAnswer />
            </div>
            <div className={style.answerCard} key={index}>
              <div className={style.headAnswerCard}>
                <p>student {item.name}</p>
                <p>{item.department}</p>
              </div>
              <h3>{item.question}</h3>
              <h6>{item.timer}</h6>
              <hr />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Answers;
