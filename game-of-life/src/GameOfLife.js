import React from 'react';
import './GameOfLife.css';

/**
 * 
 * 1. render Grid
 * 2. Spawn life on click
 * 3. Implement game logic
 */

export default class GameOfLife extends React.Component {

  static field = {
    columnsAmount: 10,
    rowsAmount: 10,
  };

  static cellState = {
    ALIVE: true,
    DEAD: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      cells: this.initializeCells(),
    }
  }

  initializeCells() {
    let cells = [];
    for(let columnIndex = 0; columnIndex < GameOfLife.field.columnsAmount; columnIndex++){
      cells[columnIndex] = [];    

      for(let rowIndex = 0; rowIndex < GameOfLife.field.rowsAmount; rowIndex++){
        cells[columnIndex][rowIndex] = GameOfLife.cellState.DEAD;
      }
    }
    return cells;
  }

  render(){
    return (
      <div className='GameOfLife'>
        {this.renderCells()}
      </div>
    )
  }

  renderCells(){
    return (
      <div className='GameOfLife__cells'>
        {this.state.cells.map((rows, columnIndex) => {
          return this.renderColumn(rows, columnIndex)
        })}
      </div>
    )
  }

  renderColumn(rows, columnIndex){
    return (
      <div className='GameOfLife__column' key={`column_${columnIndex}`}>
        {rows.map((cellState, rowIndex) => {
          return <div className = 'GameOfLife__cell' key={`cell_${columnIndex}_${rowIndex}`}/>
        })}
      </div>
    )
  }

}

