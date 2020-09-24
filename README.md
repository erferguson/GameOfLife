# GameOfLife
Conway's Game of Life built with a ⌨️ using React

## Conway's Game of Life
- The Game of Life, or Life, is a Cellular Automaton devised by the British mathematician John Horton Conway in 1970. 

- A zero-player game, this means that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

- It is Turing complete and can simulate a universal constructor or any other Turing machine.

## Cellular Automata
- Dr. Stanislaw Ulam, famous for contributing to the Manhattan Project and the Teller-Ulam design which is the basis for all thermonuclear weapons, founded the concept of Cellular Automat with Dr. John Von Neumann at Los Alamos National Lab in the post-WW2 era. 

- Cellular Automata (CA) is a program which operates on data stored in 2D grid

- Simple rules describe how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors

- Each round simulation reviews current State of grid, then creates an entirely New Grid consisting of the Old State

- New Grid becomes the 'Active' State ---> Process Repeats with each new grid called a Generation (which we count)

- Real-world applicability of CA has been typically used to model physical and biological systems plus in generative art & music. 


## Turing Completeness of GofL
- All programming languages are either Turing Complete (TC) or they are not. But all of the languages known of are TC, though.

- Being TC means that it needs to do everything that a Turing machine can do. 

- Think of a Turing machine as if it was an endless, infinite piece of tape with simple 0s and 1s but powerful enough to computate anything that one can think up. 

- Conway's GofL is TC because it is based on the state of one cell changing depending on the state of other cells. 
