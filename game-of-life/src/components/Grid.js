import React from 'react';
import '../index.css'

import Box from './Box'

export default class Grid extends React.Component{
    render(){
        const width = (this.props.cols * 14);
        // rowsArr is the Grid, holds the Boxes
        var rowsArr = []

        var boxClass ='';

        for(var i = 0; i < this.props.rows; i++){ // two nested FOR loops
            for (var j =0; j < this.props.cols; j++){
                let boxId = i + '_' + j;
                boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off'
                rowsArr.push(
                    <Box 
                        boxClass={boxClass} // props being passed to Box.js
                        key={boxId} // props
                        boxId={boxId} // props
                        row={i} // props / i == row
                        col={j} // props / j == col
                        selectBox={this.props.selectBox} // props
                    />
                );
            }
        }

        return (
            <div className='grid' style={{width: width}}>
                {rowsArr}
            </div>
        )
    }
}