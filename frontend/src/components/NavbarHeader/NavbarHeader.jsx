import {
  IconsHeaderContainerStyles,
  LogoHeaderStyle,
  NavbarContainerStyles,
  NavbarItemStyle,
  NavbarListStyles,
} from './NavbarHeaderStyles'

import { useContext } from 'react'
import { ApiContext } from '../../context/GlobalContext'

// icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavbarHeader = () => {
  const { hr, isOpenMenu, setIsOpenMenu } = useContext(ApiContext)
  const { menu, icons } = hr
  const close = () => {
    isOpenMenu ? setIsOpenMenu(false) : null
  }

  return (
    <NavbarContainerStyles isOpenMenu={isOpenMenu}>
      <LogoHeaderStyle
        src='https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg'
        alt='img logo header'
      />

      <NavbarListStyles isOpenMenu={isOpenMenu}>
        {menu.map(({ text, id, to }) => (
          <NavbarItemStyle
            key={id}
            to={to}
            activeclassname='active'
            onClick={close}
          >
            {text}
          </NavbarItemStyle>
        ))}
      </NavbarListStyles>

      <IconsHeaderContainerStyles>
        {icons.map(({ id, icon }) => (
          <div key={id} className='iconHeader'>
            {icon}
          </div>
        ))}
      </IconsHeaderContainerStyles>

      <AiOutlineMenu
        className='barsIcon'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      />
      <AiOutlineClose
        className='closeIcon'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      />
    </NavbarContainerStyles>
  )
}

export default NavbarHeader
