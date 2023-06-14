import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Client/SuperVisor/Layout/Layout";
import Dashboard from "../../../Component/Client/SuperVisor/Dashboard/Dashboard";
import CreateCourse from "../../../Component/Client/SuperVisor/Dashboard/CreateAnnouncement";
import { useDispatch, useSelector } from "react-redux";
import { getCreateCourse } from "../../../Store/supervisor/dashboard";

const DashboardSuperVisor = () => {
  const [display, setDisplay] = useState(false);
  const courseData = useSelector((state) => state.supervisor.courseFitch);
  const dispatch = useDispatch();
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
      <Dashboard onClick={() => createHandler()} courseData={courseData} />
      {display && <CreateCourse display={() => hiddenHandler()} />}
    </Layout>
  );
};

export default DashboardSuperVisor;
