import { createSlice } from '@reduxjs/toolkit'
import { initializePosition, resetStyle } from '../helpers/board/helpers'

const createPositions = (count) => {
  const positions = {}
  
  for(let i = 1; i <= count; i++) {
    positions[i] = initializePosition(i);
  }
  return positions;
}

export const initialState = {  
  players: [],
  positions: createPositions(60),
  diceRolled: false,
  currentRoll: 3, 
  gameInProgress: false,
  currentPlayer: 1,
  updatePlayerNumber: false,
  isMoveRequested: false,
  pieceToMove: null,
  defaultPlayerColors: [
    {r: 255, g: 0, b: 0, a: 1},
    {r: 0, g: 255, b: 0, a: 1},
    {r: 0, g: 0, b: 255, a: 1},
    {r: 255, g: 255, b: 0, a: 1},
  ],
  messages: {
    diceMessage: {
      active: true,
      message: "Awaiting Game Start"
    }
  }
}

const boardSlice = createSlice({
  name: 'board', 
  initialState: initialState,
  reducers: {
    addPlayer(state, action){
      state.players.push(action.payload)
    },
    deletePlayer(state, action){      
      state.players = state.players.filter((p, i) => i !== parseInt(action.payload))
    },
    updateRoll(state, action){
      state.currentRoll = action.payload
      state.diceRolled = true
    }, 
    updateDiceRolled(state, action){ 
      state.diceRolled = action.payload
    },
    updateGameInProgress(state, action){
      state.gameInProgress = action.payload
    },
    updatePositionOccupied(state, action){
      state.positions[action.payload].occupied = action.payload
    },
    updatePlayerNumber(state, action){
      state.currentPlayer = action.payload
      state.updatePlayerNumber = false
    },
    initializePlayer(state, action){
      console.log("payload:", action.payload)
      const player = state.players[action.payload.player]
      const pieceNumber = action.payload.piece
      const piece = player.pieces[pieceNumber]
      piece.playerLocation = pieceNumber
      const location = player.locations[pieceNumber]
      const boardLocation = state.positions[location.boardLocation]
      piece.boardLocation = location.boardLocation
      location.occupied = true
      location.piece = piece
      boardLocation.occupied = true
      boardLocation.pieceOccupying = piece
      boardLocation.style = "player_piece"
    },
    updatePieceToMove(state, action){
      state.isMoveRequested = true
      state.pieceToMove = action.payload
      console.log("updatePieceToMove:", action.payload)
    },
    isMoveRequestedSet(state, action){
      state.isMoveRequested = action.payload
    },
    pieceMove(state, action){
      console.log("pieceMove called", action.payload)
      const { oldLocation, newLocation, piece, newPlayerLocation } = action.payload

      const modifyPiece = state.players[piece.playerNumber - 1].pieces[piece.id]
      modifyPiece.playerLocation = newPlayerLocation
      modifyPiece.boardLocation = newLocation

      let boardPosition = state.positions[oldLocation]
      boardPosition.occupied = false
      boardPosition.pieceOccupying = null
      boardPosition.style = resetStyle(boardPosition)

      boardPosition = state.positions[newLocation]
      boardPosition.occupied = true
      boardPosition.pieceOccupying = modifyPiece
      boardPosition.style = "player_piece"

      state.isMoveRequested = false
      state.updatePlayerNumber = true;
      state.diceRolled = false
    },
    updateMessage(state, action){
      console.log("updateMessage", action.payload)
      const {center, message} = action.payload
      state.messages[center] = message
    }
  }
})

export const { addPlayer, updateRoll, updateGameInProgress, deletePlayer, updatePositionOccupied, initializePlayer, updatePieceToMove, isMoveRequestedSet, pieceMove, updatePlayerNumber, updateDiceRolled, updateMessage} = boardSlice.actions
export default boardSlice.reducer