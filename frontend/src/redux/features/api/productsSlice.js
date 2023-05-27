import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: null,
  allProducts: [],
  categories: [],
  productsOfCategory: [],
}

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    setProducts: (state, action) => {
      return {
        ...state,
        isLoading: false,
        allProducts: action.payload.products,
      }
    },
  },
})

export const { startLoadingProducts, setProducts } = productsSlice.actions
export default productsSlice.reducer
