import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from "./shared/globalState";

import Nav from "./components/Nav/Nav";
import Home from './pages/Home';
import Features from './pages/Features';
import Help from './pages/Help';

import './styles/index.css';

export default function App() {
  const [isDarkModeEnabled] = useDarkMode();

  useEffect(() => {
    if (isDarkModeEnabled){
      document.body.style.background = "#0f172a";
      document.body.style.color = "white";
    } else{
      document.body.style.background = "#f1f5f9";
      document.body.style.color = "black";
    }
  })
  
  return (
    <div className={`${isDarkModeEnabled ? 'dark' : ''}`}>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/features' element={<Features/>} />
        <Route exact path='/help' element={<Help/>} />
      </Routes>
    </div>
  )
}
