import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal';

export default function AnimalList ({ animal }) {
  return (
    <main>
      {animal.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says} />
      ))}
    </main>
  );
}