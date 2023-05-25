import { Routes as RouterRoutesDOM ,Route, BrowserRouter  } from 'react-router-dom';
import React from 'react'
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NavbarHeader from '../components/organisms/NavbarHeader/NavbarHeader';
import Products from '../pages/Products/Products';
import Contact from '../pages/Contact/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
    <NavbarHeader/>
    <RouterRoutesDOM>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </RouterRoutesDOM>
    </BrowserRouter>
  )
}

export default Routes