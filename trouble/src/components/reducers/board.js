import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  players: []
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