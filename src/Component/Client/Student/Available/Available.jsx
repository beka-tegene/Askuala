import React, { useEffect, useState } from "react";
import style from "./Available.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCreateClass } from "../../../../Store/teacher/dashboard";
import { setJoinClass } from "../../../../Store/Student/dashboard";
const Available = () => {
  const department = localStorage.getItem("department");
  const id = localStorage.getItem("id");
  const Username = localStorage.getItem("userName");
  const classData = useSelector((state) => state.teacher.classFitch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  const filterClass = classData?.filter(
    (item) => item.courseDept === department
  );
  console.log(filterClass);

  const [joinData, setJoinData] = useState(false);
  const [useJoin, setUseJoin] = useState();

  const joinHandler = (index) => {
    setJoinData(true);
    setUseJoin(index);
  };
  const ContinueHandler = () => {
    setJoinData(false);
  };
  const joinClassHandler = (CourseId, lectureID) => {
    dispatch(
      setJoinClass({
        data: {
          CourseId,
          lectureID,
          id,
          Username,
          department,
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {filterClass?.map((item, index) => (
          <>
            <div className={style.card} key={index}>
              <div className={style.info}>
                <h5>Course ID :-</h5>
                <h4>{item.CourseId}</h4>
              </div>
              <div className={style.info}>
                <h5>Course Name :-</h5>
                <h4>{item.CourseName}</h4>
              </div>
              <div className={style.info}>
                <h5>Lecture :-</h5>
                <h4>{item.lectureID}</h4>
              </div>
              <div className={style.info}>
                <h5>ECTS :-</h5>
                <h4>{item.Ects} ECTS</h4>
              </div>
              <div className={style.info}>
                <h5>Credit Hours :-</h5>
                <h4>{item.CreaditHour} hours</h4>
              </div>
              <div className={style.info}>
                <h5>Start Day :-</h5>
                <h4>{item.StartDay}</h4>
              </div>
              <div className={style.info}>
                <h5>End Day :-</h5>
                <h4>{item.EndDay}</h4>
              </div>
              <div className={style.info}>
                <h5>Description </h5>
                <h4>{item.Description} </h4>
              </div>
              <div className={style.btn}>
                <button onClick={() => joinHandler(index)}>Join Class</button>
              </div>
            </div>
            {joinData && useJoin === index && (
              <div className={style.popUp}>
                <div
                  className={style.dropBack}
                  onClick={() => ContinueHandler()}
                ></div>
                <div className={style.class}>
                  <p>Are you sure you want to join this class</p>
                  <div className={style.btnLong}>
                    <button onClick={() => ContinueHandler()}>Cancel</button>
                    <button
                      onClick={() =>
                        joinClassHandler(item.CourseId, item.lectureID)
                      }
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Available;
