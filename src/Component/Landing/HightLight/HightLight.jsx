import React, { useEffect } from 'react'
import classes from "./HightLight.module.css";
import {
  MdOutlineSupervisedUserCircle,
  MdOutlineSchool,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Store/Auth';
const HightLight = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const Student = users?.filter((item) => item.role === "Student");
  const Teacher = users?.filter((item) => item.role === "Teacher");
  return (
    <div className={classes["hight-container"]}>
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSupervisedUserCircle />
        </i>
        <span>{users?.length}+</span>
        <hr />
        <span>users</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <FaChalkboardTeacher />
        </i>
        <span>{Teacher.length}+</span>
        <hr />
        <span>Teacher</span>
      </div>
      
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSchool />
        </i>
        <span>{Student.length}+</span>
        <hr />
        <span>Student</span>
      </div>
      
    </div>
  );
}

export default HightLight