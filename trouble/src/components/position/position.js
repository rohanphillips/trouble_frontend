import React from 'react'
import { connect } from 'react-redux'
import { elipseCoordinates } from '../helpers/helpers'
import styles from './Position.module.css'

const Position = (props) => {
  const { position } = props
  const { height, width, boardReducer } = props.settings
  const coordinates = elipseCoordinates("board_layer", height, width, boardReducer, position, 8)
  console.log("height:", height, "width:", width)
  return (
    <div className={styles.elipsoid_board} style={{top: `${coordinates.y}px`, left: `${coordinates.x}px`, backgroundColor: 'rgb(255, 255, 255)'}}>
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