const initialState = {
  list: []
}

const postsReducer = (state = initialState, action) => {

  const { type, payload } = action

  const actions = {
    'LOAD_POSTS': () => ({...state, list: payload})
  }

  return actions[type] ? actions[type]() : state
}

export default postsReducer