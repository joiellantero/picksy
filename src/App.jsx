import { Link, Route, Routes } from "react-router-dom";
import { useAtomValue } from "jotai";
import { darkModeState } from "./shared/globalState";
import { Analytics } from '@vercel/analytics/react';

import Nav from "./components/Nav/Nav";
import MobileNav from "./components/Nav/MobileNav";
import Home from './pages/Home';
import Features from './pages/Features';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

import './styles/index.css';

export default function App() {
  const isDarkModeEnabled = useAtomValue(darkModeState);

  return (
    <div className={`flex flex-col min-h-screen relative overflow-x-hidden ${isDarkModeEnabled ? 'dark bg-[#0c0c14] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Nav />
      <div className={'flex-1 flex justify-center px-4 md:px-8'}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/terms' element={<Terms/>} />
          <Route path='/cookies' element={<Cookies/>} />
        </Routes>
      </div>
      <MobileNav />

      {/* ── Footer ── */}
      <footer className="relative pb-28 md:pb-0 bg-white dark:bg-[#0c0c14]">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        <div className="px-6 py-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
            <div className="flex items-center gap-4 text-[11px] text-gray-400 dark:text-gray-600">
              <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Cookies</Link>
              <a href="https://github.com/joiellantero/picksy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">GitHub</a>
              <a href="https://ko-fi.com/joiel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Support</a>
            </div>
            <p className="text-[10px] text-gray-300 dark:text-gray-700">
              &copy; {new Date().getFullYear()} <a href="https://sudojoie.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-500 transition-colors">Picksy</a>
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
