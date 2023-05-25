import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export const GlobalContextProvider = ({children}) => {
 const [ isOpenCart, setIsOpenCart ] = useState(false);
 const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    return (
        <ApiContext.Provider value={{
            isOpenCart,setIsOpenCart,
            isOpenMenu,setIsOpenMenu
        }}>
            {children}
        </ApiContext.Provider>
    )
}