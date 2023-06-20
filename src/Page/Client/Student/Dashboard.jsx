import React from "react";
import Layout from "../../../Component/Client/Student/Layout/Layout";
import DashboardStudent from "../../../Component/Client/Student/Dashboard/DashboardStudent";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnnounce,
  getLibrary,
  getTodoLists,
} from "../../../Store/Student/dashboard";
import { useEffect } from "react";
import { getCreateClass } from "../../../Store/teacher/dashboard";
const Dashboard = () => {
  const id = localStorage.getItem("id");
  const department = localStorage.getItem("department");
  const dispatch = useDispatch();

  const classData = useSelector((state) => state.teacher.classFitch);
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  const filter = classData?.filter(
    (item) =>
      item.courseDept === department &&
      item.Member?.some((item) => item.StudentId === id)
  );

  const lists = useSelector((state) => state.student.todoSet);
  const listTodo = lists?.filter((item) => item.studentId === id);
  const books = useSelector((state) => state.student.book);
  const bookFilter = books?.filter(
    (item) => item.BookDepratment === department
  );
  const announcement = useSelector((state) => state.student.announcement);
  const filteredData = announcement.filter((item) =>
    filter.some((cls) => cls._id === item.ClassId)
  );

  console.log(filteredData);
  useEffect(() => {
    dispatch(getAnnounce());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getLibrary());
  }, [dispatch]);

  return (
    <Layout>
      <DashboardStudent
        DUMMY={listTodo}
        Books={bookFilter}
        Announcement={filteredData}
      />
    </Layout>
  );
};

export default Dashboard;
