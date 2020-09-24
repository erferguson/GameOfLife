import React from 'react'
import '../index.css'

export default class Box extends React.Component {
    selectBox = () => {
        // calls selectBox function, not recursive because no stopping point, no base case
        // row & col passed in 
        this.props.selectBox(this.props.row, this.props.col)
    }

    render(){
        return (
            <div 
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            />
        )
    }
}