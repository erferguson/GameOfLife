import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Grid from './components/Grid'

class Main extends React.Component{
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
        <Grid 
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
