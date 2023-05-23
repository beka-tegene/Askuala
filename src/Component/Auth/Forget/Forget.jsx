import React, {  useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Forget.module.css";
import axios from "axios";
import Loading from "../../../pages/Loading";
const Forget = () => {
  const [emailHandle, setEmailHandle] = useState();
  const [emailValid, setEmailValid] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const ValidationEmailHandler = () => {
    setEmailValid(emailHandle.includes("@") && emailHandle.includes("."));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("forgetemail", emailHandle);
    setIsLoading(false);
    if (emailHandle) {
      axios
        .get("http://localhost:5000/api/forgot-password?email=" + emailHandle)
        .then((response) => {
          console.log(response);
          alert("Email Successfully Sent\n Check your Email Address!");
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <div className={classes["login-container"]}>
      <div className={classes["login"]}>
        <h1 className={classes["login-h1"]}>Forget password</h1>
        <h1 className={classes["login-h4"]}>
          Welcome back! Glad to see you,Again!
        </h1>
        <form className={classes["login-form"]} onSubmit={submitHandler}>
          <div
            className={`${classes["form-control"]} ${
              emailValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="username">E-mail</label>
            <input
              type={"email"}
              id="username"
              onChange={(e) => {
                setEmailHandle(e.target.value);
              }}
              onBlur={ValidationEmailHandler}
            />
            {emailValid === false && (
              <span>* please include an '@' and '.' in the email address</span>
            )}
          </div>

          <div className={classes["login-btn"]}>
            <button type="submit" className={`${classes.button}`}>
              {isLoading && "reset my password"} {!isLoading && <Loading />}
            </button>
          </div>
        </form>
        <p className={classes["login-p"]}>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Forget;
