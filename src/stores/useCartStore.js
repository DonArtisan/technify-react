import create from 'zustand'

const useCartStore = create((set) => ({
  items: [],
  direction: '',
  actions: {
    addToCart: (newItem) =>
      set((state) => {
        const existingItem = state.items.find((itm) => itm.id === newItem.id)
        if (!existingItem) {
          return {...state, items: [...state.items, newItem]}
        }
        const updatedCart = state.items.map((item) =>
          item.id === existingItem.id
            ? {...item, quantity: item.quantity + 1}
            : item
        )
        return {...state, items: updatedCart}
      }),
    removeFromCart: (oldItem) =>
      set((state) => {
        const exists = state.items.findIndex((item) => item.id === oldItem.id)

        if (exists === -1) {
          return {...state}
        }

        const updatedCart = state.items.filter((item) => item.id !== oldItem.id)

        return {...state, items: updatedCart}
      }),
    updateCart: (updatedItem) =>
      set((state) => {
        const exists = state.items.findIndex(
          (item) => item.id === updatedItem.id
        )

        if (exists === -1) {
          return {
            ...state,
          }
        }

        const updatedCart = state.items.map((item) =>
          item.id === updatedItem.id
            ? {...item, quantity: updatedItem.quantity}
            : item
        )
        return {...state, items: updatedCart}
      }),
    cleanCart: () => set({items: []}),
    addDirection: (newDirection) =>
      set((state) => {
        return {...state, direction: newDirection}
      }),
  },
}))

export const useCart = () => useCartStore((state) => state.items)
export const useDirection = () => useCartStore((state) => state.direction)

export const useCartActions = () => useCartStore((state) => state.actions)
