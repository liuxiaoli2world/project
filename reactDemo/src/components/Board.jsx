import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render() {
    
  }
}
