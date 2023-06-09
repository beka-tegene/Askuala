import React from "react";
import Layout from "../../../Component/Client/Student/Layout/Layout";
import DashboardStudent from "../../../Component/Client/Student/Dashboard/DashboardStudent";
import { useDispatch, useSelector } from "react-redux";
import { getTodoLists } from "../../../Store/Student/dashboard";
import { useEffect } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.student.todoSet);
  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);
  
  return (
    <Layout>
      <DashboardStudent DUMMY={lists}/>
    </Layout>
  );
};

export default Dashboard;
