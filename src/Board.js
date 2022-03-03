import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];

    for (let row = 0; row < nrows; row++) {
      for (let col = 0; col < ncols; col++) {
        let inMemoryCell;
        let rand = Math.random();
        if (rand > chanceLightStartsOn) {
          inMemoryCell = true;
        } else {
          inMemoryCell = false
        }
        initialBoard.push(inMemoryCell);
      }
    }
    console.log(initialBoard);

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };




      // BATTLE PLAN FOR COORDS
      // MAP function that takes in the array of arrays
      // Board.map (
      // row => {}
      //)
      // We need index because our coords are y-x just like in memory


      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }
  
  // if the game is won, just show a winning msg & render nothing else
  
  // TODO
  
  // make table board
  
  // TODO
  
  let cellBoard = []

  for (let y = 0; y < nrows; y++) {
    let row = []
    for (let x = 0; x < ncols; x++) {
      let cell = <Cell
        flipCellsAroundMe={flipCellsAround}
        coord={`${y}-${x}`}
        isLit={board[y][x]}
      />
      row.push(cell);
    }
    cellBoard.push(<tr key={y}>{row}</tr>);
  }
    return (

      <table>
        <tbody>
          {cellBoard}
        </tbody>
      </table>)
}

export default Board;
