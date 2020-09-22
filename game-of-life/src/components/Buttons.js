import React from 'react'
import '../index.css'

import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";

export default class Buttons extends React.Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt)
    }

    render(){
        return (
            <div className="center">
              <ButtonToolbar>
                <button className="btn btn-default" onClick={this.props.playButton}>
                  Play
                </button>
                <button className="btn btn-default" onClick={this.props.pauseButton}>
                  Pause
                </button>
                <button className="btn btn-default" onClick={this.props.clear}>
                  Clear
                </button>
                <button className="btn btn-default" onClick={this.props.slow}>
                  Slow
                </button>
                <button className="btn btn-default" onClick={this.props.fast}>
                  Fast
                </button>
                <button className="btn btn-default" onClick={this.props.seed}>
                  Seed
                </button>
              </ButtonToolbar>
                <DropdownButton
                  title="Grid Size"
                  id="size-menu"
                  onSelect={this.handleSelect}
                >
                    <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                    <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                    <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                </DropdownButton>
            </div>
          );
    } 
}
