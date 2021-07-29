import React from 'react'
import { connect } from 'react-redux'
import { elipseCoordinates } from '../helpers/helpers'

const Position = (props) => {
  const { occupied, position } = props
  const { height, width } = props.settings
  const coordinates = elipseCoordinates(height, width, position, 32)
  return (
    <div style={{top: `${coordinates.y}px`, left: `${coordinates.x}px`}}>
      Position
      Occupied is {String(occupied)}
    </div>

  )
}

export default connect( ( state, ownProps ) => {
  const position = ownProps.position
  return {
    occupied: state.boardState.positions[position].occupied,
    settings: state.settingsState
  }
}

)(Position)