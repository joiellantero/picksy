import { Link, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./shared/globalState";

import Nav from "./components/Nav/Nav";
import MobileNav from "./components/Nav/MobileNav";
import Home from './pages/Home';
import Features from './pages/Features';
import Help from './pages/Help';

import './styles/index.css';

export default function App() {
  const isDarkModeEnabled = useRecoilValue(darkModeState);

  return (
    <div className={`flex flex-col min-h-screen relative overflow-x-hidden ${isDarkModeEnabled ? 'dark bg-[#0c0c14] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Nav />
      <div className={'flex-1 flex justify-center px-4 md:px-8'}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/features' element={<Features/>} />
          <Route exact path='/help' element={<Help/>} />
        </Routes>
      </div>
      <MobileNav />

      {/* ── Footer ── */}
      <footer className="relative pb-28 md:pb-0">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <div className="bg-white dark:bg-[#0c0c14] px-6 pt-8 pb-6">
          <div className="max-w-5xl mx-auto">

            {/* ── Mobile footer ── */}
            <div className="md:hidden flex flex-col items-center gap-5 text-center">
              {/* Brand */}
              <div>
                <p className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
                  Picksy
                </p>
                <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-600 italic">Pick a name. Make it fair.</p>
              </div>

              {/* Action links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://sudojoie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  Blog
                </a>
                <a
                  href="https://ko-fi.com/joiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                >
                  <span>☕</span>
                  Buy me a coffee
                </a>
              </div>

              <p className="text-[11px] text-gray-300 dark:text-gray-700">&copy; {new Date().getFullYear()} joiellantero</p>
            </div>

            {/* ── Desktop footer ── */}
            <div className="hidden md:block">
              <div className="flex flex-row items-start justify-between gap-8">

                {/* Brand col */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
                    Picksy
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 italic">Pick a name. Make it fair.</p>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href="https://ko-fi.com/joiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                    >
                      <span>☕</span> Buy me a coffee
                    </a>
                  </div>
                </div>

                {/* Links cols */}
                <div className="flex gap-12 text-xs">
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-300 dark:text-gray-700 mb-1">Pages</p>
                    <Link to="/" className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Home</Link>
                    <Link to="/features" className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Features</Link>
                    <Link to="/help" className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">FAQs</Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-300 dark:text-gray-700 mb-1">Developer</p>
                    <a href="https://sudojoie.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Blog</a>
                    <a href="https://github.com/joiellantero/picksy" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-100 dark:via-gray-800 to-transparent" />
              <p className="mt-4 text-[11px] text-gray-300 dark:text-gray-700">
                &copy; {new Date().getFullYear()} Picksy &mdash; Made with <span className="text-rose-400">♥</span> by joiellantero
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
