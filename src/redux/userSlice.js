import { createSlice } from "@reduxjs/toolkit"

const guestUser = {
    username: 'Invitado',
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: guestUser,
    reducers: {
        signIn: (state, action) => ({...state, ...action.payload}),
        signOut: (state, action) => guestUser
    }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer