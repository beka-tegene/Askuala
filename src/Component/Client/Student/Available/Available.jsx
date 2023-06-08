import React, { useState } from "react";
import style from "./Available.module.css";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
const Available = () => {
  const DUMMY_DATA = [
    {
      classID: "CLS/7878/11",
      className: "Introduction to Computer",
      lecture: "Dr. Mikias Tbebe",
      ECTS: 5,
      creditHours: 2,
    },
    {
      classID: "CLS/7878/11",
      className: "Introduction to Computer",
      lecture: "Dr. Mikias Tbebe",
      ECTS: 5,
      creditHours: 2,
    },
    {
      classID: "CLS/7878/11",
      className: "Introduction to Computer",
      lecture: "Dr. Mikias Tbebe",
      ECTS: 5,
      creditHours: 2,
    },
    {
      classID: "CLS/7878/11",
      className: "Introduction to Computer",
      lecture: "Dr. Mikias Tbebe",
      ECTS: 5,
      creditHours: 2,
    },
    {
      classID: "CLS/7878/11",
      className: "Introduction to Computer",
      lecture: "Dr. Mikias Tbebe",
      ECTS: 5,
      creditHours: 2,
    },
  ];
  const [menuData, setMenuData] = useState(false);
  const [joinData, setJoinData] = useState(false);
  const [useData, setUseData] = useState();
  const [useJoin, setUseJoin] = useState();
  const menuHandler = (index) => {
    setMenuData(!menuData);
    setUseData(index);
  };
  const joinHandler = (index) => {
    setJoinData(true);
    setUseJoin(index);
  };
  const ContinueHandler = () => {
    setJoinData(false);
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {DUMMY_DATA.map((item, index) => (
          <>
            <div className={style.card} key={index}>
              <div className={style.head}>
                <i onClick={() => menuHandler(index)}>
                  <BsThreeDotsVertical />
                </i>
              </div>
              {menuData && useData === index && (
                <div className={style.menu}>
                  <Link>Show Details</Link>
                </div>
              )}
              <div className={style.info}>
                <h5>Class ID :-</h5>
                <h4>{item.classID}</h4>
              </div>
              <div className={style.info}>
                <h5>Class Name :-</h5>
                <h4>{item.className}</h4>
              </div>
              <div className={style.info}>
                <h5>Lecture :-</h5>
                <h4>{item.lecture}</h4>
              </div>
              <div className={style.info}>
                <h5>ECTS :-</h5>
                <h4>{item.ECTS} ECTS</h4>
              </div>
              <div className={style.info}>
                <h5>Credit Hours :-</h5>
                <h4>{item.creditHours} hours</h4>
              </div>
              <div className={style.btn}>
                <button onClick={() => joinHandler(index)}>Join Class</button>
              </div>
            </div>
            {joinData && useJoin === index && <div className={style.popUp}>
              <div className={style.dropBack} onClick={() => ContinueHandler()}></div>
              <div className={style.class}>
                <p>Are you sure you want to join this class</p>
                <div className={style.btnLong}>
                  <button onClick={() => ContinueHandler()}>Cancel</button>
                  <button>Continue</button>
                </div>
              </div>
            </div>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Available;
