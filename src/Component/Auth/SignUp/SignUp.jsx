import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { signup } from "../../../Store/Auth";
import Input from "./Input";
const Register = () => {
  const dispatch = useDispatch();
  const [idValid, setIdValid] = useState();
  const [fullNameValid, setFullNameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [phoneNumberValid, setPhoneNumberValid] = useState();
  const [genders, setGender] = useState();
  const [roleValid, setRoleValid] = useState();
  const [departmentValid, setDepartmentValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [cPasswordValid, setCPasswordValid] = useState();
  const [check, setCheck] = useState();
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    id: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    role: "",
    department: "",
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
  const onGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = form.id;
    const FullName = form.fullName;
    const email = form.email;
    const phoneNumber = form.phoneNumber;
    const gender = genders;
    const role = form.role;
    const department = form.department;
    const password = form.password;
    const cPassword = form.cpassword;
    dispatch(
      signup({
        data: {
          id,
          FullName,
          email,
          phoneNumber,
          gender,
          role,
          department,
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
          <Input
            valid={idValid}
            name={"ID"}
            type={"text"}
            id={"id"}
            value={form.id}
            onChange={handleChange}
            onBlur={() => setIdValid(form.id.trim().length === 11)}
            text1={"* please make sure to fill the required filed"}
            text2={"* id must contend equal to 11 character"}
          />
          <Input
            valid={fullNameValid}
            name={"Full Name"}
            type={"text"}
            id={"fullName"}
            value={form.fullName}
            onChange={handleChange}
            onBlur={() => setFullNameValid(form.fullName.trim().length >= 6)}
            text1={"* please make sure to fill the required filed"}
          />
          <Input
            valid={emailValid}
            name={"Email"}
            type={"email"}
            id={"email"}
            value={form.email}
            onChange={handleChange}
            onBlur={() =>
              setEmailValid(
                form.email.includes("@") && form.email.includes(".")
              )
            }
            text1={"* please make sure to fill the required filed"}
            text2={"* please include an '@' and '.' in the email address"}
          />
          <Input
            valid={phoneNumberValid}
            name={"Phone Number"}
            type={"tel"}
            id={"phoneNumber"}
            value={form.phoneNumber}
            onChange={handleChange}
            onBlur={() =>
              setPhoneNumberValid(
                form.phoneNumber.trim().length >= 10 &&
                  form.phoneNumber.includes("+251")
              )
            }
            text1={"* please make sure to fill the required filed"}
            text2={
              "* phone number must contend more than 10 character & start with +251 "
            }
          />
          <div className={`${classes["form-controlss"]}`}>
            <label htmlFor="Gender">Gender</label>
            <div>
              <input
                type={"radio"}
                // id="gender"
                name="Gender"
                value={"male"}
                checked={genders === "male"}
                // onChange={handleChange}
                onChange={onGenderChange}
              />
              <label htmlFor="">Male</label>
            </div>
            <div>
              <input
                type={"radio"}
                // id="gender"
                name="Gender"
                value={"female"}
                checked={genders === "female"}
                // onChange={handleChange}
                onChange={onGenderChange}
              />
              <label htmlFor="">Female</label>
            </div>
          </div>
          <div
            className={`${classes["form-control"]} ${
              roleValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="">Role</label>
            <select
              name="role"
              id="role"
              value={form.role}
              onChange={handleChange}
              onBlur={() => setRoleValid(form.role)}
            >
              <option disabled selected></option>
              <option value="Admin">Admin</option>
              <option value="SuperVisor">SuperVisor</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            {roleValid === false && (
              <>
                <span>* please make sure to fill the required filed</span>
              </>
            )}
          </div>
          {(form.role === "Student" || form.role === "Teacher") && (
            <div
              className={`${classes["form-control"]} ${
                departmentValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="">Department</label>
              <select
                name="department"
                id="department"
                value={form.department}
                onChange={handleChange}
                onBlur={() => setDepartmentValid(form.department)}
              >
                <option disabled selected></option>
                <option value="Computer engineering">
                  Computer engineering
                </option>
                <option value="Information system">Information system</option>
                <option value="electrical engineering">
                  electrical engineering
                </option>
                <option value="mechanical engineering">
                  mechanical engineering
                </option>
              </select>
              {departmentValid === false && (
                <>
                  <span>* please make sure to fill the required filed</span>
                </>
              )}
            </div>
          )}
          <Input
            valid={passwordValid}
            name={"Password"}
            type={"password"}
            id={"password"}
            value={form.password}
            onChange={handleChange}
            onBlur={() => setPasswordValid(form.password.trim().length > 7)}
            text1={"* please make sure to fill the required filed"}
            text2={"* password must contend more than 8 character "}
          />
          <Input
            valid={cPasswordValid}
            name={"Confirm Password"}
            type={"password"}
            id={"cpassword"}
            value={form.cpassword}
            onChange={handleChange}
            onBlur={() => setCPasswordValid(form.password.trim().length > 7)}
            text1={"* please make sure to fill the required filed"}
            text2={
              "* password must contend more than 8 character && * please make sure your password is the same "
            }
          />
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
              <Link to={"/register"}>Terms of Serves</Link>
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
