import React from "react";
import classes from "./Reset.module.css";
import logo1 from "../../../img/Subtract.png";
import logo2 from "../../../img/eDirr.png";
import { useState } from "react";
import Loading from "../../../pages/Loading";
const Reset = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [confirmPasswordValid, setConfirmPasswordValid] = useState();
  const [valid, setValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const email = localStorage.getItem("forgetemail");

  const ValidationPasswordHandler = () => {
    setPasswordValid(newPassword.trim().length > 7);
  };
  const ValidationConfirmPasswordHandler = () => {
    setConfirmPasswordValid(confirmNewPassword.trim().length > 7);
    setValid(false)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newPassword, confirmNewPassword);
    if (newPassword === confirmNewPassword) {
      setIsLoading(false)
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
    } else {
      setValid(true);
    }
  };
  return (
    <div className={classes["reset-container"]}>
      <div className={classes["reset-logo"]}>
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
      </div>
      <div className={classes["reset-form"]}>
        <h1>reset password</h1>
        <form className={classes["reset"]} onSubmit={submitHandler}>
          <div
            className={`${classes["reset-formControl"]} ${
              passwordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">New password</label>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              onBlur={ValidationPasswordHandler}
            />
            {passwordValid === false && (
              <>
                <span>* password must contend more than 8 character</span>
              </>
            )}
          </div>
          <div
            className={`${classes["reset-formControl"]} ${
              confirmPasswordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">Confirm New password</label>
            <input
              type="password"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              onBlur={ValidationConfirmPasswordHandler}
            />
            {confirmPasswordValid === false && (
              <span>* password must contend more than 8 character</span>
            )}
            {valid && <span>* please make sure your password is the same</span>}
          </div>
          <div className={classes["reset-btn"]}>
            <button type="submit">
              {isLoading && "Submit"} {!isLoading && <Loading />}
            </button>
          </div>
        </form>
      </div>
      <div className={classes["reset-footer"]}>
        <p>Designed by Edirr team 2023. DanEnergyEthiopia ,</p>
        <p>&copy;CopyRight All Reserved</p>
      </div>
    </div>
  );
};

export default Reset;
