const initialState = {
    token: null,
    user: null
}

const sessionReducer = (state = initialState, action) => {
    const { type, payload } = action

    const actions = {
        'LOG_IN': ({...state, ...payload}),
        'LOG_OUT': initialState
    }
    
    return actions[type] || initialState
}

export default sessionReducer