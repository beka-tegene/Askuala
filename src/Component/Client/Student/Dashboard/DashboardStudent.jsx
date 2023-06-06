import React, { useState } from "react";
import style from "./DashboardStudent.module.css";
import user from "../../../../img/pexels-photo-614810.png";
import { RiBook2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { todoLists } from "../../../../Store/Student/dashboard";
const DUMMY_DATA = [
  {
    title: "operating system",
  },
  {
    title: "object oriented programming language",
  },
  {
    title: "applied maths one",
  },
  {
    title: "Applied maths two",
  },
  {
    title: "Applied maths three",
  },
];
const DUMMY_ANNOUNCE = [
  {
    title: "tomorrow have class",
    name: "Samuel Biniyam",
    role: "Teacher",
    date: "12:00",
  },
  {
    title: "tomorrow have class",
    name: "Samuel Biniyam",
    role: "Teacher",
    date: "12:00",
  },
  {
    title: "tomorrow have class",
    name: "Samuel Biniyam",
    role: "Teacher",
    date: "12:00",
  },
];
const DashboardStudent = () => {
  const [todo, setTodo] = useState();
  const [checked, setChecked] = useState();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.Student.todo);
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // setTodoList((prev) => [...prev, todo]);
    dispatch(
      todoLists({
        data: todo,
      })
    );
    setTodo("");
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
              <h2>yonatan mekonnen</h2>
              <h5>Computer science student</h5>
              <h5>NSR/5320/12</h5>
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
              {DUMMY_DATA.map((item, index) => (
                <div className={style.library} key={index}>
                  <div>

                    <i>
                      <RiBook2Fill />
                    </i>
                    <h5>{item.title}</h5>
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
              {DUMMY_ANNOUNCE.map((item, index) => (
                <div className={style.announce} key={index}>
                  <h4>{item.title}</h4>
                  <h5>{item.name}</h5>
                  <h6>{item.role}</h6>
                  <h6>{item.date}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className={style.bottom}>
            <h4>
              Here you will find all the information you need to stay organized
              and up-to-date with your academic journey. This dashboard is
              designed to provide a user-friendly and intuitive experience,
              helping you navigate through your courses, assignments, and
              important announcements effortlessly.
            </h4>
          </div>
        </div>
        <div className={style.todos}>
          <h4>TO DO List</h4>
          <div className={style.todo}>
            <form action="" onSubmit={submitHandler}>
              <input type="text" onChange={todoHandler} value={todo} />
              <button>+</button>
            </form>
          </div>
          {todoList.map((item, index) => (
            <div className={style.list} key={index}>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={(e) => setChecked(e.target.checked)}
              />
              <h4 className={`${checked && style.input}`}>{item.inputTodo}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
