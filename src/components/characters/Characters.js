import React, { useState, useEffect } from "react";
import axios from "axios";
import './Characters.css'

const URL = "https://rickandmortyapi.com/api/character/";

const Characters = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(URL).then(res => setCharacters(res.data.results));
  }, []);


  return (
    <>
      <h1>Characters</h1>
      <ul className="characters-list">
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Characters;