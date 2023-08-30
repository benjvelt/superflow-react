import './App.css';
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
          Test out Superflow by highlighting this text.
      </header>
    </div>
  );
}

export default App;
