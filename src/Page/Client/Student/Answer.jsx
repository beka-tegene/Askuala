import React, { useState } from "react";
import Layout from "../../../Component/Client/Student/Layout/Layout";
import Question from "../../../Component/Client/Student/QandA/Question";
import AskQuestion from "../../../Component/Client/Student/QandA/AskQuestion";

const Answer = () => {
  const [display , setDisplay]=useState(false)
  const createHandler= ()=>{
    setDisplay(true)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout>
      <Question onClick={()=>createHandler()}/>
      {display && <AskQuestion display={()=>hiddenHandler()}/>}
      
    </Layout>
  );
};

export default Answer;
