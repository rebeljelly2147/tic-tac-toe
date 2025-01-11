import React, { useState } from "react";
import Square from './square';
const Board = () => {
    const [state,setState] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    // console.log("States",state);
    const handelclick = (index) => {
        if(state[index] !== ""){
            return;
        }
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                alert(`Player ${state[a]} wins!`);
                setState(Array(9).fill(""));
                return;
            }
        }

        // console.log("Clicked on : ",index);
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O" ;
        setState(copyState);
        // console.log(state);
        setIsXTurn(!isXTurn);
    }
    return(
        <div className="board-container">
            <div className="board-row">
                <Square onClick = {() =>{handelclick(0)}} value = {state[0]==null?"":state[0]}/>
                <Square onClick = {() =>{handelclick(1)}} value = {state[1]}/>
                <Square onClick = {() =>{handelclick(2)}} value = {state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick = {() =>{handelclick(3)}} value = {state[3]}/>
                <Square onClick = {() =>{handelclick(4)}} value = {state[4]}/>
                <Square onClick = {() =>{handelclick(5)}} value = {state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick = {() =>{handelclick(6)}} value = {state[6]}/>
                <Square onClick = {() =>{handelclick(7)}} value = {state[7]}/>
                <Square onClick = {() =>{handelclick(8)}} value = {state[8]}/>
            </div>
        </div>
    )
} 

export default Board;
