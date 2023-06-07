import React from "react";
import "./Filter.css";

const Filter = ({ setStatus, setSpecies, setGender }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <form className="filter-form">
      <div className="filter-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="status">Status:</label>
        <select id="status" onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="species">Species:</label>
        <select id="species" onChange={handleSpeciesChange}>
          <option value="">All</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="animal">animal</option>
          <option value="unknown">unknown</option>
          <option value="robot">robot</option>
          <option value="humanoid">humanoid</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
