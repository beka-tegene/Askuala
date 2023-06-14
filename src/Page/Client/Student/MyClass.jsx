import React, { useState } from "react";
import Layout from "../../../Component/Client/Student/Layout/Layout";
import Class from "../../../Component/Client/Student/My Class/Class";
import ClassDetail from "../../../Component/Client/Student/My Class/ClassDetail";

const MyClass = () => {
  const [display , setDisplay]=useState(false)
  const [data , setData] = useState()
  const createHandler= (item)=>{
    setDisplay(true)
    setData(item)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout>
      <Class onClick={(item)=>createHandler(item)} />
      {display && <ClassDetail display={()=>hiddenHandler()} data={data} />}
    </Layout>
  );
};

export default MyClass;
