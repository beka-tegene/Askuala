import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <section className={classes.layout}>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </section>
  );
};

export default Layout;
