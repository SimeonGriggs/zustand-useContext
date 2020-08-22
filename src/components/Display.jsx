import React from 'react';

function Display({ children }) {
  return (
    <div className="bg-red-500 p-6 mb-6 text-2xl font-bold">{children}</div>
  );
}

export default Display;
