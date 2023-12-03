import { useState } from 'react';

import Button from '@pwa/react-components/Button';
import util from '@pwa/react-components/util';

import './App.css';

console.log(util(100));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{import.meta.env.VITE_TITLE}</h1>
      <Button>Library Button</Button>
      <div className="card">
        <button
          onClick={() => {
            setCount(oldCount => oldCount + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
};

export default App;
