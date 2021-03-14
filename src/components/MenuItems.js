import React from "react";

const MenuItems = ({ menuItem }) => {
  return (
    <div className="projects-list">
      {menuItem.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img class="static" src={item.image} alt="" />
              <img class="active" src={item.gif} alt="" />
              <div className="overlay">
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </div>
            </div>
            <div className="project-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
