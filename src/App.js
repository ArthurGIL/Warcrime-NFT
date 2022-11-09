import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ethers } from "ethers"

import Home from './pages/Home';
import NFT from './pages/NFT';

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/NFT' element={<NFT/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
