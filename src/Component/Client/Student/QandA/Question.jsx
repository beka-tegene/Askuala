import React from "react";
import style from "./Question.module.css";
const Question = (props) => {
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
          <div className={style.card}>
            <div className={style.headCard}>
              <p>student yonatan mekonnen</p>
              <p>department</p>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              hic, perspiciatis soluta suscipit, recusandae saepe dolorum
              quibusdam deserunt et atque asperiores labore. Vel, tempore
              molestiae obcaecati quam commodi sapiente possimus!
            </h3>
            <h6>3 minute ago</h6>
            <h6>8 answers</h6>
            <hr />
          </div>
          <div className={style.card}>
            <div className={style.headCard}>
              <p>student yonatan mekonnen</p>
              <p>department</p>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              hic, perspiciatis soluta suscipit, recusandae saepe dolorum
              quibusdam deserunt et atque asperiores labore.
            </h3>
            <h6>3 minute ago</h6>
            <h6>8 answers</h6>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
