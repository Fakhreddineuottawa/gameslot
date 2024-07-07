import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = ({ games }) => {
    const { id } = useParams();
    const game = games.find(game => game.id === id);

    return (
        <div>
            <h2>{game.title}</h2>
            <img src={game.image} alt={game.title} />
            <p>{game.description}</p>
            <p>Price: ${game.price}</p>
            <button>Buy</button>
        </div>
    );
};

export default GameDetail;
