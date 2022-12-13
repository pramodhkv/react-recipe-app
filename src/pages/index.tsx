import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
