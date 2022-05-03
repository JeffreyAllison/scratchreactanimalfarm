import './App.css';
import './Main/Main.css';
import Main from './Main/Main.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import React from 'react';
import backgroundImg from './background.png';
import { animals } from './data';
import AnimalList from './AnimalList/AnimalList.js';

function App() {
  return (
    <div className="App">
      <Header greeting="Welcome to the REACT Farm" />

      <Main backgroundImg={backgroundImg} />

      <AnimalList animals={animals} />

      <Footer email="jeff@reactfarm.com" />
    </div>
  );
}

export default App;
