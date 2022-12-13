import React from "react";
import { BrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import SearchBar from "../components/Search";
import Pages from "../pages";
import { GiKnifeFork } from "react-icons/gi";
import { LogoLink, Nav } from "./styles";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <LogoLink to="/">Deliciousss</LogoLink>
        </Nav>

        <SearchBar />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
