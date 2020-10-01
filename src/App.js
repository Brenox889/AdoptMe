import React from 'react';

import SearchParams from './components/SearchParams';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NameProvider from './components/context/NameContext';

import { Router } from '@reach/router';

import './global.css';

import background from './assets/budog3.jpeg';

function App() {
  return (
    <NameProvider>
      <NavBar />
      <div className="container">
        <Router>
          <SearchParams path="/" />
        </Router>
        <div className="img-Container">
          <img src={background} alt="Adopt Me Background" />
        </div>
      </div>
    </NameProvider>
  );
}

export default App;
