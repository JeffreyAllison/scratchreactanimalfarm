import './Animal.css';
import React from 'react';

export default function Animal({ name, type, says, top, left }) {
  return (
    <div>
      <div
        className="animal"
        style={{
          position: 'fixed',
          top,
          left,
        }}
      >
        <img className="animal-image" src={`/images/${type}.svg`} />
        <span className="name">{name}</span>
        <span className="type">{type}</span>
        <span className="says">{says}</span>
      </div>
    </div>
  );
}
