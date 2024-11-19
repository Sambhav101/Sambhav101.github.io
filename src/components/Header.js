import React from "react";
import dp from "../images/dp.png";
import {
  FaGithub,
  FaLinkedin,
  FaRProject,
  FaInstagram,
  FaCaretDown
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <h1>Sambhav Shrestha</h1>
          <p>I think; therefore I am</p>
        </div>
        <div className="display-profile">
          <img src={dp} alt="profile pic" />
        </div>
        <div className="link-containers">
          <div className="icon">
            <a href="https://www.github.com/Sambhav101" target="_blank" rel="noreferrer">
              <FaGithub color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/Sambhav101" target="_blank" rel="noreferrer">
              <FaLinkedin color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.instagram.com/sambhav_shrestha1/" target="_blank" rel="noreferrer">
              <FaInstagram color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://rpubs.com/Sambhav101" target="_blank" rel="noreferrer">
              <FaRProject color="#fff" />
            </a>
          </div>
        </div>
        <div className="about_me_container">
          <div className="about-contents">
            <p>Welcome to my Portfolio</p>
            <p>
            I am an ML Infra Support Engineer at Meta with past 2 years experience as a 
            Software Development Engineer at Amazon and Tarifica. With a deep passion for AI, problem-solving, 
            and coding, I specialize in cloud computing & devops, AI model deployment, and distributed systems.
            Furthermore, I enjoy hiking, snowboarding, and pondering questions of the universe.
            </p>
            <span>
              <a href="#education">
                <FaCaretDown color="#fff" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
