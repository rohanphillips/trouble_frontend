import React from 'react'
import { connect } from 'react-redux'
import { createPositionStyle } from '../helpers/board/helpers'
import styles from './Position.module.css'

const Position = (props) => {
  const { boardPosition, layerID, style } = props.boardPositionData
  const { height, width, boardReducer, homeReducer } = props.settings
  return (
    <div className={styles[style]} style={createPositionStyle(layerID, height, width, boardReducer, homeReducer, boardPosition)}>
    </div>

  )
}

export default connect( ( state, ownProps ) => {
  const position = ownProps.position
  return {
    occupied: state.boardState.positions[position].occupied,
    boardPositionData: state.boardState.positions[position],
    settings: state.settingsState
  }
}

)(Position)