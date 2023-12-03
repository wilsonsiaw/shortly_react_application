import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Body from '../Body/Body';
import Started from '../Started/Started';
import Footer from '../Footer/Footer';


function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Body />
      <Started />
      <Footer />
    </div>
  )
}

export default App
