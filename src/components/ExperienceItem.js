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
              <p>
                <strong>{item.duration}</strong>
              </p>
              <div className="work-description">
                <ul>
                  <li>{item.desc1}</li>
                  <li>{item.desc2}</li>
                  <li>{item.desc3}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceItem;
