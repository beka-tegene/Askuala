import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Admin/Layout/Layout";
import Dashboard from "../../../Component/Client/SuperVisor/Dashboard/Dashboard";
import CreateCourse from "../../../Component/Client/SuperVisor/Dashboard/CreateAnnouncement";
import { useDispatch, useSelector } from "react-redux";
import { getCreateCourse } from "../../../Store/supervisor/dashboard";
import EditAnnouncement from "../../../Component/Client/SuperVisor/Dashboard/EditAnnouncement";

const DashboardSuperVisor = () => {
  const [display, setDisplay] = useState(false);
  const [editDisplay, setEditDisplay] = useState(false);
  const [useData, setUseData] = useState();
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
  const createEditHandler = (id) => {
    setEditDisplay(true);
    setUseData(id)
  };
  const hiddenEditHandler = () => {
    setEditDisplay(false);
  };
  return (
    <Layout>
      <Dashboard onClick={() => createHandler()} courseData={courseData} onEditClick={(id) => createEditHandler(id)}/>
      {display && <CreateCourse display={() => hiddenHandler()} />}
     {editDisplay && <EditAnnouncement editDisplay={() => hiddenEditHandler()} useData={useData} />}
    </Layout>
  );
};

export default DashboardSuperVisor;
