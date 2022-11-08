import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext({
  items: [],
  add: (item) => {},
})

export const ShoppingCartProvider = ({children}) => {
  const [items, setItem] = useState([])

  const add = (item) => {
    setItem(item)
  }

  const contextValue = {
    items,
    add,
  }

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
