import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './design/components/Nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './design/pages/Home';
import NFT from './design/pages/NFT';
import Account from './design/pages/Account';
import Create from './design/Create';

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/NFT' element={<NFT/>}/>
          <Route exact path='/Account' element={<Account/>}/>
          <Route exact path='/Create' element={<Create/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
