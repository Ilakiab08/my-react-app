

import React from 'react';
import Counter from './Counter';
import Filter from './Filter'; 
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
