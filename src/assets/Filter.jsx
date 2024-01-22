import React, { useState } from 'react';

const Filter = () => {
  const initialList = [
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Grapes',
    'Mango',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialList);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredList = initialList.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filteredList);
  };

  return (
    <div>
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
