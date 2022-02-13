import React from 'react';
import {Route, Routes} from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../Shared/globalState';

import Header from '../Components/Header';
import Home from '../Pages/Home/Home';
import Features from '../Pages/Features/Features';
import Help from '../Pages/Help/Help';

import './App.css';

export default function App() {
  const isDarkModeEnabled = useRecoilValue(darkModeState);
  
  return (
    <div className={`App ${ isDarkModeEnabled ? 'dark:bg-gray-900 text-white' : '' }`}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/features' element={<Features/>} />
        <Route exact path='/help' element={<Help/>} />
      </Routes>
    </div>
  )
}
