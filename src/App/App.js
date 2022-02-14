import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from '../Shared/globalState';

import Header from '../Components/Header';
import Home from '../Pages/Home/Home';
import Features from '../Pages/Features/Features';
import Help from '../Pages/Help/Help';

import './App.css';

export default function App() {
  const [isDarkModeEnabled] = useDarkMode();
  
  return (
    <div className={`${isDarkModeEnabled ? 'dark' : ''}`}>
      <div className='App dark:bg-gray-900 dark:text-white'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/features' element={<Features/>} />
          <Route exact path='/help' element={<Help/>} />
        </Routes>
      </div>
    </div>
  )
}
