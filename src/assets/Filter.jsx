import React, { useState } from 'react';

function Filter() {
 const [filterText, setFilterText] = useState('');
 const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
 const [filteredItems, setFilteredItems] = useState(items);

 const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setFilteredItems(items.filter(item => item.includes(event.target.value)));
 };

 return (
    <div>
      <input type="text" value={filterText} onChange={handleFilterChange} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
 );
}

export default Filter();
