import { createSlice } from '@reduxjs/toolkit'

const createPositions = (count) => {
  const positions = {}
  const initialState = {
    occupied: false,
    playerOccupying: null
  }
  for(let i = 1; i <= count; i++) {
    positions[i] = initialState;
  }
  return positions;
}

export const initialState = {
  height: 700,
  width: 900,
  boardReducer: 100,
  homeReducer: 150,
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