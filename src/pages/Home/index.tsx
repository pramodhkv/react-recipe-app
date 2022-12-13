import React from "react";
import { motion } from "framer-motion";
import RecipeCard from "../../components/RecipeCards";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RecipeCard title="Popular picks" type="popular" />
      <RecipeCard title="Vegetarian picks" type="vegetarian" />
    </motion.div>
  );
};

export default Home;
