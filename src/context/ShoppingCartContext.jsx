import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext({
  items: [],
  subtotal: [],
  add: (item) => {},
  direction: '',
})

export const ShoppingCartProvider = ({children}) => {
  const [items, setItem] = useState([])
  const [subtotal, setSubtotal] = useState(null)
  const [direction, setDirection] = useState('')

  const addDirection = (d) => {
    setDirection(d)
  }

  const getProductsbyId = (id) => {
    return items.find((itm) => itm.id === id)
  }

  const removeAllItems = () => {
    setItem([])
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
    console.log(items)
    if (!existingItem) {
      setItem([...items, item])
    }
    const quantity = items.map(function (itm, q) {
      let s = itm.qty * itm.currentPrice
      console.log('esto es s', s)
      return s
    })
    const sum = quantity.reduce((accumulator, value) => {
      console.log(value)
      return accumulator + value
    }, 0)
    setSubtotal(sum)
    console.log('esto es sum', sum)
    sumItems()
  }

  const sumItems = () => {
    console.log('items', items)
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
    direction,
    addDirection,
    removeAllItems,
  }

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
