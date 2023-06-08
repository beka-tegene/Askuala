import React, { useState } from "react";
import Layout from "../../../Component/Client/SuperVisor/Layout/Layout";
import Dashboard from "../../../Component/Client/SuperVisor/Dashboard/Dashboard";
import CreateCourse from "../../../Component/Client/SuperVisor/Dashboard/CreateAnnouncement";

const DashboardSuperVisor = () => {
  const [display, setDisplay] = useState(false);
  const createHandler = () => {
    setDisplay(true);
  };
  const hiddenHandler = () => {
    setDisplay(false);
  };
  return (
    <Layout>
      <Dashboard onClick={() => createHandler()} />
      {display && <CreateCourse display={()=>hiddenHandler()} />}
    </Layout>
  );
};

export default DashboardSuperVisor;
