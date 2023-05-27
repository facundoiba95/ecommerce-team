import { createContext, useState } from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

const hr = {
  menu: [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'Products', to: '/products' },
    { id: 3, text: 'Contact', to: '/contact' },
  ],
  icons: [
    { id: 1, icon: <AiOutlineUser /> },
    { id: 2, icon: <AiOutlineShoppingCart /> },
  ],
}

export const ApiContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <ApiContext.Provider
      value={{
        hr,
        isOpenCart,
        setIsOpenCart,
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
