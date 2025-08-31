import React , { useState, useEffect } from 'react';
import ColorModeToggle from './components/ColorModeToggle';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Team from './components/Team';

import './App.css';

function App() {
  const [colorMode, setColorMode] = useState('white');

  useEffect(() => {
    const storedColor = localStorage.getItem('color');
    if (storedColor) {
      setColorMode(storedColor);
    }
  }, []);

  return (
    <div className={`App ${colorMode}-mode`}>
      <ColorModeToggle colorMode={colorMode} setColorMode={setColorMode} />
      <Header />
      <Main />
      <About />
      <Services />
      <Blog />
      <Team />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;