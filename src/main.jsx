
import { jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime';

import Counter from '/src/Counter';
import Filter from '/src/Filter'; 
import './App.css';
import React from 'react';
import Card from "./assets/Card"

const App = () => {
  return (
    <div>
      <Counter />
      <Filter />
      <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
            <card/>
    </div>
  );
};

export default App;
