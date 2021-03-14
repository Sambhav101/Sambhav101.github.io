import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ school }) => {
  return (
    <div className="schools-list">
      {school.map((item) => {
        return (
          <div className="school" key={item.id}>
            <div className="school-icon">
              <FaGraduationCap className="graduation-cap" />
            </div>
            <div className="school-description">
              <h3>{item.title}</h3>
              <div className="school-info">
                <p>{item.major}</p>
                <p>{item.grad}</p>
                <p>GPA {item.gpa}</p>
              </div>
              <div className="courses">
                <p>Relevant courses: {item.courses}</p>
                <p>Awards: {item.awards}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
