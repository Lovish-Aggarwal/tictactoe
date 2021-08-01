import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
    return (
        <div>
            <ul>
                {history.map((_, move) => {
                    return (
                        <li key={move}>
                            <button style={{fontWeight: move===currentMove?'bold':'normal'}} type="button" onClick={() => moveTo(move)}>
                                {move === 0
                                    ? `Go to Game Start`
                                    : `Go to move${move}`}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default History;
