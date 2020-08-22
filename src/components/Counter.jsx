import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext';

import Button from './Button';
import Display from './Display';

function Counter() {
  const useStore = useContext(StoreContext);
  if (!useStore) return null;

  const quantity = useStore(state => state.quantity);
  const increaseQuantity = useStore(state => state.increaseQuantity);
  const decreaseQuantity = useStore(state => state.decreaseQuantity);
  const resetQuantity = useStore(state => state.resetQuantity);

  return (
    <div>
      <Display>{quantity}</Display>
      <Button onClick={increaseQuantity}>Add 1</Button>
      <Button onClick={decreaseQuantity}>Take 1</Button>
      <Button onClick={resetQuantity}>Reset</Button>
    </div>
  );
}

export default Counter;
