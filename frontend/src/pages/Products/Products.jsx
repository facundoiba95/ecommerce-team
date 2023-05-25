import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/features/api/productsSlice';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getAllProducts())
  },[])


  return (
    <div>Products</div>
  )
}

export default Products