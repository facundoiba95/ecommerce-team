import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: null,
  allProducts: [],
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
    setError: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    },
  },
})

export const { startLoadingProducts, setProducts, setError } =
  productsSlice.actions
