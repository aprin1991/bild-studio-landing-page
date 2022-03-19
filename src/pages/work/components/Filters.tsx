import React, { useEffect } from "react";
import map from "lodash/map";
import filter from "lodash/filter";
const Filters = ({
  categories,
  products,
  setFilterFunction,
  selectedCategory,
  setActiveCategory,
}) => {
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilterFunction(products);
      return;
    }
    const filtered = filter(products, (el) => {
      return el.categories.includes(selectedCategory);
    });
    setFilterFunction(filtered);
  }, [selectedCategory]);

  return (
    <ul className="flexBox categories-list flex-wrap">
      {map(categories, (category) => {
        return (
          <li
            className={`uppercase text-secondary text-lg novecento ${
              selectedCategory === category.title ? "active" : ""
            } `}
            onClick={() => setActiveCategory(category.title)}
            key={category.id}
          >
            {category.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
