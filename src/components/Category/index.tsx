import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { CuisineLink, ListWrapper } from "./styles";

const Category = () => {
  const categories: { name: string; icon: JSX.Element }[] = [
    {
      name: "Italian",
      icon: <FaPizzaSlice />,
    },
    {
      name: "American",
      icon: <FaHamburger />,
    },
    {
      name: "Thai",
      icon: <GiNoodles />,
    },
    {
      name: "Japanese",
      icon: <GiChopsticks />,
    },
  ];

  return (
    <ListWrapper className="Category">
      {categories.map((category) => (
        <CuisineLink
          to={`/cuisine/${category.name.toLowerCase()}`}
          key={category.name}
        >
          {category.icon}
          <h4>{category.name}</h4>
        </CuisineLink>
      ))}
    </ListWrapper>
  );
};

export default Category;
