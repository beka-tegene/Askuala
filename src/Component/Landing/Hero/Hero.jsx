import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../../img/Project_66-02.jpg";
import Button from "../../UI/Button";
const Hero = () => {
  return (
    <>
      <div className={classes["hero-container"]}>
        <div className={classes["hero-left"]}>
          <div className={classes["hero-blur"]}></div>
          <div className={classes["hero-text"]}>
            <h1>Askuala Management System </h1>
            <p>
              A student management system is a software application or platform
              that helps educational institutions manage and streamline various
              administrative tasks related to students. It serves as a
              centralized database and toolset for handling student-related
              information, such as admissions, enrollments, attendance, grades,
              scheduling, and communication.
            </p>
            <div className={classes["hero-btn"]}>
              <Button />
            </div>
          </div>
        </div>
        <div className={classes["hero-img"]}>
          <img src={heroImg} alt="hero Img" />
        </div>
      </div>

    </>
  );
};

export default Hero;
