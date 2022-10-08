import {configureStore} from '@reduxjs/toolkit'
import cartSliceReducer from '../cartReducer'

export const store = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
})