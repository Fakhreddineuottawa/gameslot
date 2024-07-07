import React from 'react';

const SearchBar = ({ onSearch }) => (
    <input type="text" placeholder="Search for games and articles by title" onChange={onSearch} />
);

export default SearchBar;
