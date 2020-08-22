import React, { useContext } from 'react';
// import { shallow } from 'zustand';

import { StoreContext } from '../StoreContext';
import Button from './Button';
import Display from './Display';

function Selector() {
  const useStore = useContext(StoreContext);
  const { quantity, item, order, addToOrder, resetOrder } = useStore(
    state => ({
      quantity: state.quantity,
      item: state.item,
      order: state.order,
      addToOrder: state.addToOrder,
      resetOrder: state.resetOrder,
    })
    // shallow
  );

  const id = Math.random()
    .toString(36)
    .substring(7);

  function formatItem(name = null, qty = 0) {
    if (!name) return '';

    return qty === 1 ? name : `${name}s`;
  }

  return (
    <div>
      <Display>
        {quantity} &times; {formatItem(item, quantity)}
      </Display>
      <Button
        className={quantity === 0 ? `opacity-25 pointer-events-none` : ``}
        onClick={() => addToOrder({ id, quantity, item })}
      >
        Add to Order
      </Button>

      {order && (
        <table className="my-6 w-full">
          <thead className="text-left">
            <tr className="border-b border-t border-gray-700">
              <th className="py-2">Qty</th>
              <th className="p-2"></th>
              <th className="py-2">Item</th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 &&
              order.map(row => (
                <tr key={row.id} className="border-b border-gray-700">
                  <td className="py-2">{row.quantity}</td>
                  <td className="p-2">&times;</td>
                  <td className="py-2">{formatItem(row.item, row.quantity)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      <Button
        className={order.length <= 0 ? `opacity-25 pointer-events-none` : ``}
        onClick={() => resetOrder()}
      >
        Reset Order
      </Button>
    </div>
  );
}

export default Selector;
