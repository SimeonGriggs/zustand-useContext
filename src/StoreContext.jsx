import React, { useState } from 'react';
import create from 'zustand';

const StoreContext = React.createContext();

const useStore = create(set => ({
  quantity: 0,
  increaseQuantity: () => set(state => ({ quantity: state.quantity + 1 })),
  decreaseQuantity: () =>
    set(state => ({ quantity: state.quantity > 0 ? state.quantity - 1 : 0 })),
  resetQuantity: () => set({ quantity: 0 }),
  item: null,
  setItem: newItem => set({ item: newItem }),
  order: [],
  addToOrder: newOrder =>
    set(state => ({
      quantity: 0,
      item: null,
      order: [...state.order, newOrder],
    })),
  resetOrder: () => set({ order: [] }),
}));

const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useStore}>{children}</StoreContext.Provider>
);

export { StoreContext, StoreProvider };
