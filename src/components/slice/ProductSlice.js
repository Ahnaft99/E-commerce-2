import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardItem:[]
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      let findProduct = state.cardItem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct != -1){
       state.cardItem[findProduct].qun++
      }else{
        state.cardItem = [...state.cardItem , action.payload]
      }
    },
    cartRemove : (state , action)=>{
      let filterCart = state.cardItem.filter((item)=> item.id != action.payload.id)
      state.cardItem = filterCart
    },
     incrementQty: (state, action) => {
      let index = state.cardItem.findIndex((item) => item.id == action.payload.id)
      if (index !== -1) {
        state.cardItem[index].qun++
      }
    },
    decrementQty: (state, action) => {
      let index = state.cardItem.findIndex((item) => item.id == action.payload.id)
      if (index !== -1 && state.cardItem[index].qun > 1) {
        state.cardItem[index].qun--
      }
    }
  },
})

export const { addToCart ,cartRemove ,incrementQty,decrementQty } = ProductSlice.actions

export default ProductSlice.reducer