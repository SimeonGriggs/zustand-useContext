import React from 'react';

import './App.css';

import Counter from './components/Counter';
import Selector from './components/Selector';
import Order from './components/Order';
import { StoreProvider } from './StoreContext';

function App() {
  return (
    <StoreProvider>
      <section className="flex flex-col md:flex-row p-12 gap-12">
        <div className="flex-1 bg-gray-800 p-6">
          <Counter />
        </div>
        <div className="flex-1 bg-gray-800 p-6">
          <Selector />
        </div>
        <div className="flex-1 bg-gray-800 p-6">
          <Order />
        </div>
      </section>
    </StoreProvider>
  );
}

export default App;
