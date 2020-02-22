import React, { Component } from 'react'
import './style.css'
import GamePadSquare from './GamePadSquare'

class TicTacToe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history:[
                { squares: Array(9).fill(null) }
            ]
        }
    }

    handleClick = (i) => {
        const history = this.state.history.slice( 0, this.state.stepNumber + 1)
        const current = history[history.length-1]
        const squares = current.squares.slice()
        const winner = calculateWinner(squares)
        if(winner || squares[i])
        {
            return
        }
        squares[i] = this.state.xIsNext ? '1' : '0'
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    jumpTo(){
        let step = this.state.stepNumber
        this.setState({
            stepNumber: step-1,
            xIsNext: (step%2)===0
        })
    }

    resetGame(){
        this.setState({
            xIsNext: true,
            stepNumber: 0,
            history:[
                { squares: Array(9).fill(null) }
            ]
        })
    }

    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        let status = "Welcome to Tic-Tac-Toe"
        if(winner){
            status = "🎉🎉Congratulations winner is " + winner + " 🎉🎉"
            setTimeout(() => {
                alert("Winner is " + winner)
            }, 100);
        }
        else if(!winner){
            status = "Next Player is " + (this.state.xIsNext?'1':'0')
        }

        return (
            <div >
                <div className="d-flex flex-wrap ">
                    <h1 className="my-4">{status}</h1>
                    <GamePadSquare
                        onClick={(i)=>this.handleClick(i)}
                        squares={current.squares}
                    />
                </div>

                <div className="m-2 ">
                    <div>
                        <button className="btn btn-warning text-danger m-1" onClick={()=>{this.resetGame()}}>
                            Start Again!!!
                        </button>
                        {this.state.stepNumber!==0?
                            <button className="btn btn-danger text-light m-1" onClick={()=>{this.jumpTo()}}>
                                UNDO
                            </button>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares){
    
    const lines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]

    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a]
        }
    }

    return null 
}

export default TicTacToe
