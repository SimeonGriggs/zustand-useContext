import React from 'react';
import { useGlobalStore } from '../hooks/useGlobalStore.js';

import Button from './Button';
import Display from './Display';

function Counter() {
  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    resetQuantity,
  } = useGlobalStore();

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
