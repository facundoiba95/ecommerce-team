import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  categories: [],
  error: null,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    startLoadingCategories: (state) => {
      return {
        ...state,
        loading: true,
      }
    },
    setCategories: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      }
    },
    setErrorCategories: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    },
  },
})

export const { startLoadingCategories, setCategories, setErrorCategories } =
  categoriesSlice.actions
