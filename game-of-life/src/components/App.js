import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

import Nav from './Nav'
import Grid from './Grid'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      generation: 0,
    }
  }

  render(){
    return (
      <div>
        <h1>Game of Life</h1>
        <Nav />
        <Grid 
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}