import React from 'react'
import '../index.css'

export default class Buttons extends React.Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt)
    }

    render(){
        return(
            <div className='center'>
                {/* <ButtonToolbar> */}
                    <button className='' onClick={this.props.playButton}>Play</button>
                    <button className='' onClick={this.props.pauseButton}>Pause</button>
                    <button className='' onClick={this.props.slow}>Slow</button>
                    <button className='' onClick={this.props.fast}>Fast</button>
                    <button className='' onClick={this.props.clear}>Clear</button>
                    <button className='' onClick={this.props.seed}>Seed</button>
                {/* </ButtonToolbar> */}
                {/* <DropdownButton    
                    title='Grid Size'
                    id='size-menu'
                    onSelect={this.handleSelect}
                > 
                    <MenuItem eventKey='1'>10x10</MenuItem>
                    <MenuItem eventKey='2'>40x40</MenuItem>
                    <MenuItem eventKey='3'>75x50</MenuItem>
                </DropdownButton> */}
            </div>
        )
    } 
}
