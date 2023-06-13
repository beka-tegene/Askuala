import React from "react";
import Layout from "../../../Component/Client/Student/Layout/Layout";
import DashboardStudent from "../../../Component/Client/Student/Dashboard/DashboardStudent";
import { useDispatch, useSelector } from "react-redux";
import { getAnnounce, getLibrary, getTodoLists } from "../../../Store/Student/dashboard";
import { useEffect } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.student.todoSet);
  const books = useSelector((state) => state.student.book);
  const announcement = useSelector((state) => state.student.announcement);
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
      <DashboardStudent DUMMY={lists} Books={books} Announcement={announcement}/>
    </Layout>
  );
};

export default Dashboard;
