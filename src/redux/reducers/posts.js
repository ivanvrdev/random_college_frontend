const initialState = {
  list: [],
  postResponse: null,
  commentResponse: null
}

const postsReducer = (state = initialState, action) => {

  const { type, payload } = action

  const actions = {
    'LOAD_POSTS': () => ({...state, list: payload}),
    'CREATE_POST_RESPONSE': () => ({...state, postResponse: payload}),
    'CREATE_COMMENT_RESPONSE': () => ({...state, commentResponse: payload}),
    'CLEAR_POST_RESPONSE': () => ({...state, postResponse: null}),
    'CLEAR_COMMENT_RESPONSE': () => ({...state, commentResponse: null})
  }

  return actions[type] ? actions[type]() : state
}

export default postsReducer