import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AuthType { 
    isAuthenticated: boolean
}

const initialState: AuthType = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },

        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer