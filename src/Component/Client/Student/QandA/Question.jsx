import React from "react";
import style from "./Question.module.css";
import { Link } from "react-router-dom";
const Question = (props) => {
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
    {
      _id: 325454365346565464436,
      name: "biniam mekonnen",
      department: "ICT",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic, et atque asperiores labore.",
      timer: "3 hour ago",
      answer: 5,
    },
    {
      _id: 3463464634643634634346,
      name: "robel mekonnen",
      department: "information science",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timer: "1 minute ago",
      answer: 1,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.stack}>
        <div className={style.head}>
          <h2>All Question</h2>
          <div className={style.btn}>
            <button>My Question</button>
            <button onClick={props.onClick}>Ask Question</button>
          </div>
        </div>
        <div className={style.question}>
          <h5>73 questions</h5>
        </div>
        <hr />
        <div className={style.cards}>
          {DUMMY_DATA.map((item, index) => (
            <Link className={style.card} key={index} to={`/student/question-answer/${item._id}`}>
              <div className={style.headCard}>
                <p>student {item.name}</p>
                <p>{item.department}</p>
              </div>
              <h3>{item.question}</h3>
              <h6>{item.timer}</h6>
              <h6>{item.answer} answers</h6>
              <hr />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
