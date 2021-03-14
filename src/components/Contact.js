import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <h1 className="contact-title">Contact me</h1>
      <div className="contact-body">
        <div className="contact-text">
          <p>
            I find the field of artificial intelligence extremely fascinating.
            Furthermore, I am constantly enriching myself with new skills and
            challenging myself to limits. Currently, I am seeeking an internship
            or part-time job in the same field.
          </p>
          <p>
            If you liked what you saw and would like to reach out to me, please
            feel free to shoot me a message. I will try getting back to you as
            soon as possible.
          </p>
        </div>
        <div className="contact-items">
          <div className="contact-info">
            <FaEnvelope />
            <span>
              <a href="mailto: sambhavshrestha1@gmail.com">
                sambhavshrestha1@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-info">
            <FaPhoneAlt />
            <span>+1(929)3196443</span>
          </div>
          <div className="contact-info">
            <FaMapMarkerAlt />
            <span>Jackson Heights, NY, 11372</span>
          </div>
        </div>
      </div>
      <div className="footer">© 2021 Sambhav Shrestha. All Rights Reserved</div>
    </div>
  );
};

export default Contact;
