import { combineReducers } from "redux";
import settingsSlice from './settings'
import boardSlice from './board'

export default combineReducers({
  settingsState: settingsSlice,
  boardState: boardSlice
});