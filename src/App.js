import React from 'react';
import About from './components/About';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;