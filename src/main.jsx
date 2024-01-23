

import React from 'react';
import Counter from './Counter.jsx';
import Filter from './Filter.jsx'; 
import './App.css';
import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <Counter />
      <Filter />
    </div>
  );
};

export default App();
