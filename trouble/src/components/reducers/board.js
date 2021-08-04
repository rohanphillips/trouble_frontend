import { createSlice } from '@reduxjs/toolkit'
import { initializePosition } from '../helpers/board/helpers'

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
  currentRoll: 3, 
  inProgress: false,
  currentPlayer: 1,
  pieceToMove: null,
  defaultPlayerColors: [
    {r: 255, g: 0, b: 0, a: 1},
    {r: 0, g: 255, b: 0, a: 1},
    {r: 0, g: 0, b: 255, a: 1},
    {r: 255, g: 255, b: 0, a: 1},
  ]
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
    }, 
    updateInProgress(state, action){
      state.inProgress = action.payload
    },
    updatePositionOccupied(state, action){
      state.positions[action.payload].occupied = action.payload
    },
    initializePlayer(state, action){
      console.log("payload:", action.payload)
      const player = state.players[action.payload.player]
      const pieceNumber = action.payload.piece
      const piece = player.pieces[pieceNumber]
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
      state.pieceToMove = action.payload
    }
  }
})

export const { addPlayer, updateRoll, updateInProgress, deletePlayer, updatePositionOccupied, initializePlayer, updatePieceToMove} = boardSlice.actions
export default boardSlice.reducer