import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Gradient, Wrapper } from "../../styles/globals";
import "@splidejs/react-splide/css";
import { useFetchRecipes } from "./hooks";

interface IRecipeCardProps {
  title: string;
  options?: any;
  type: string;
}

const RecipeCard = (props: IRecipeCardProps) => {
  const { title, options, type } = props;

  const { recipes } = useFetchRecipes(type);

  console.log("final recipes", recipes);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
          ...options,
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default RecipeCard;
