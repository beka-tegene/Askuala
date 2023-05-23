import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classes from "./Join.module.css";
const Join = () => {
  return (
    <div className={classes["join-container"]}>
      <div>
        <h1>we are here</h1>
        <p>our door is always open for a good cup of coffee</p>
      </div>
      <div className={classes["join-btn"]}>
        <Link to={'/register'}>join now</Link>
        <HashLink to={'/#contact'}>Contact us</HashLink>
      </div>
    </div>
  );
};

export default Join;
