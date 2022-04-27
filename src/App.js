import './App.css';
import Main from './Main/Main.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';


function App () {
  return (
    <div className="App">
      <Header greeting="The REACT Farm" />

      <Main />

      <Footer email="jeff@reactfarm.com" />
    </div>
  );
}

export default App;
