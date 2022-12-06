import create from 'zustand'

const useCartStore = create((set) => ({
  items: [],
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
    removeOneFromCart: (oldItem) =>
      set((state) => {
        const exists = state.items.findIndex((item) => item.id === oldItem.id)

        if (exists === -1) {
          return {
            ...state,
          }
        }

        const updatedCart = state.items
          .map((item) =>
            item.id === oldItem.id
              ? {...item, quantity: Math.max(item.quantity - 1, 0)}
              : item
          )
          .filter((item) => item.quantity)

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
    cleanCart: () => set({items: []}),
  },
}))

export const useCart = () => useCartStore((state) => state.items)

export const useCartActions = () => useCartStore((state) => state.actions)
