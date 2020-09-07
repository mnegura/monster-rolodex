import React from "react";
import "./search-box.scss";

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
