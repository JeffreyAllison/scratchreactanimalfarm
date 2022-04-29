import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal';

export default function AnimalList({ animals }) {
  return (
    <div>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </div>
  );
}
