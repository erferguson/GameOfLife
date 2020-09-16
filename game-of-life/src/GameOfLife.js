import React from 'react';
import './GameOfLife.css';

/**
 * 
 * 1. render Grid >> COMPLETED
 * 2. Spawn life on click
 * 3. Implement game logic
 */

export default class GameOfLife extends React.Component {

  static field = {
    columnsAmount: 20,
    rowsAmount: 20,
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

  toggleCellState(columnIndex, rowIndex) {
    const newCellState = this.state.cells;

    newCellState[columnIndex][rowIndex] = !newCellState[columnIndex][rowIndex]; // invert its value
  
    this.setState({state: newCellState})
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
          const cellModifier = cellState === GameOfLife.cellState.DEAD ? 'dead' : 'alive';
          return <div 
            className = {`GameOfLife__cell GameOfLife__cell--${cellModifier}`} 
            key={`cell_${columnIndex}_${rowIndex}`}
            onClick={() => this.toggleCellState(columnIndex, rowIndex)}
          />
        })}
      </div>
    )
  }

}

