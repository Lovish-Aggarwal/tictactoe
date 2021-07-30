import React,{ useState } from "react";
import Board  from "./components/Board";
import { calculateWinner} from "./helpers";

import "./styles/root.scss";

const App = ()=>{

  const [board,setboard]= useState(Array(9).fill(null));
  const [isXNext, setIsXNext]= useState(false);


  const winner=calculateWinner(board);
  const message= winner?`Winner is ${winner}`:`Next Player is ${isXNext?'X':'O'}`;

  const   handleSquareClick= position=>{
    if(board[position] || winner)
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

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <h2 style={{marginTop:"5px"}}>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App;