import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from './shared/globalState';

import Nav from './components/Nav';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Help from './pages/Help/Help';

import './styles/index.css';

export default function App() {
  const [isDarkModeEnabled] = useDarkMode();
  
  return (
    <div className={`${isDarkModeEnabled ? 'dark' : ''}`}>
      <div className='fullscreen dark:bg-gray-900 dark:text-white'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/features' element={<Features/>} />
          <Route exact path='/help' element={<Help/>} />
        </Routes>
      </div>
    </div>
  )
}
