import './Animal.css';
import React from 'react';

export default function Animal ({ name, type, says }) {
  return (
    <div className='animal'>
      <img src={`/images/${type}.svg`} />
      <h2 className='name'>{name}</h2>
      <h3 className='type'>{type}</h3>
      <h5 className='says'>{says}</h5>
    </div>
  );
}