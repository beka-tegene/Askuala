import React from "react";
import classes from "./Reset.module.css";
import logo from "../../../img/Group 1499.svg";
import { useState } from "react";
const Reset = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const email = localStorage.getItem("forgetemail");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newPassword, confirmNewPassword);
    if (newPassword === confirmNewPassword) {
      fetch("http://localhost:5000/ResetPassword", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({  
          email,
          newPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          window.location.href = "/login";
        });
    }
  };
  return (
    <div className={classes["reset-container"]}>
      <div className={classes["reset-logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes["reset-form"]}>
        <h1>reset password</h1>
        <form className={classes["reset"]} onSubmit={submitHandler}>
          <div
            className={`${classes["reset-formControl"]} `}
          >
            <label htmlFor="">New password</label>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div
            className={`${classes["reset-formControl"]} `}
          >
            <label htmlFor="">Confirm New password</label>
            <input
              type="password"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div className={classes["reset-btn"]}>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={classes["reset-footer"]}>
        <p>Designed by askuala team 2023. Ethiopia ,</p>
        <p>&copy;CopyRight All Reserved</p>
      </div>
    </div>
  );
};

export default Reset;
