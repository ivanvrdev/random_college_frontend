const initialState = {
  list: [],
  selected: null
}

const subjectsReducer = (state = initialState, action) => {

  const {type, payload} = action

  const actions = {
    'LOAD_SUBJECTS': () => ({...state, list: payload}),
    'FIND_SUBJECT': () => {
      const selected = state.list.find(subject => subject._id === payload)
      return {...state, selected}
    },
    'SELECT_SUBJECT': () => ({...state, selected: payload})
  }

  return actions[type] ? actions[type]() : state
}

export default subjectsReducer