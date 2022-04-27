import React from 'react';
import backgroundImg from '../background.png';
import { animals } from '../data';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main () {
  return (
    <main className="background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animal={animals} />


    </main>
  );
}