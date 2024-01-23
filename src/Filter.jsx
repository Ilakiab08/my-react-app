import React, { useState } from 'react';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function Filter() {
 const [filter, setFilter] = useState('');

 const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

 return (
    <div>
      <input className="input-field" type="text" value={filter} onChange={e => setFilter(e.target.value)} />
      <ul className="list">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
 );
}

export default Filter;
