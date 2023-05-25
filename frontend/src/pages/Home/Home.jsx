import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, getProductsOfCategory } from '../../redux/features/api/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(state => state.productsSlice.categories);
  const productsOfCategory = useSelector(state => state.productsSlice.productsOfCategory);

useEffect(() => {
  dispatch(getAllCategories());
}, [])
  

const renderCategories = () => {
  return allCategories.map(cat => {
    return(
      <h2 onClick={() => dispatch(getProductsOfCategory(cat))}
      style={{backgroundColor:'red'}}
      >{cat}</h2>
    )
  })
}

const renderProductOfCategory = () => {
  return productsOfCategory.map(prod => {
    const { id,title,price,category } = prod;
    return (
      <div style={{backgroundColor:'orange'}}>
        <p>id: {id}</p>
        <p>name: {title}</p>
        <p>price: {price}</p>
        <p>category: {category}</p>
      </div>
    )
  })
}

  return (
    <>   
    <div>
      <h1>CATEGORIAS</h1>
      <div style={{display:'flex',gap:'10px'}}>{renderCategories()}</div>
    </div>
    <div style={{display:'flex',gap:'10px'}}>
      {
       productsOfCategory.length 
       ? renderProductOfCategory()
       : <h4>Selecciona una categoria</h4>
      }
    </div>
    </>
  )
}

export default Home