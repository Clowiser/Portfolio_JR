import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../component/counter/counterSlice'

// 1 - on définit l'état racine et les types

const store = configureStore({
    reducer: {
        counter: counterReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export default store;