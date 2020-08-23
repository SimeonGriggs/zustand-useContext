import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext';

export const useGlobalStore = () => {
  const useStore = useContext(StoreContext);

  return {
    quantity: useStore(state => state.quantity),
    increaseQuantity: useStore(state => state.increaseQuantity),
    decreaseQuantity: useStore(state => state.decreaseQuantity),
    resetQuantity: useStore(state => state.resetQuantity),
  };
};
