import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <div className="contact-head">
        <h1 className="contact-title">Contact me</h1>
      </div>
      <div className="contact-body">
        <div className="contact-items">
          <h3>You can also reach me at:</h3>
          <div className="contact-info">
            <FaEnvelope />
            <span>sambhavshrestha1@gmail.com</span>
          </div>
          <div className="contact-info">
            <FaPhoneAlt />
            <span>+1(929)3196443</span>
          </div>
          <div className="contact-info">
            <FaMapMarkerAlt />
            <span>3322 84th St, Jackson Heights, NY, 11372</span>
          </div>
        </div>
        <div className="forms-container">
          <div className="form-title">
            <h1>Send me a message ....</h1>
          </div>
          <form className="form-elements" action="#">
            <input
              className="input-box"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <input
              className="input-box"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <input
              className="input-box"
              type="text"
              id="email"
              name="emailaddress"
              placeholder="Your email ....."
            />

            <textarea
              className="text-box input-box"
              id="subject"
              name="subject"
              placeholder="Write something.."
            />
            <input className="button-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="footer">
        <p>© 2021 Sambhav Shrestha. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Contact;
