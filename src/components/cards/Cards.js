// Cards.js
import React from 'react';
import CardItem from './CardItem';
import './Cards.css'; // assuming you saved your CSS in Cards.css file

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
