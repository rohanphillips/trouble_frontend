import { createSlice } from '@reduxjs/toolkit'
import { initializePosition } from '../helpers/helpers'

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
}

const boardSlice = createSlice({
  name: 'board', 
  initialState: initialState,
  reducers: {
    addPlayer(state, action){
      state.players.push(action.payload)
    }
  }
})

export const { addPlayer } = boardSlice.actions
export default boardSlice.reducer