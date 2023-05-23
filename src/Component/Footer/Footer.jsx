import React from "react";
import classes from "./Footer.module.css";
import logo from "../../img/Group 1499.svg";
import { RiAppStoreFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Footer = () => {
  const [Email, setEmail] = React.useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Email);
  };
  return (
    <div className={classes["footer-container"]} id="footer">
      <div className={classes["footer-blur"]}></div>
      <div className={classes["footer-top"]}>
        <div className={classes["footer-brand"]}>
          <img src={logo} alt="" />
        </div>
        <div className={classes["footer-app"]}>
          <h2>Mobile App</h2>
          <i>
            <IoLogoGooglePlaystore />
            <span>Play store</span>
          </i>
          <i>
            <RiAppStoreFill />
            <span>App store</span>
          </i>
        </div>
        <div className={classes["footer-service"]}>
          <h2>Service</h2>
          <HashLink to={"/#service"}>Student</HashLink>
          <HashLink to={"/#service"}>Teacher</HashLink>
        </div>
        <div className={classes["footer-company"]}>
          <h2>Company</h2>
          <HashLink to={"/#about"}>About Us</HashLink>
          <HashLink to={"/#contact"}>Contact Us</HashLink>
        </div>
        <div className={classes["footer-input"]}>
          <form onSubmit={submitHandler}>
            <input
              type={"text"}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div className={classes["footer-bottom"]}>
        <p>
          Designed by Askuala team 2023. Addis Ababa University ,&copy;CopyRight All
          Reserved
        </p>
        <div>
          <Link
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <AiFillFacebook />
          </Link>
          <Link
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          >
            <AiFillInstagram />{" "}
          </Link>
          <Link
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          >
            <AiFillTwitterCircle />
          </Link>
          <Link
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
