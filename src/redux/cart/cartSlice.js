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
      const product = action.payload;
      const exists = state.item.find(
        item => String(item.id) === String(product.id),
      );

      if (exists) {
        exists.quantity += 1;
      } else {
        state.item.push({
          ...product,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const exists = state.item.find(
        item => String(item.id) === String(action.payload),
      );
      if (exists) {
        exists.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const exists = state.item.find(
        item => String(item.id) === String(action.payload),
      );
      if (exists) {
        exists.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.item = state.item.filter(
        item => String(item.id) !== String(action.payload),
      );
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
