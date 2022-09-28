import React from 'react';
import './App.scss';
import Sidebar from './componets/layout/Sidebar/Sidebar';

import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Sidebar></Sidebar>
        <div className='d-flex flex-column flex-shrink-0 p-3 bg-light content'>
          <AppRouter />
        </div>

      </main>
    </div>
  );
}

export default App;
