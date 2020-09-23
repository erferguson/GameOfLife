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
                            <div>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</div><br />
				            <div>2. Any live cell with two or three live neighbours lives on to the next generation.</div><br />
				            <div>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</div><br />
				            <div>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</div><br />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}