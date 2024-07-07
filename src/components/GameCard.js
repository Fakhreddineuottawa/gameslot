import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => (
    <div className="game-card">
        <img src={game.image} alt={game.title} />
        <h2>{game.title}</h2>
        <p>Price: ${game.price}</p>
        <Link to={`/game/${game.id}`}>Related articles</Link>
        <button>Buy</button>
    </div>
);

export default GameCard;
