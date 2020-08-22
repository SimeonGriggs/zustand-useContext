import React, { useContext } from 'react';
import Button from './Button';
import Display from './Display';
import { StoreContext } from '../StoreContext';

import { options } from '../content/options';

function Selector() {
  const useStore = useContext(StoreContext);
  const item = useStore(state => state.item);
  const setItem = useStore(state => state.setItem);

  return (
    <div>
      <Display>
        <span
          className={
            item ? `` : `opacity-50 transition-opacity duration-100 ease-out`
          }
        >
          {item ?? `Choose Item`}
        </span>
      </Display>
      {options.map(option => (
        <Button
          key={option}
          className={option === item ? `bg-green-900` : ``}
          onClick={() => setItem(option)}
        >
          Add {option}
        </Button>
      ))}
    </div>
  );
}

export default Selector;
