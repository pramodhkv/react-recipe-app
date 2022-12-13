import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StyledForm from "./styles";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </StyledForm>
  );
};

export default SearchBar;
