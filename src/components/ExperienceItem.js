import React from "react";

const ExperienceItem = ({ work }) => {
  return (
    <div className="experience-list">
      {work.map((item) => {
        return (
          <div className="work" key={item.id}>
            <div className="work-icon">
              <img className="work-logo" src={item.logo}></img>
            </div>
            <div className="work-description">
              <h3>{item.title}</h3>
              <div className="work-info">
                <p>{item.company}</p>
                <p>{item.duration}</p>
              </div>
              <div className="work-description">
                <p>Relevant courses: {item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceItem;
