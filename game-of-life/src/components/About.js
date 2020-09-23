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
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}