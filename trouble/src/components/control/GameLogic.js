import React from 'react'
import { connect } from 'react-redux'
import { isMoveRequestedSet, pieceMove } from '../reducers/board'
import { movePiece } from '../helpers/gamelogic/helpers'

const GameLogic = (props) => {
  const { pieceToMove, isMoveRequested, isMoveRequestedSet, boardPositions, players, pieceMove } = props
  
  console.log("GameLogic:", isMoveRequested, pieceToMove)
  if(isMoveRequested && pieceToMove.playerLocation < 36){
    const data = {
      boardPositions: boardPositions,
      pieceToMove: pieceToMove,
      players: players,
      movePositions: 1,
      pieceMove: pieceMove
    }
    movePiece(data);
    // isMoveRequestedSet(false)
  }
  return (
    <div>
    </div>
  )
}

export default connect ( state => {
  return {
    pieceToMove: state.boardState.pieceToMove,
    isMoveRequested: state.boardState.isMoveRequested,
    boardPositions: state.boardState.positions,
    players: state.boardState.players,
  }
}, { isMoveRequestedSet, pieceMove }) (GameLogic)