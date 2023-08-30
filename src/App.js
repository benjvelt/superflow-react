import logo from './logo.svg';
import './App.css';
import { initSuperflow } from '@usesuperflow/client';
import { useEffect } from 'react';


function App() {

  useEffect( () => {
    initSuperflow('XyP7u3xQtt0pSEwv6T0f', {
      projectId: '8503152202185337'
    });
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
