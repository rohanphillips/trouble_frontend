import React from 'react'
import { connect } from 'react-redux'
import { isMoveRequestedSet, pieceMove, updatePlayerNumber } from '../reducers/board'
import { movePiece } from '../helpers/gamelogic/helpers'
import { nextPlayer } from '../helpers/board/helpers'

const GameLogic = (props) => {
  const { pieceToMove, isMoveRequested, boardPositions, players, pieceMove, currentRoll, currentPlayer, updatePlayerNumber, willUpdatePlayerNumber } = props

  console.log("GameLogic:", isMoveRequested, pieceToMove, currentPlayer)
  if(isMoveRequested){
    const data = {
      boardPositions: boardPositions,
      pieceToMove: pieceToMove,
      players: players,
      movePositions: currentRoll,
      pieceMove: pieceMove,
    }
    movePiece(data);
  }
  console.log("willUpdatePlayerNumber", willUpdatePlayerNumber, currentPlayer)
  willUpdatePlayerNumber && updatePlayerNumber(nextPlayer(currentRoll, currentPlayer, players))

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
    currentRoll: state.boardState.currentRoll,
    currentPlayer: state.boardState.currentPlayer,
    willUpdatePlayerNumber: state.boardState.updatePlayerNumber
  }
}, { isMoveRequestedSet, pieceMove, updatePlayerNumber }) (GameLogic)