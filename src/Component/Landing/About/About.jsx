import React from "react";
import coins from "../../../img/vecteezy_student-holding-book-and-pen-study_9197995.jpg";
import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes["about-container"]} id="about">
      <div className={classes["about-circle"]}></div>

      <div className={classes["about"]}>
        <div className={classes["about-img"]}>
          <img src={coins} alt="img" />
        </div>
        <div className={classes["about-paragraph"]}>
          <h1>About Us</h1>
          <hr />
          <p>
            A student developer, in the context of a student management system,
            refers to a student who is involved in the development or
            programming of the system. This student may have a role in
            designing, coding, testing, or maintaining the software application.
            Overall, student developers involved in building a student
            management system benefit from practical learning, collaboration,
            and the opportunity to contribute to their educational community. It
            helps them develop valuable skills and provides a platform to apply
            their knowledge in a real-world setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
