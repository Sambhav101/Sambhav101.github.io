import React from "react";
import Categories from "../components/Categories.js";
import MenuItems from "../components/MenuItems.js";
import projects from "../components/AllProjects.js";
import { useState } from "react";

const allCategories = [
  "All",
  ...new Set(projects.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category == "ALL") {
      setMenuItems(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return (item.category = category);
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="projects">
      <div id="project"></div>
      <div className="project-title">
        <h1>Research and Projects</h1>
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
};

export default Projects;
