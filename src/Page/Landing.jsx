import React from "react";
import Footer from "../Component/Footer/Footer";
import Contact from "../Component/Landing/contactUs/Contact";
import Join from "../Component/Landing/Join/Join";
import Service from "../Component/Landing/Service/Service";
import About from "../Component/Landing/About/About";
import HightLight from "../Component/Landing/HightLight/HightLight";
import Hero from "../Component/Landing/Hero/Hero";
import Layout from "../Component/Layout/Layout";
const Landing = () => {
  return (
    <Layout>
      <Hero />
      <HightLight />
      <About />
      <Service />
      <Join />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Landing;
