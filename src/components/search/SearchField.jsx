import React from 'react';
import './search.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-field">
      <SearchIcon className="search-icon" />
      <input type="text" placeholder='search' onChange={handleSearch} />
    </div>
  );
};

export default SearchField;
