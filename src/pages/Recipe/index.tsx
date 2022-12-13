import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonsWrapper,
  DetailsWrapper,
  InfoWrapper,
  StyledButton,
} from "./styles";

const Recipe = () => {
  const [recipe, setRecipe] = useState<any>({});
  const { recipeId } = useParams<{ recipeId: string }>();
  const [activeTab, setActiveTab] = useState<"instructions" | "ingredients">(
    "instructions"
  );

  const getRecipe = async (id: string) => {
    const cachedRecipe = localStorage.getItem(id);

    if (cachedRecipe) {
      setRecipe(JSON.parse(cachedRecipe));
      return;
    }

    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipe = await data.json();
    setRecipe(recipe);
    localStorage.setItem(id, JSON.stringify(recipe));
  };

  useEffect(() => {
    if (!recipeId) {
      return;
    }

    getRecipe(recipeId);
  }, [recipeId]);

  return (
    <DetailsWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <InfoWrapper>
        <ButtonsWrapper>
          <StyledButton
            className={`${activeTab === "instructions" ? "active" : ""}`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </StyledButton>
          <StyledButton
            className={`${activeTab === "ingredients" ? "active" : ""}`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </StyledButton>
        </ButtonsWrapper>

        <div>
          <h2>Summary</h2>
          <h4
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
            style={{ lineHeight: "2rem" }}
          ></h4>
        </div>

        {activeTab === "instructions" && (
          <div>
            <h2>Instructions</h2>
            <h4
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              style={{ lineHeight: "2rem" }}
            ></h4>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              {recipe.extendedIngredients?.map(
                (ingredient: any, index: number) => (
                  <li key={ingredient.id}>
                    <b>{index + 1}.&nbsp;&nbsp;</b>
                    {ingredient.original}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </InfoWrapper>
    </DetailsWrapper>
  );
};

export default Recipe;
