import React from 'react';
import GameCard from './GameCard';
import './GameList.css';

const GameList = ({ games }) => (
    <div className="game-list">
        {games.map(game => <GameCard key={game.id} game={game} />)}
    </div>
);

export default GameList;
