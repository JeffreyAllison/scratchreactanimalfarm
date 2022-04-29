import './Animal.css';
import React from 'react';

export default function Animal ({ name, type, says, top, left }) {
  return (
    <div
      className="animal"
      style={{
        position: 'absolute',
        top: top,
        left: left,
      }}
    >
      <img className='animal-image' src={`/images/${type}.svg`} />
      <h2 className='name'>{name}</h2>
      <h3 className='type'>{type}</h3>
      <h5 className='says'>{says}</h5>
    </div>
  );
}