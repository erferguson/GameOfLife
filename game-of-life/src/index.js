import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/index.css';
import '../src/index.css'

// import Grid from './components/Grid'
import App from './components/App'

// class Main extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       generation: 0,
//     }
//   }

//   render(){
//     return (
//       <div>
//         <h1>Game of Life</h1>
//         <Grid 
//         />
//         <h2>Generations: {this.state.generation}</h2>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
