import React from "react";
import experiences from "../components/Experiences";
import ExperienceItem from "./ExperienceItem.js";
import { useState } from "react";

const Experience = () => {
  const [work, setworks] = useState(experiences);
  return (
    <div className="experience-page">
      <div id="experience"></div>
      <div className="experience-title">
        <h1>Professional Experiences</h1>
      </div>
      <div className="experience-content">
        <div className="experience-data">
          <ExperienceItem work={work} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
