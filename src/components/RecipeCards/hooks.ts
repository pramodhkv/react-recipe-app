import { useEffect, useState } from "react";

export interface IRecipes {
  id: number;
  title: string;
  image: string;
}

export function useFetchRecipes(type: string) {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);

  const getRecipes = async (recipeType: string) => {
    let url: string = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`;
    const cachedRecipes = localStorage.getItem(recipeType);

    if (cachedRecipes) {
      setRecipes(JSON.parse(cachedRecipes));
      return;
    }

    if (recipeType === "vegetarian") {
      url = url.concat("&tags=vegetarian");
    }

    const response = await fetch(url);
    const data = await response.json();
    const mappedData: IRecipes[] = data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    }));

    setRecipes(mappedData);
    localStorage.setItem(recipeType, JSON.stringify(mappedData));
  };

  useEffect(() => {
    getRecipes(type);
  }, [type]);

  return { recipes };
}
