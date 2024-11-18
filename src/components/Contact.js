import React from "react";
import { FaEnvelope} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <h1 className="contact-title">Contact me</h1>
      <div className="contact-body">
        <div className="contact-text">
          <p>
            I am always seeking for new challenges and opportunities. 
            I hope you enjoyed exploring my work and got a glimpse into my passion for software engineering.
          </p>
          <p>
            If you liked what you saw and would like to reach out to me, please
            feel free to shoot me a message at my email. I will try getting back to you as
            soon as possible.
          </p>
        </div>
        <div className="contact-items">
          <div className="contact-info">
            <FaEnvelope />
            <span>
              <a href="mailto: sambhavshrestha111@gmail.com">
                sambhavshrestha111@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer">© 2021 Sambhav Shrestha. All Rights Reserved</div>
    </div>
  );
};

export default Contact;
