import React from 'react'
import { connect } from 'react-redux'
import { createPositionStyle } from '../helpers/board/helpers'
import styles from './Position.module.css'
import { updatePieceToMove } from '../reducers/board'

const Position = (props) => {  
  const { layerPosition, layerID, style } = props.boardPositionData
  const { height, width, boardReducer, homeReducer } = props.settings
  const { occupied, currentPlayer, updatePieceToMove, diceRolled } = props

  const positionStyle = createPositionStyle(layerID, height, width, boardReducer, homeReducer, layerPosition)

  const positionClicked = () => {
    console.log("diceRolled: ", diceRolled)
    if(occupied && diceRolled) {
      const piece = props.boardPositionData.pieceOccupying
      const moveEligible = currentPlayer === piece.playerNumber
      updatePieceToMove(piece)
      console.log("positionClicked", occupied, piece, moveEligible)
    }
    
  }

  if(occupied) positionStyle.borderColor = props.boardPositionData.pieceOccupying.color

  

  return (
    <div onClick={positionClicked} className={styles[style]} style={positionStyle}>
    </div>

  )
}

export default connect( ( state, ownProps ) => {
  const position = ownProps.position
  return {
    occupied: state.boardState.positions[position].occupied,
    boardPositionData: state.boardState.positions[position],
    settings: state.settingsState,
    currentPlayer: state.boardState.currentPlayer,
    diceRolled: state.boardState.diceRolled,
  }
}, { updatePieceToMove })(Position)