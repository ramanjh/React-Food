import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name : 'cart' ,
  initialState : {
       items: []
  },
  reducers : {
    addItem : (state , action ) => {
        // mutating state here 
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        // state.items.pop();
        // console.log(action.payload);
        const index = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
  
        state.items.splice(index, 1);
      },
  
      clearCart : (state,action) => {
        state.items.length = 0;
        /* arr.length = 0 => fastest way to clear an array, without changing the reference of 'arr' */
    }
  }


});

export const {addItem,removeItem,clearCart} = CartSlice.actions ; // export action

export default CartSlice.reducer ; // export reducer