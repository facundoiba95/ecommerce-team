import axios from 'axios'
import {
  setError,
  setProducts,
  startLoadingProducts,
} from '../redux/features/api/productsSlice'
import {
  setCategories,
  setErrorCategories,
  startLoadingCategories,
} from '../redux/features/api/categoriesSlice'

export const API = axios.create({
  baseURL: 'https://dummyjson.com/products',
})

//funcion para traer todos los productos
export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(startLoadingProducts())
    try {
      const { data } = await API.get()
      dispatch(setProducts({ products: data.products }))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}

//funcion que trae las categorias
export const getCategories = () => {
  return async (dispatch) => {
    dispatch(startLoadingCategories())
    try {
      const { data } = await API.get('/categories')
      dispatch(setCategories({ categories: data }))
    } catch (error) {
      dispatch(setErrorCategories(error.message))
    }
  }
}
