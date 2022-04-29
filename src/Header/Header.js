import React from 'react';
import './Header.css';

export default function Header({ greeting }) {
  return (
    <header className="header">
      <h2>{greeting}</h2>
    </header>
  );
}
