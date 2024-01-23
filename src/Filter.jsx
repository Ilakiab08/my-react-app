import React, { useState } from 'react';



const items = ['Car', 'Bus', 'Train', 'Flight'];

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
