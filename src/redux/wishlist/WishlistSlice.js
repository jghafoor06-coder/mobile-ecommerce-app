import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
  name: 'wishlist',

  initialState: {
    item: [],
  },

  reducers: {
    setWishlist: (state, action) => {
      state.item = action.payload;
    },

    addtowishlist: (state, action) => {
      const exists = state.item.find(
        item => String(item.id) === String(action.payload.id),
      );

      if (!exists) {
        state.item.push(action.payload);
      }
    },

    removefromwishlist: (state, action) => {
      state.item = state.item.filter(
        item => String(item.id) !== String(action.payload),
      );
    },
  },
});

export const { setWishlist, addtowishlist, removefromwishlist } =
  WishlistSlice.actions;

export default WishlistSlice.reducer;
