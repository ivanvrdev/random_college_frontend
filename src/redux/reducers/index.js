import { combineReducers } from "redux"

import sessionReducer from './session'
import usersReducer from "./users"
import subjectsReducer from "./subjects"
import postsReducer from "./posts"

export default combineReducers({
  session: sessionReducer,
  users: usersReducer,
  subjects: subjectsReducer,
  posts: postsReducer
})