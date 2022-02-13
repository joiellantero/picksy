import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Features from '../Pages/Features/Features';
import Help from '../Pages/Help/Help';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/features' element={<Features/>} />
        <Route exact path='/help' element={<Help/>} />
      </Routes>
    </div>
  )
}
