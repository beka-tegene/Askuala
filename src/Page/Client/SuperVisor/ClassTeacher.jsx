import React, { useState } from "react";
import Layout from "../../../Component/Client/SuperVisor/Layout/Layout";
import TeacherClass from "../../../Component/Client/SuperVisor/Class/TeacherClass";
import ClassDetail from "../../../Component/Client/SuperVisor/Class/ClassDetail";

const ClassTeacher = () => {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState();
  const createHandler = (item) => {
    setDisplay(true);
    setData(item);
  };
  const hiddenHandler = () => {
    setDisplay(false);
  };
  return (
    <Layout>
      <TeacherClass onClick={(item) => createHandler(item)} />
      {display && <ClassDetail display={() => hiddenHandler()} data={data} />}
    </Layout>
  );
};

export default ClassTeacher;
