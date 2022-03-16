import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter-slice'
import authReducer from './auth/auth-slice'



export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        auth: authReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch