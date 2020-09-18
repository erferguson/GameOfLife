import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

import Nav from './Nav'
import Grid from './Grid'

export default class App extends React.Component{
  constructor(){
    super();
    this.speed = 100;
    this.rows = 25;
    this.cols = 25;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)) // 15:10
    }
  }

  render(){
    return (
      <div>
        <h1>Game of Life</h1>
        <Nav />
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