

import React from 'react';
import Counter from '/src/Counter';
import Filter from '/src/Filter'; 
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

export default App;
