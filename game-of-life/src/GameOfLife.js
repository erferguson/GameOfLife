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
    columnsAmount: 25,
    rowsAmount: 25,
  };

  static cellState = {
    ALIVE: true,
    DEAD: false,
  };

  // INITIALIZATION
  constructor(props) {
    super(props);

    this.state = {
      cells: this.initializeCells(),
      isGameRunning: false,
    };
    setInterval(() => this.live(), 200)
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

  // GAME UPDATE LOGIC
  live(){
    // console.log('game tick')
    if (!this.state.isGameRunning){
      return;
    }

    const newCells = [];

    for (let columnIndex = 0; columnIndex < GameOfLife.field.columnsAmount; columnIndex++){
      newCells[columnIndex] = []; 
      for (let rowIndex = 0; rowIndex < GameOfLife.field.rowsAmount; rowIndex++){
        newCells[columnIndex][rowIndex] = this.computeNewCellState(columnIndex, rowIndex)
      }
    }
    this.setState({cells: newCells})
  }

  computeNewCellState(columnIndex, rowIndex){
    const aliveNeighborsAmount = this.computeAliveNeighborsAmount(columnIndex, rowIndex);
    const currentCellState = this.state.cells[columnIndex, rowIndex];

    if (currentCellState === GameOfLife.cellState.ALIVE){
      if (aliveNeighborsAmount < 2){
        return GameOfLife.cellState.DEAD;

      } else if (aliveNeighborsAmount === 2 || aliveNeighborsAmount === 3) {
        return GameOfLife.cellState.ALIVE;
      } else if(aliveNeighborsAmount > 3) {
        return GameOfLife.cellState.DEAD;
      }
    } else {
      if (aliveNeighborsAmount === 3) {
        return GameOfLife.cellState.ALIVE;
      }
    }
    
  }

  computeAliveNeighborsAmount(columnIndex, rowIndex) {
    let aliveNeighborsAmount = 0;

    const neighborOffsets = [
      [-1, 0], // left
      [-1, 1], // top left
      [0, 1], // top
      [1, 1], // top right
      [1, 0], // right
      [1, -1], // bottom right
      [0, -1], // bottom
      [-1, -1], // bottom left
    ]

    for (const neighborOffsetKey in neighborOffsets){
      const [xOffset, yOffset] = neighborOffsets[neighborOffsetKey];

      let newColumnOffset = columnIndex + xOffset;
      let newRowOffset = rowIndex + yOffset;

      // Check Boundaries
      if (newColumnOffset < 0 || newColumnOffset > GameOfLife.field.columnsAmount - 1){
        continue;
      }

      if (newRowOffset < 0 || newRowOffset > GameOfLife.field.rowsAmount - 1){
        continue;
      }
       
      const neighborState = this.state.cells[columnIndex + xOffset][rowIndex + yOffset];
 
      if (neighborState === GameOfLife.cellState.ALIVE){
        aliveNeighborsAmount++;
      }
    }

    // this.state.cells[columnIndex][rowIndex]
    return aliveNeighborsAmount;
  }

  toggleCellState(columnIndex, rowIndex) {
    const newCellState = this.state.cells;

    newCellState[columnIndex][rowIndex] = !newCellState[columnIndex][rowIndex]; // invert its value
  
    this.setState({state: newCellState})
  }

  toggleIsGameRunning(){
    this.setState({isGameRunning: !this.state.isGameRunning})
  }

  render(){
    return (
      <div className='GameOfLife'>
        {this.renderStartGameButton()}
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

  renderStartGameButton(){
    const buttonLabel = this.state.isGameRunning ? 'Stop' : 'Start';

    return (
      <button 
        className='GameOfLife__startGameButton'
        onClick={() => this.toggleIsGameRunning()}
        >{buttonLabel}</button>
    )
  }

}

