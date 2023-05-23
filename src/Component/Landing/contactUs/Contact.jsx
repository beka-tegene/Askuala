import React from "react";
import classes from "./Contact.module.css";
import bg from "../../../img/Rectangle 9095.png";
import bg1 from "../../../img/Rectangle 9096.png";
import Form from "./Form";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={classes["contact-container"]} id="contact">
      <div className={classes["contact"]}>
        <div className={classes["contact-us"]}>
          <h1>Contact Us</h1>
          <p>
            Fill free to contact us any time .we will get back to you as soon as
            we can !
          </p>
          <Form />
        </div>
        <div className={classes["contact-info"]}>
          <h1>contact info</h1>
          <div>
            <i>
              <MdEmail />
            </i>
            <span>ascuala2015@gmail.com</span>
          </div>
          <div>
            <i>
              <BsFillTelephoneFill />
            </i>
            <span>+251911757575</span>
          </div>
          <div>
            <i>
              <IoLocationSharp />
            </i>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3313652942948!2d38.761106774672314!3d9.033506291027999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8589e4c4a803%3A0xbae724e3b927f424!2sAddis%20Ababa%20University%20%7C%20Natural%20Sciences%20Campus!5e0!3m2!1sen!2set!4v1684744681683!5m2!1sen!2set"
              width="300"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <img src={bg} alt="bg" />
      <img src={bg1} alt="bg" />
    </div>
  );
};

export default Contact;
