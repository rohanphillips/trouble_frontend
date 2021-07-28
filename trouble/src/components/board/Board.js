import React from 'react'
import { connect } from 'react-redux';

const Board = (props) => {
  const {boardState} = props
  console.log("boardState", boardState)
  return (
    <div>
      <h1>
        Board
      </h1>
      Occupied is {String(boardState.occupied)}
    </div>
  )
}

export default connect( state => {
  const position = 2;
  return {
    boardState: state.boardState.positions[position],
  }
})(Board);