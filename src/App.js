import React from 'react';
import { Pokedex, defaultProps } from './Pokedex';

import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={defaultProps.pokemon} />
    </div>
  );
}

export default App;
