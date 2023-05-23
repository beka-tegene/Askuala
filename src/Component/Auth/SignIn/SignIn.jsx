import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";
const LogIn = () => {
  const [emailHandle, setEmailHandle] = useState("");
  const [passwordHandle, setPasswordHandle] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(
      emailHandle.includes("@") &&
        emailHandle.includes(".") &&
        emailHandle.trim().length > 7 &&
        passwordHandle.trim().length > 7
    );
  }, [emailHandle, passwordHandle]);

  const ValidationEmailHandler = () => {
    setEmailValid(emailHandle.includes("@") && emailHandle.includes("."));
  };
  const ValidationPasswordHandler = () => {
    setPasswordValid(passwordHandle.trim().length > 7);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const email = emailHandle;
    // const password = passwordHandle;
    // await fetch("http://localhost:5000/login-user", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "login");
    //     if (
    //       data.status === "ok" &&
    //       data.role === "user" &&
    //       data.check === "Done"
    //     ) {
    //       const email = data.email;
    //       const fetchReq = async (email) => {
    //         const data = await axios.post("http://localhost:5000/GetReqnot", {
    //           email,
    //           ContentType: "application/json",
    //           Accept: "application/json",
    //         });
    //         var b = [];
    //         for (var i = 0; i < data.data.length; i++) {
    //           b = b.concat(data.data[i].Request);
    //         }
    //         const educationData = b.filter(
    //           (item) => item.Payment === "Not Paid"
    //         );
    //         window.localStorage.setItem("requess", educationData.length);
    //       };
    //       const fetchData = async (email) => {
    //         const data = await axios.post("http://localhost:5000/Getnot", {
    //           email,
    //           ContentType: "application/json",
    //           Accept: "application/json",
    //         });
    //         //   setNotif(data.data[0].Notification.length);

    //         window.localStorage.setItem(
    //           "notif",
    //           data.data[0].Notification.length
    //         );
    //       window.location.href = "./dashboard";

    //       };
    //       fetchReq(email);
    //       fetchData(email);
    //       window.localStorage.setItem("token", data.data);
    //       window.localStorage.setItem("email", data.email);
    //       window.localStorage.setItem("password", data.password);
    //       window.localStorage.setItem("basicInfo", data.check);
    //       window.localStorage.setItem("basicInfo", data.check);
    //       window.localStorage.setItem("userName", data.fullName);
    //       // alert("welcome " + data.fullName);
    //       // window.location.href = "./dashboard";
    //     } else if (
    //       data.status === "ok" &&
    //       data.role === "user" &&
    //       data.check === "notDone"
    //     ) {
    //       const fetchReq = async (email) => {
    //         const data = await axios.post("http://localhost:5000/GetReqnot", {
    //           email,
    //           ContentType: "application/json",
    //           Accept: "application/json",
    //         });
    //         var b = [];
    //         for (var i = 0; i < data.data.length; i++) {
    //           b = b.concat(data.data[i].Request);
    //         }
    //         // setEdirs(b);
    //         const educationData = b.filter(
    //           (item) => item.Payment === "Not Paid"
    //         );
    //         window.localStorage.setItem("requess", educationData.length);
    //       };
    //       const fetchData = async (email) => {
    //         const data = await axios.post("http://localhost:5000/Getnot", {
    //           email,
    //           ContentType: "application/json",
    //           Accept: "application/json",
    //         });
    //         // setNotif(data.data[0].Notification.length);

    //         window.localStorage.setItem(
    //           "notif",
    //           data.data[0].Notification.length
    //         );
    //       };
    //       fetchReq(email);
    //       fetchData(email);
    //       // const newU = data.email;
    //       window.localStorage.setItem("token", data.data);
    //       window.localStorage.setItem("email", data.email);
    //       window.localStorage.setItem("password", data.password);
    //       window.localStorage.setItem("basicInfo", data.check);
    //       window.localStorage.setItem("userName", data.fullName);
    //       alert(data.check);
    //       window.location.href = "./update-account";
    //     } else if (
    //       data.status === "ok" &&
    //       data.role === "user" &&
    //       data.check === "notVerified"
    //     ) {
    //       alert("not verified ");
    //     }
    //     if (data.status === "ok" && data.role === "admin") {
    //       alert("login successful admin");
    //       window.localStorage.setItem("token", data.data);
    //       window.location.href = "./admin-dashboard";
    //     }
    //     if (data.status !== "ok") {
    //       alert("lwrong password or username");

    //     }
    //   });
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
            <label htmlFor="username">E-mail</label>
            <input
              type={"email"}
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
                  * please include an '@' and '.' in the email address
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
            <Link to={"/forget"}>Forget Password?</Link>
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
