import { useState } from 'react';

import Button from '@pwa/react-components/Button';
import util from '@pwa/react-components/util';

import './App.css';

console.log(util(100));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button>PWABUTTON</Button>
      <div className="card">
        <button
          onClick={() => {
            setCount(oldCount => oldCount + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
