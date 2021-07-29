import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  height: 700,
  width: 900,
  boardReducer: 100,
  homeReducer: 150,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    changeHeight(state, action){
      state.height = action.payload
    },
    changeWidth(state, action){
      state.width = action.payload
    },
    changeBoardReducer(state, action){
      state.boardReducer = action.payload
    },
    changeHomeReducer(state, action) {
      state.homeReducer = action.payload
    }
  }
})

export const { changeHeight, changeWidth, changeBoardReducer, changeHomeReducer } = settingsSlice.actions

export default settingsSlice.reducer