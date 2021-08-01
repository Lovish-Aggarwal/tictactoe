import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            type="button"
            className={`square ${isWinningSquare ? 'winning' : ''} ${value==='X'?'text-green':'text-orange'}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
