import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CuisineGrid from "../../components/CuisineGrid";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const { query } = useParams<{ query: string }>();

  const getSearchedResults = async (name: string) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}&diet=vegetarian`
    );
    const data = await response.json();
    setSearchResults(data.results);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getSearchedResults(query);
  }, [query]);

  return <CuisineGrid listItems={searchResults} />;
};

export default SearchResults;
