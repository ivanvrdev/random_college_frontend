const initialState = {
    token: null,
    data: null
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action

    const actions = {
        'SIGN_IN': () => payload,
        'SIGN_OUT': () => initialState
    }

    return actions[type]
}

export default userReducer