import { combineReducers } from "redux"
import sessionReducer from './session'
import usersReducer from "./users"

export default combineReducers({
  session: sessionReducer,
  users: usersReducer
})