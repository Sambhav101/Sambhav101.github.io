import React from "react";
import schools from "../components/Schools.js";
import Education from "../components/Education.js";
import Fade from "react-reveal/Fade";
import { useState } from "react";

const Experience = () => {
  const [school, setschools] = useState(schools);
  return (
    <div className="experience-page">
      <div id="experience"></div>
      <div className="education-title">
        <h1>Education</h1>
      </div>
      <div className="education-data">
        <Education school={school} />
      </div>
    </div>
  );
};

export default Experience;
