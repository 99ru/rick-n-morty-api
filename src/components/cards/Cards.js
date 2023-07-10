// Cards.js
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards({ characters }) {
  return (
    <div>
      <h1>Characters</h1>
      <ul className="characters-list">
        {characters.map(character => (
          <CardItem key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default Cards;
