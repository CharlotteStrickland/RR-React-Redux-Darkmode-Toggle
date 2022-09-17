import { configureStore } from '@reduxjs/toolkit'
import { configure } from '@testing-library/react'
import modeReducer from './features/modeSlice'

export const store = configure({
    reducer: {
        mode: modeReducer
    }
})