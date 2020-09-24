import React from 'react'
import {Accordion, Card } from 'react-bootstrap'


export default class About extends React.Component {
    render(){
        return (
            <div className='accordionDiv'>
                <Accordion defaultActiveKey="0" className='accordionMain'>
                    <Card className='accordionCard'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Rules of the Game
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>1. Each cell on a 2D grid has up to 8 neighbors. Whether the cell Lives or Dies, depends on how many of it's neighbors are Living. For each new generation, the State of each cell may change.</div><br />
				            <div>2. IF the cell is ALIVE & has 2 or 3 neighbors, the cell remains Alive. If cell Does Not have 2 or 3 neighbors, it Dies.</div><br />
				            <div>3. The cell can come back to life only if the cell is already dead and has exactly 3 neighbors. The cell will remain Dead if this is not True.</div><br />
				            <div>These Rules are implemented into Conway's GofL but Cellular Automata can have any rules one wishes to implement.</div><br />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}