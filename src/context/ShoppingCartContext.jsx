import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext({
  items: [],
  subtotal: [],
  add: (item) => {},
})

export const ShoppingCartProvider = ({children}) => {
  const [items, setItem] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  const getProductsbyId = (id) => {
    return items.find((itm) => itm.id === id)
  }

  const add = (item) => {
    const existingItem = getProductsbyId(item.id)
    if (existingItem) {
      const newList = items.map((itm) => {
        if (itm.id === existingItem.id) {
          console.log('existItem')
          const qty = itm.qty + item.qty
          return {
            ...itm,
            qty,
          }
        }
        return itm
      })
      console.log(newList)
      setItem(newList)
    }
    if (!existingItem) {
      setItem([...items, item])
    }
    let q = 0
    const quantity = items.map(function (itm, q) {
      const s = itm.qty * itm.currentPrice
      q += s
      return q
    })
    const sum = quantity.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
    setSubtotal(sum)
    console.log(subtotal)
  }

  const remove = (product) => {
    const newProducts = items.filter((p) => p.id !== product.id)

    setItem(newProducts)

    let q = 0
    const quantity = items.map(function (itm, q) {
      const test = itm.qty * itm.currentPrice
      q += test
      return q
    })
    setSubtotal(quantity)

    // items.forEach((itm) => {
    //   itemNumbers += itm.qty
    // })
  }

  const contextValue = {
    items,
    add,
    subtotal,
    remove,
  }

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
