import './App.css';
import logo from './logo.svg';

import { initSuperflow } from '@usesuperflow/client';
import { useEffect } from 'react';


function App() {

  useEffect( () => {
    initSuperflow('XyP7u3xQtt0pSEwv6T0f', {
      projectId: '5198289154173068'
    });
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>Test out Superflow by highlighting this text.</p>
      </header>
    </div>
  );
}

export default App;

