
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import wishlistReducer from './wishlist/WishlistSlice';

const wishlistPersistConfig = {
  key: 'wishlist',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
