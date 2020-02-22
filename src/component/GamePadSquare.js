import React, { Component } from 'react'
import Squares from './Squares'

class GamePadSquare extends Component {
    renderSquares(i){
        return(
            <Squares 
                value = {this.props.squares[i]}
                onClick = {() => this.props.onClick(i)}
            />
        )
    }
    render() {
        return (
            <div className = "row d-flex justify-content-center">
                <div className="col-12">
                    {this.renderSquares(0)}
                    {this.renderSquares(1)}
                    {this.renderSquares(2)}
                </div>
                <div className="col-12">
                    {this.renderSquares(3)}
                    {this.renderSquares(4)}
                    {this.renderSquares(5)}
                </div>
                <div className="col-12">
                    {this.renderSquares(6)}
                    {this.renderSquares(7)}
                    {this.renderSquares(8)}
                </div>
            </div>
        )
    }
}

export default GamePadSquare
