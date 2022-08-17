import React from 'react';
import About from './components/About';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;