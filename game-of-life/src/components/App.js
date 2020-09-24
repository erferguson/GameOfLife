import React from 'react';
import '../index.css'

import Nav from './Nav'
import About from './About'
import Buttons from './Buttons'
import Grid from './Grid'

export default class App extends React.Component{
  constructor(){
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 30;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)) // 15:10
    }
  }

  selectBox = (row, col) => {
      // two gridCopy's, let is attached to Class -- 
      // gridCopy is an array of an arry
    let gridCopy = arrayClone(this.state.gridFull);

    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
        gridFull: gridCopy
    })
  }

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);

    for (let i =0; i < this.rows; i++){
        for (let j =0; j < this.cols; j++) {
            if (Math.floor(Math.random()*4) === 1){
                gridCopy[i][j] = true; 
            }
        }
    }
    this.setState({
        gridFull: gridCopy
    });
}

playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
}

pauseButton = () => {
    clearInterval(this.intervalId)
}

slow = () => {
    this.speed = 1000;
    this.playButton()
}

fast= () => {
    this.speed = 100;
    this.playButton()
}
clear = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false)) // 15:10  REFACTOR 
    this.setState({
        gridFull: grid,
        generation: 0
    });
}

gridSize = (size) => {
    switch(size) {
        case'1':
            this.cols = 25; 
            this.rows = 25; 
        break;
        case'2':
            this.cols = 40;
            this.rows = 40;
        break;
        case'3':
            this.cols = 100;
            this.rows = 100;
        break;
        default:
            this.cols = 25;
            this.rows = 25;
    }
    this.clear();
}

play = () => {
    let grid = this.state.gridFull;
    let grid2 = arrayClone(this.state.gridFull);

    for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
            // count == neighbors 
          let count = 0;

          // Game of Life RULES
          if (r > 0) if (grid[r - 1][c]) count++;

          if (r > 0 && c > 0) if (grid[r - 1][c - 1]) count++;

          if (r > 0 && c < this.cols - 1) if (grid[r - 1][c + 1]) count++;

          if (c < this.cols - 1) if (grid[r][c + 1]) count++;

          if (c > 0) if (grid[r][c - 1]) count++;

          if (r < this.rows - 1) if (grid[r + 1][c]) count++;

          if (r < this.rows - 1 && c > 0) if (grid[r + 1][c - 1]) count++;

          if (r < this.rows - 1 && c < this.cols - 1) if (grid[r + 1][c + 1]) count++;

          if (grid[r][c] && (count < 2 || count > 3)) grid2[r][c] = false;

          if (!grid[r][c] && count === 3) grid2[r][c] = true;
        }
      }
      this.setState({
          gridFull:grid2,
          generation: this.state.generation + 1
      })
}

componentDidMount(){
    this.seed();
    this.playButton();
}

  render(){
    return (
      <div>
        <p className='titleGoL'>Game of Life</p>
        <Nav />
        
        <Buttons 
            playButton={this.playButton}
            pauseButton={this.pauseButton}
            slow={this.slow}
            fast={this.fast}
            clear={this.clear}
            seed={this.seed}
            gridSize={this.gridSize}
        />
        <Grid 
            gridFull={this.state.gridFull} // props being passed to Grid.js
            rows={this.rows} // props
            cols={this.cols} // props
            selectBox={this.selectBox} // props
        />
        <p className='generations'>Generations: {this.state.generation}</p>
        <About />
      </div>
    )
  }
}

function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr));
}