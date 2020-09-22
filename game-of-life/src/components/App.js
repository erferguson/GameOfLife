import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

import Nav from './Nav'
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
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let count = 0;

          // Game of Life RULES
          if (i > 0) if (g[i - 1][j]) count++;

          if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;

          if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;

          if (j < this.cols - 1) if (g[i][j + 1]) count++;

          if (j > 0) if (g[i][j - 1]) count++;

          if (i < this.rows - 1) if (g[i + 1][j]) count++;

          if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;

          if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;

          if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;

          if (!g[i][j] && count === 3) g2[i][j] = true;
        }
      }
      this.setState({
          gridFull:g2,
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
        <h1>Game of Life</h1>
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
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr));
}