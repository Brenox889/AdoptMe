import React from 'react';

import SearchParams from './components/SearchParams';
import NavBar from './components/NavBar';
import NameProvider from './components/context/NameContext';

import './global.css';

function App() {
  return (
    <NameProvider>
      <div>
        <NavBar />
        <SearchParams />
      </div>
    </NameProvider>
  );
}

export default App;
