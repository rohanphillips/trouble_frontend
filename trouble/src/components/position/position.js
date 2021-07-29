import React from 'react'
import { connect } from 'react-redux'
import { createPositionStyle } from '../helpers/helpers'
import styles from './Position.module.css'

const Position = (props) => {
  const { position } = props
  const { height, width, boardReducer } = props.settings
  return (
    <div className={styles.elipsoid_board} style={createPositionStyle("board_layer", height, width, boardReducer, position)}>
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