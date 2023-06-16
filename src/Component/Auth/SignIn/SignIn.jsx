import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Auth";
const LogIn = () => {
  const dispatch = useDispatch();
  const [emailHandle, setEmailHandle] = useState("");
  const [passwordHandle, setPasswordHandle] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    setFormValid(
      emailHandle.includes("/") &&
        emailHandle.trim().length > 7 &&
        passwordHandle.trim().length > 7
    );
  }, [emailHandle, passwordHandle]);

  const ValidationEmailHandler = () => {
    setEmailValid(emailHandle.includes("/"));
  };
  const ValidationPasswordHandler = () => {
    setPasswordValid(passwordHandle.trim().length > 7);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailHandle
    const password = passwordHandle
    dispatch(
      login({
        data: { email, password},
      })
    );
  };

  return (
    <div className={classes["login-container"]}>
      <div className={classes["login"]}>
        <h1 className={classes["login-h1"]}>Sign In</h1>
        <h1 className={classes["login-h4"]}>
          Welcome back! Glad to see you,Again!
        </h1>
        <form className={classes["login-form"]} onSubmit={handleSubmit}>
          <div
            className={`${classes["form-control"]} ${
              emailValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="username">ID</label>
            <input
              type={"text"}
              id="userName"
              autoComplete={"off"}
              value={emailHandle}
              onChange={(e) => {
                setEmailHandle(e.target.value);
              }}
              onBlur={ValidationEmailHandler}
            />
            {emailValid === false && (
              <>
                <span>
                  * please include an '/'  in the ID address
                </span>
              </>
            )}
          </div>
          <div
            className={`${classes["form-control"]} ${
              passwordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type={"password"}
              id="password"
              value={passwordHandle}
              onChange={(e) => {
                setPasswordHandle(e.target.value);
              }}
              onBlur={ValidationPasswordHandler}
            />
            {passwordValid === false && (
              <>
                <span>* please make sure to fill the required filed </span>
                <span>* password must contend more than 8 character</span>
              </>
            )}
          </div>
          <div className={classes.forget}>
            <Link to={"/login"}>Forget Password?</Link>
          </div>
          <div className={classes["login-btn"]}>
            {formValid ? (
              <button type="submit" className={`${classes.button}`}>
                Login
              </button>
            ) : (
              <button className={`${classes.btn_dis}`} disabled>
                Login
              </button>
            )}
          </div>
        </form>
        <p className={classes["login-p"]}>
          Don't have an account? <Link to={"/register"}>Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
