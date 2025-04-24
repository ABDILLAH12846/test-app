// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../redux/todo';
import productReducer from '../redux/product';
import authReducer from '../redux/auth';

// Konfigurasi persist
const persistConfig = {
  key: 'root',
  storage,
};

// Gabungkan reducers untuk todos dan products
const rootReducer = combineReducers({
  todos: persistReducer(persistConfig, todoReducer),
  products: persistReducer(persistConfig, productReducer),
  auth: persistReducer(persistConfig, authReducer),
});

// Membuat store dengan konfigurasi rootReducer yang sudah dipersist
const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
