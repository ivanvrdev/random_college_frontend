import { createStore, combineReducers } from "redux"
import sessionReducer from './session'

const reducers = combineReducers({
    session: sessionReducer
})

const store = createStore(reducers)

export default store