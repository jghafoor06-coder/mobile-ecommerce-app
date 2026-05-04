import { configureStore } from '@reduxjs/toolkit';
import WishlistReducer from './wishlist/WishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: WishlistReducer,
  },
});