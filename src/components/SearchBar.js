import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => (
    <input type="text" placeholder="Search for games and articles by title" onChange={onSearch} className="search-bar" />
);

export default SearchBar;
