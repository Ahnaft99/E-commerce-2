import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './components/slice/ProductSlice'

export const store = configureStore({
  reducer: {
    product:ProductSlice
  },
})