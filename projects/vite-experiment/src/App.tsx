import { useState } from 'react';

import Button from '@pwa/react-components/Button';
import util from '@pwa/react-components/util';
import projectConfig from '../project.config';

import './App.css';

console.log(util(100));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <pre>{JSON.stringify(projectConfig, null, 2)}</pre>
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
