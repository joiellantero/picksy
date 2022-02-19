import { Route, Routes } from "react-router-dom";
import {useDarkMode, useSettingsModalState} from "./shared/globalState";

import Nav from "./components/Nav/Nav";
import Home from './pages/Home';
import Features from './pages/Features';
import Help from './pages/Help';

import './styles/index.css';
import SettingsSideBar from "./components/SettingsSideBar";

export default function App() {
  const [isDarkModeEnabled] = useDarkMode();
  let [isOpen, setIsOpen] = useSettingsModalState();
  
  return (
    <div className={`min-h-screen ${isDarkModeEnabled ? 'dark bg-slate-900 text-white' : 'bg-slate-100'}`}>
      <Nav />
      <div className={'grid grid-cols-1 lg:grid-cols-4 gap-4'}>
        <div className={'col-span-1 lg:col-span-3 flex justify-center'}>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/features' element={<Features/>} />
            <Route exact path='/help' element={<Help/>} />
          </Routes>
        </div>
        <SettingsSideBar
          isOpen={isOpen}
          title={'settings'}
          body={'body of settings'}
          onClose={(isClose) => setIsOpen(isClose)}
        />
      </div>
    </div>
  )
}
