import { combineReducers } from "redux";
import boardSlice from './board'

export default combineReducers({
  boardState: boardSlice
});