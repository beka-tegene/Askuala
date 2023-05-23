import React from "react";
import classes from "./Service.module.css";
const Service = () => {
  return (
    <div className={classes["service-container"]} id="service">
      <div className={classes["service-blur"]}></div>
      <h1 className={classes["service-header"]}>Services</h1>
      <div className={classes["service"]}>
        <div className={classes["service-card"]}>
          <h2>Student</h2>
          <p>
            Learning Opportunity: Involving student developers in the
            development of a student management system provides them with a
            valuable learning experience. It allows them to gain hands-on
            practical knowledge in software development, project management, and
            teamwork. Collaboration: Student developers often work alongside
            professional developers or faculty members who guide and mentor them
            throughout the development process. This collaboration promotes
            knowledge sharing, skill development, and fosters a sense of
            teamwork. Real-World Application: Developing a student management
            system gives student developers the chance to work on a real-world
            project that has direct relevance to educational institutions. They
            can apply the concepts and theories they learn in their academic
            studies to a practical scenario. 
          </p>
        </div>
        <div className={classes["service-card"]}>
          <h2>Teacher</h2>
          <p>
            Learning Opportunity: Involving student developers in the
            development of a student management system provides them with a
            valuable learning experience. It allows them to gain hands-on
            practical knowledge in software development, project management, and
            teamwork. Collaboration: Student developers often work alongside
            professional developers or faculty members who guide and mentor them
            throughout the development process. This collaboration promotes
            knowledge sharing, skill development, and fosters a sense of
            teamwork. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
