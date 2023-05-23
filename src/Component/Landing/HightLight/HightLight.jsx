import React from 'react'
import classes from "./HightLight.module.css";
import {
  MdOutlineSupervisedUserCircle,
  MdOutlineSchool,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
const HightLight = () => {
  return (
    <div className={classes["hight-container"]}>
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSupervisedUserCircle />
        </i>
        <span>10,026+</span>
        <hr />
        <span>users</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <FaChalkboardTeacher />
        </i>
        <span>106+</span>
        <hr />
        <span>Teacher</span>
      </div>
      
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSchool />
        </i>
        <span>6,053+</span>
        <hr />
        <span>Student</span>
      </div>
      
    </div>
  );
}

export default HightLight