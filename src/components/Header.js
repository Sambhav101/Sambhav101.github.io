import React from "react";
import dp from "../images/dp.png";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="header">
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: "#ffe123",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 4,
                color: "#f3a5bc",
              },
            },
            opacity: {
              value: 0.5,
            },
            line_linked: {
              distance: 160,
              opacity: 0.2,
            },
            interactivity: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              detect_on: "window",
            },
          },
        }}
      />
      <div className="header-container">
        <div className="header-top">
          <h1>Sambhav Shrestha</h1>
          <p>Life is a learning process</p>
        </div>
        <div className="display-profile">
          <img src={dp} alt="profile pic" />
        </div>
        <div className="link-containers">
          <div className="icon">
            <a href="https://www.github.com/Sambhav101" target="_blank">
              <FaGithub color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/Sambhav101" target="_blank">
              <FaLinkedin color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/i_m_sambhav" target="_blank">
              <FaTwitter color="fff" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.instagram.com/sambhav_shrestha1/"
              target="_blank"
            >
              <FaInstagram color="#fff" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.facebook.com/sambhav.shrestha.101"
              target="_blank"
            >
              <FaFacebook color="#fff" />
            </a>
          </div>
        </div>
        <div className="about_me_container">
          <div className="about-contents">
            <p>Welcome to my portfolio</p>
            <p>
              Hi, I am Sambhav, and I am Software/Data Engineering Intern at Tarifica. I am
              senior at St. Joseph's College New York double majoring in
              computer science and mathematics. I am also currently doing research in Quantum Computing.
              I am a fan of creativity and admirer of technology . I love reading research papers and 
              philosophical 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
