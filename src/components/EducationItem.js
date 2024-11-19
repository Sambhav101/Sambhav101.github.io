import React from "react";

const EducationItem = ({ school }) => {
  return (
    <div className="schools-list">
      {school.map((item) => {
        return (
          <div className="school" key={item.id}>
            <div className="school-icon">
              <img className="college-logo" src={item.logo}></img>
            </div>
            <div className="school-description">
              <h3>{item.title}</h3>
              <div className="school-info">
                <p>{item.major}</p>
                <p>{item.grad}</p>
                <p>
                  <strong>GPA {item.gpa}</strong>
                </p>
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

export default EducationItem;
