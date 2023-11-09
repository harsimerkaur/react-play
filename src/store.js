import {configureStore} from "@reduxjs/toolkit"
import pizzaReducer from './Reducers/pizzaSlice.js'
export const store = configureStore({
    reducer: {
        pizza: pizzaReducer
    }
})