import React from "react";
import Layout from "../../../Component/Client/Teacher/Layout/Layout";
import Hosted from "../../../Component/Client/Teacher/Hosted/Hosted";
import ClassDetails from "../../../Component/Client/Teacher/Hosted/ClassDetail";
import { useState } from "react";

const HostedClass = () => {
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
      <Hosted onClick={(item)=>createHandler(item)}/>
      {display && <ClassDetails display={()=>hiddenHandler()} data={data} />}
    </Layout>
  );
};

export default HostedClass;
