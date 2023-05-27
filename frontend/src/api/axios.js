import axios from 'axios'
import {
  setProducts,
  startLoadingProducts,
} from '../redux/features/api/productsSlice'

export const API = axios.create({
  baseURL: 'https://dummyjson.com',
})

//funcion para traer todos los productos
export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(startLoadingProducts())
    try {
      const { data } = await API.get('/products')
      dispatch(setProducts({ products: data.products }))
    } catch (error) {
      console.error(error)
    }
  }
}
