import React from "react";
import classes from "./SignUp.module.css";
const Input = (props) => {
  return (
    <div
      className={`${classes["form-control"]} ${
        props.valid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="">{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.valid === false && (
        <>
          <span>{props.text1}</span>
          <span>{props.text2}</span>
        </>
      )}
    </div>
  );
};

export default Input;
