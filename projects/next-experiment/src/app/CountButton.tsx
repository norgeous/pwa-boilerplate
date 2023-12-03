'use client';
import { useState } from 'react';

const CountButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{ padding: 20, fontSize: 20 }}
      onClick={() => setCount(count + 1)}
    >
      count: {count}
    </button>
  );
};

export default CountButton;
