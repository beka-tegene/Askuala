import React from "react";
import classes from "./Form.module.css";
const Form = () => {
  const [Email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  const submitHandler=(e) => {
    e.preventDefault();
    console.log(Email , subject , message);
    fetch("http://localhost:5000/Contact", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
       
        Email , subject , message
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href = "./";
      });

  }
  return (
    <form className={classes["form-container"]} onSubmit={submitHandler}>
      <div className={classes["form-control"]}>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={classes["form-control"]}>
        <label>subject</label>
        <input type="text" onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className={classes["form-control"]}>
        <label>message</label>
        <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <div className={classes["form-btn"]}>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Form;
