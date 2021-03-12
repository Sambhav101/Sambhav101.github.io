import React from "react";

const Categories = ({ filter, categories }) => {
  return (
    <div className="category">
      {categories.map((cat, i) => {
        return (
          <button
            type="button"
            className="btn-project"
            onClick={() => filter(cat)}
            key={i}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
