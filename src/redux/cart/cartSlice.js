import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    item: [],
  },

  reducers: {
    setCart: (state, action) => {
      state.item = action.payload;
    },
    addToCart: (state, action) => {
      const exists = state.item.find(
        item => String(item.id) === String(action.payload.id),
      );

      if (!exists) {
        state.item.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.item = state.item.filter(
        item => String(item.id) !== String(action.payload),
      );
    },
  },
});

export const { setCart, addToCart, removeFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;
