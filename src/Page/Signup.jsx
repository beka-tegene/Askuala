import React from "react";
import Layout from "../Component/Layout/Layout";
import Footer from "../Component/Footer/Footer";
import Register from "../Component/Auth/SignUp/SignUp";

const SignUp = () => {
  return (
      <Layout>
          <Register />
      <Footer />
    </Layout>
  );
};

export default SignUp;
