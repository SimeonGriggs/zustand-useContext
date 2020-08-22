import React, { useState } from 'react';

function Button({ onClick = () => fn, children = '', className = '' }) {
  return (
    <button
      className={`bg-green-500 hover:bg-green-700 transition duration-100 ease-out p-3 block w-full mb-1 rounded ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
