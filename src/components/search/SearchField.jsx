import React from 'react';
import './search.css'

const SearchField = ({ setSearch }) => {

  const handleSearch = (event) => {
  setSearch(event.target.value);
};

  return (
    <div className="search-field">
      <input type="text" placeholder="search for a character" onChange={handleSearch} />
    </div>
  );
}
export default SearchField;
