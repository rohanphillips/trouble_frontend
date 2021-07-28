import React from 'react'
import { connect } from 'react-redux';

const Board = (props) => {
  return (
    <div>
      <h1>
        Board
      </h1>
    </div>
  )
}

export default connect( state => {
  return {
    boardState: state.board
  }
})(Board);