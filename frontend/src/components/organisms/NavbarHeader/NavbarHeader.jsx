import React, { useContext } from 'react'
import { IconsHeaderContainerStyles, LogoHeaderStyle, NavbarContainerStyles, NavbarItemStyle, NavbarListStyles } from './NavbarHeaderStyles'
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../../context/GlobalContext';

// icons
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineXMark } from 'react-icons/hi2'


const NavbarHeader = () => {
  const navigator = useNavigate();
  const { isOpenCart,setIsOpenCart,isOpenMenu,setIsOpenMenu } = useContext(ApiContext);

    const goHome = () => { 
      setIsOpenMenu(!isOpenMenu);
      navigator('/');
    } 

    const goProducts = () => { 
      setIsOpenMenu(!isOpenMenu);
      navigator('/products');
    } 
    
    const goContact = () => { 
      setIsOpenMenu(!isOpenMenu);
      navigator('/contact');
    }

  return (
    <NavbarContainerStyles isOpenMenu={isOpenMenu}>
      <LogoHeaderStyle src='https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg' alt='img logo header'/>
      <NavbarListStyles isOpenMenu={isOpenMenu}>
        <NavbarItemStyle onClick={goHome}>Home</NavbarItemStyle>
        <NavbarItemStyle onClick={goProducts}>Productos</NavbarItemStyle>
        <NavbarItemStyle onClick={goContact}>Contacto</NavbarItemStyle>
      </NavbarListStyles>
      <IconsHeaderContainerStyles>
        <BsCart2 className='iconHeader' value={isOpenCart} onClick={() => setIsOpenCart(!isOpenCart)}/>
        <AiOutlineUser className='iconHeader'/>
      </IconsHeaderContainerStyles>
      <AiOutlineMenu className='barsIcon' onClick={() => setIsOpenMenu(!isOpenMenu)}/>
      <HiOutlineXMark className='closeIcon' onClick={() => setIsOpenMenu(!isOpenMenu)}/>
    </NavbarContainerStyles>
  )
}

export default NavbarHeader