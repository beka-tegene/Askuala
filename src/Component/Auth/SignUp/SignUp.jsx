import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { signup } from "../../../Store/Auth";
const Register = () => {
  const dispatch = useDispatch()
  const [fullNameValid, setFullNameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [cPasswordValid, setCPasswordValid] = useState();
  const [check, setCheck] = useState();
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  useEffect(() => {
    setFormValid(
      form.fullName.trim().length >= 6 &&
        form.email.includes("@") &&
        form.email.includes(".") &&
        form.email.trim().length > 7 &&
        form.password.trim().length > 7 &&
        form.cpassword.trim().length > 7
      // form.password === form.cpassword
    );
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const FullName = form.fullName
    const email = form.email
    const password = form.password
    const cPassword = form.cpassword;
    dispatch(
      signup({
        data: {
          FullName,
          email,
          password,
          cPassword,
        },
      })
    );
  };
  return (
    <div className={classes["sign-container"]}>
      <div className={classes["sign"]}>
        <h1 className={classes["sign-h1"]}>Sign Up</h1>
        <h4 className={classes["sign-h4"]}>Hello! Register to get started</h4>
        <form className={classes["sign-form"]} onSubmit={handleSubmit}>
          <div
            className={`${classes["form-control"]} ${
              fullNameValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">full name</label>
            <input
              type={"text"}
              id="fullName"
              value={form.fullName}
              onChange={handleChange}
              onBlur={() => setFullNameValid(form.fullName.trim().length >= 6)}
            />
            {fullNameValid === false && (
              <span>* please make sure to fill the required filed</span>
            )}
          </div>
          <div
            className={`${classes["form-control"]} ${
              emailValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">Email</label>
            <input
              type={"email"}
              id="email"
              value={form.email}
              onChange={handleChange}
              onBlur={() =>
                setEmailValid(
                  form.email.includes("@") && form.email.includes(".")
                )
              }
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
            <label htmlFor="">Password</label>
            <input
              type={"password"}
              id="password"
              value={form.password}
              onChange={handleChange}
              onBlur={() => setPasswordValid(form.password.trim().length > 7)}
            />
            {passwordValid === false && (
              <>
                <span>* please make sure to fill the required filed </span>
                <span>* password must contend more than 8 character</span>
              </>
            )}
          </div>
          <div
            className={`${classes["form-control"]} ${
              cPasswordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">Confirm Password</label>
            <input
              type={"password"}
              id="cpassword"
              value={form.cpassword}
              onChange={handleChange}
              onBlur={() => setCPasswordValid(form.password.trim().length > 7)}
            />
            {cPasswordValid === false && (
              <span>* please make sure your password is the same</span>
            )}
            {cPasswordValid === false && (
              <>
                <span>* please make sure to fill the required filed </span>
                <span>* password must contend more than 8 character</span>
              </>
            )}
          </div>
          <div className={classes["form-controls"]}>
            <input
              type={"checkbox"}
              id="check"
              onChange={(e) => {
                setCheck(e.target.checked);
              }}
            />
            <span>
              By continuing, you agree to our
              <Link to={"/"}>Terms of Serves</Link>
            </span>
          </div>
          <div className={classes["sign-btn"]}>
            {check === true && formValid ? (
              <button type="submit" className={`${classes.button}`}>
                Sign up
              </button>
            ) : (
              <button className={`${classes.btn_dis}`} disabled>
                Sign up
              </button>
            )}
          </div>
        </form>
        <p className={classes["sign-p"]}>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
