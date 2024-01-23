import React from 'react';
import posts from './posts.js';

function Card() {
 return (
   <div>
     {posts.map((post) => (
       <div key={post.id}>
         <h2>{post.title}</h2>
         <p>{post.content}</p>
       </div>
     ))}
   </div>
 );
}

export default Card;