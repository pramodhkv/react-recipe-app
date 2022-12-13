import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CuisineGrid from "../../components/CuisineGrid";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState<any[]>([]);
  const { type } = useParams<{ type: string }>();

  const getCuisine = async (name: string) => {
    const checkLocalStorage = localStorage.getItem(name);

    if (checkLocalStorage) {
      setCuisine(JSON.parse(checkLocalStorage));
      return;
    }

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}&diet=vegetarian`
    );
    const data = await response.json();
    setCuisine(data.results);
    localStorage.setItem(name, JSON.stringify(data.results));
  };

  useEffect(() => {
    if (!type) {
      return;
    }

    getCuisine(type);
  }, [type]);

  return <CuisineGrid listItems={cuisine} />;
};

export default Cuisine;
