import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
  name: 'Wishlist',
  initialState: {
    item: [],
  },
  reducers: {
    setWishlist: (state, action) => {
      state.item = action.payload;
    },
    addtowishlist: (state, action) => {
       const exists = state.item.find(item => item.id === action.payload.id)
       if(!exists){
        state.item.push(action.payload)
       }
    },
    removefromwishlist: (state, action) => {
      if(exists){
        state.item = state.item.filter(item=> item.id !== action.payload)
      }
    }
  },
});

export const {setWishlist, addtowishlist, removefromwishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
