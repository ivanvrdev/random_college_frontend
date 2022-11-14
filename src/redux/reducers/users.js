const initialState = {
  list: [],
  selected: null
}

const usersReducer = (state = initialState, action) => {

  const {type, payload} = action

  const actions = {
    'LOAD_USERS': () => ({...state, list: payload}),
    'FIND_USER': () => {
      const selected = state.list.find(user => user.username === payload)
      return {...state, selected}
    },
    'SELECT_USER': () => ({...state, selected: payload})
  }

  return actions[type] ? actions[type]() : state
}

export default usersReducer