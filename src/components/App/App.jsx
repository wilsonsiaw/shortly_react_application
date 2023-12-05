import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Body from '../Body/Body';
import Started from '../Started/Started';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Password from '../Password/Password';
import { Routes, Route } from 'react-router-dom';
import Home from '../Login/Home/Home';
import Url from '../Url/Url';

function App() {

  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='Signup' element={<Signup />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Password' element={<Password />}/>
      </Routes>
    </div>
  )
}

export default App
