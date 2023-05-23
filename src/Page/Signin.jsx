import React from "react";
import Layout from "../Component/Layout/Layout";
import Footer from "../Component/Footer/Footer";
import LogIn from "../Component/Auth/SignIn/SignIn";

const SignIn = () => {
  return (
      <Layout>
          <LogIn />
      <Footer />
    </Layout>
  );
};

export default SignIn;
