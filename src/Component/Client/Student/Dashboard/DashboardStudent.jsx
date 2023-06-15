import React, { useState } from "react";
import style from "./DashboardStudent.module.css";
import user from "../../../../img/pexels-photo-614810.png";
import { RiBook2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { setRemoveTodo, setTodo } from "../../../../Store/Student/dashboard";
import { useDispatch } from "react-redux";
import moment from "moment";

const DashboardStudent = (props) => {
  const Username = localStorage.getItem("userName");
  const department = localStorage.getItem("department");
  const id = localStorage.getItem("id");
  const [getTodo, setGetTodo] = useState();
  const [checked, setChecked] = useState();
  const [indexs, setIndex] = useState();
  const dispatch = useDispatch();
  const todoHandler = (e) => {
    setGetTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // setTodoList((prev) => [...prev, todo]);
    dispatch(
      setTodo({
        data: { getTodo, id },
      })
    );
    setGetTodo("");
  };
  const limitedData = props.Announcement?.slice(0, 4);
  const limitedBook = props.Books?.slice(0, 5);
  const deleteTodoHandler = (id) => {
    dispatch(setRemoveTodo({ data: id }));
  };
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.user}>
              <img src={user} alt="user" />
            </div>
            <div className={style.information}>
              <h2>{Username}</h2>
              <h5>{department} student</h5>
              <h5>{id}</h5>
              <br />
              <h5>28 Classmates</h5>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.average}>
              <h1>72.2</h1>
              <h5>Average source</h5>
            </div>
            <div className={style.attendance}>
              <h1>50%</h1>
              <h5>Attendance</h5>
            </div>
            <div className={style.grade}>
              <div></div>
              <h5>Grade</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={style.flexs}>
        <div className={style.flex}>
          <div className={style.middle}>
            <div className={style.librarys}>
              <div>
                <h4>Library</h4>
                <p></p>
              </div>
              {limitedBook.map((item, index) => (
                <div className={style.library} key={index}>
                  <div>
                    <i>
                      <RiBook2Fill />
                    </i>
                    <h5>{item.BookName}</h5>
                  </div>
                  <h6>
                    <i>
                      <FaDownload />
                    </i>
                  </h6>
                </div>
              ))}
            </div>
            <div className={style.chart}>
              <div className={style.chartHead}>
                <h4>Announcement</h4>
                <p>New</p>
              </div>
              {limitedData.map((item, index) => (
                <div className={style.announce} key={index}>
                  <h4>{item.Announcement}</h4>
                  <h4>Arrival time {item.Time}</h4>
                  <p>{item.ClassLink}</p>
                  <h5>{item.AnonouncerName}</h5>
                  <h5>{moment(item.createdAt).fromNow()}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.todos}>
          <h4>TO DO List</h4>
          <div className={style.todo}>
            <form action="" onSubmit={submitHandler}>
              <input type="text" onChange={todoHandler} value={getTodo} />
              <button>+</button>
            </form>
          </div>
          {props.DUMMY.map((item, index) => (
            <div className={style.list} key={index}>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={(e) => {
                  setChecked(e.target.checked);
                  setIndex(index);
                }}
                onClick={
                  checked && indexs === index && deleteTodoHandler(item._id)
                }
              />
              <h4 className={`${checked && indexs === index && style.input}`}>
                {item.todo}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
