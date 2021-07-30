import React,{ useState } from 'react';
import Square from './Square';

const Board = () => {

    const [board,setboard]= useState(Array(9).fill(null));
    const [isXNext, setIsXNext]= useState(false);
    console.log(isXNext);
    const   handleSquareClick= position=>{
        
        if(board[position])
        return;

        setboard(prev=>{
            return prev.map((square,pos)=>{
                if(pos===position){
                    return isXNext?'X':'O';
                }
                return square;
            })
        });
    setIsXNext(prev=>{return !prev});
    };

    const renderSquare=(position)=>{
        return (
            <Square value={board[position]} onClick={()=>handleSquareClick(position)} />
        )
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
