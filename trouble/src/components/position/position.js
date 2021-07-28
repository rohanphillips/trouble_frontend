import React from 'react'
import { connect } from 'react-redux'

const Position = (props) => {
  const { occupied } = props
  return (
    <div>
      Position
      Occupied is {String(occupied)}
    </div>

  )
}

export default connect( ( state, ownProps ) => {
  const position = ownProps.position
  return {
    occupied: state.boardState.positions[position].occupied,
  }
}

)(Position)