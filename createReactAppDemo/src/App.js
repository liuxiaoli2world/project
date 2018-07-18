import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
  if (props.highLight) {
    return (
      <button
        className="square"
        onClick={props.onClick}
        style={{ color: 'red' }}
      >
        {props.value}
      </button>
    )
  } else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
}

let calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        content: squares[a],
        indexes: [a, b, c]
      }
    }
  }
  return {
    content: null,
    indexes: []
  }
}

class Board extends React.Component {
  renderSquare(i) {
    const highLight = this.props.indexes.includes(i)
    return (
      <Square
        value={this.props.squares[i]}
        highLight={highLight}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    let rows = []
    for (let i = 0; i < 3; i++) {
      var row = []
      for (let j = 0; j < 3; j++) {
        row.push(this.renderSquare(i * 3 + j))
      }
      rows.push(
        <div className="board-row" key={i}>
          {row}
        </div>
      )
    }
    // var rows = [];
    // for (var i=0; i<3 ; i++){
    //   var row = [];
    //   for (var j=3*i; j<3*i+3;j++){
    //     row.push(this.renderSquare(j));
    //   }
    //   rows.push(<div className="board=row" key={i}>{row}</div>)
    // }
    return <div>{rows}</div>
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNum: 0,
      xIsNext: true
    }
  }

  handleClick = i => {
    let history = this.state.history.slice(0, this.state.stepNum + 1)
    let current = history[history.length - 1]
    let squares = current.squares.slice()
    const winnerObj = calculateWinner(squares)
    if (winnerObj.content || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{ squares }]),
      stepNum: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo = step => {
    this.setState({
      stepNum: step,
      xIsNext: !(step % 2)
    })
  }
  render() {
    const history = this.state.history
    const current = history[this.state.stepNum]
    const winnerObj = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? `Move to #${move}` : 'Game get started.'
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>
            {desc}
          </a>
        </li>
      )
    })

    let status
    if (winnerObj) {
      status = `Winner ${winnerObj.content}`
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            indexes={winnerObj.indexes}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game
