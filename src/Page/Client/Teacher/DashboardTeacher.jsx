import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Client/Teacher/Layout/Layout";
import TeacherDashboard from "../../../Component/Client/Teacher/Dashboard/TeacherDashboard";
import CreateClass from "../../../Component/Client/Teacher/Dashboard/CreateClass";
import { useDispatch, useSelector } from "react-redux";
import { getCreateCourse } from "../../../Store/supervisor/dashboard";
import { getCreateClass } from "../../../Store/teacher/dashboard";

const DashboardTeacher = () => {
  const [display, setDisplay] = useState(false);
  const courseData = useSelector((state) => state.supervisor.courseFitch);
  const classData = useSelector((state) => state.teacher.classFitch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCreateCourse());
  }, [dispatch]);
  const createHandler = () => {
    setDisplay(true);
  };
  const hiddenHandler = () => {
    setDisplay(false);
  };
  return (
    <Layout>
      <TeacherDashboard onClick={() => createHandler()} classData={classData}/>
      {display && (
        <CreateClass display={() => hiddenHandler()} courseData={courseData} />
      )}
    </Layout>
  );
};

export default DashboardTeacher;
