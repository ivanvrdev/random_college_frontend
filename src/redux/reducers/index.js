import { combineReducers } from "redux"
import sessionReducer from './session'
import usersReducer from "./users"
import subjectsReducer from "./subjects"

export default combineReducers({
  session: sessionReducer,
  users: usersReducer,
  subjects: subjectsReducer
})