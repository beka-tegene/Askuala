import React from "react";
import Layout from "../../Component/Admin/Layout/Layout";
import Members from "../../Component/Admin/Member/Member";
import EditUser from "../../Component/Admin/Member/EditUsers";
import { useState } from "react";

function MemberAdmin() {
  const [display , setDisplay]=useState(false)
  const [data , setData]=useState(false)
  const createHandler= (id)=>{
    setDisplay(true)
    setData(id)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout>
      <Members onClick={(id)=>createHandler(id)}/>
      {display && <EditUser display={()=>hiddenHandler()} data={data}/>}
    </Layout>
  );
}

export default MemberAdmin;
