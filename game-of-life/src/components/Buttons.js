import React from "react";
import "../index.css";

import {
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

export default class Buttons extends React.Component {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };

  render() {
    return (
      <div className="center">
        <ButtonGroup>
          <Button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </Button>
          <Button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </Button>
          <Button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </Button>
          <Button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </Button>

          <DropdownButton
            as={ButtonGroup}
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1">25x25</Dropdown.Item>
            <Dropdown.Item eventKey="2">40x40</Dropdown.Item>
            <Dropdown.Item eventKey="3">100x100</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }
}
