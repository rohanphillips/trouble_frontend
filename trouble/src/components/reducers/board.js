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
      console.log("addPlayer:", action.payload)
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
    }
  }
})

export const { addPlayer, updateRoll, updateInProgress, deletePlayer } = boardSlice.actions
export default boardSlice.reducer