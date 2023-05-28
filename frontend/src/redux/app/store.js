import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import { categoriesSlice } from '../features/api/categoriesSlice'
import { productsSlice } from '../features/api/productsSlice'

const store = configureStore({
  reducer: {
    allProducts: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    authSlice: authSlice,
  },
})

export default store
