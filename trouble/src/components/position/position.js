import React from 'react'
import { connect } from 'react-redux'
import { createPositionStyle } from '../helpers/board/helpers'
import styles from './Position.module.css'

const Position = (props) => {  
  const { boardPosition, layerID, style } = props.boardPositionData
  // const { color } = props.boardPositionData.pieceOccupying.color
  const { height, width, boardReducer, homeReducer } = props.settings
  const { occupied } = props

  const positionStyle = createPositionStyle(layerID, height, width, boardReducer, homeReducer, boardPosition)
  if(occupied) positionStyle.borderColor = props.boardPositionData.pieceOccupying.color
  return (
    <div className={styles[style]} style={positionStyle}>
    </div>

  )
}

export default connect( ( state, ownProps ) => {
  const position = ownProps.position
  return {
    occupied: state.boardState.positions[position].occupied,
    boardPositionData: state.boardState.positions[position],
    settings: state.settingsState,
  }
}

)(Position)