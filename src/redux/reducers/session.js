const initialState = {
  token: null,
  auth: false,
  authError: null,
  previusLocation: "/",
  user: null,
  updatedMessage: null
}

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action

  const actions = {
    'LOG_IN': ({...state, auth: true, ...payload}),
    'LOG_IN_ERROR': ({...state, authError: payload}),
    'LOG_OUT': initialState,
    'SET_PREVIUS_LOCATION': ({...state, previusLocation: payload}),
    'UPDATE_MY_USER': ({...state, user: payload?.user, updatedMessage: payload?.message}),
    'CLEAR_UPDATED_MESSAGE': ({...state, updatedMessage: null})
  }
  
  return actions[type] || state
}

export default sessionReducer