import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/api/productsSlice';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        productsSlice: productsSlice,
        authSlice: authSlice
    }
})

export default store;