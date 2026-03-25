import React, { useMemo, useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { Link } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { darkModeState, namesListState, removeState } from '../../shared/globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import List from '../List';
import WinnerMessage from '../WinnerMessage';
import Toggle from '../Toggle';

/* ── Inline SVG icons ─────────────────────────────────────── */
const PagesIcon = () => (
  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const GearIcon = () => (
  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/* ── Static data ───────────────────────────────────────────── */
const NAV_PAGES = [
  { text: 'Home', to: '/' },
  { text: 'Features', to: '/features' },
  { text: 'FAQs', to: '/help' },
  { text: 'Documentation', to: 'https://github.com/joiellantero/picksy', external: true },
];

const itemClass =
  'flex items-center w-full px-4 py-3.5 text-base font-medium text-gray-600 dark:text-gray-400 rounded-xl md:hover:bg-gray-100 md:dark:hover:bg-gray-800 md:hover:text-gray-900 md:dark:hover:text-white transition-all duration-75';

/* ── Component ─────────────────────────────────────────────── */
const MobileNav = () => {
  const containerRef = useRef(null);
  const [elementRef] = useMeasure();
  const [hiddenRef, hiddenBounds] = useMeasure();
  const [view, setView] = useState('default');
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [namesList, setNamesList] = useRecoilState(namesListState);
  const resetNamesList = useResetRecoilState(namesListState);
  const [shouldRemoveName, setShouldRemoveName] = useRecoilState(removeState);

  // Close submenus when tapping outside the dock
  useEffect(() => {
    const onOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setView('default');
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  // Submenu content — memoised so re-renders don't flash during animation
  const content = useMemo(() => {
    switch (view) {
      case 'pages':
        return (
          <div className="space-y-0.5 min-w-[200px] p-2">
            {NAV_PAGES.map(({ text, to, external }) =>
              external ? (
                <a key={text} href={to} target="_blank" rel="noopener noreferrer" onClick={() => setView('default')}>
                  <button className={itemClass}>{text}</button>
                </a>
              ) : (
                <Link key={text} to={to} onClick={() => setView('default')}>
                  <button className={itemClass}>{text}</button>
                </Link>
              )
            )}
          </div>
        );

      case 'settings':
        return (
          <div className="p-3 w-[90vw] max-w-[300px] space-y-3">
            <p className="section-label">Participants</p>
            <List
              value={namesList}
              onChange={(e) => setNamesList(e)}
              onClear={() => resetNamesList()}
            />
            <div className="border-t border-gray-100 dark:border-gray-800/50" />
            <p className="section-label">Customization</p>
            <WinnerMessage />
            <div className="border-t border-gray-100 dark:border-gray-800/50" />
            <p className="section-label">Behavior</p>
            <Toggle
              isOn={shouldRemoveName}
              handleToggle={() => setShouldRemoveName(!shouldRemoveName)}
              label="Remove after chosen"
              hiddenMobile={false}
            />
          </div>
        );

      default:
        return null;
    }
  }, [view, namesList, setNamesList, resetNamesList, shouldRemoveName, setShouldRemoveName]);

  const mainNav = [
    { Icon: PagesIcon, name: 'pages', action: null },
    { Icon: null, name: 'theme', action: () => { setIsDarkMode((d) => !d); setView('default'); } },
    { Icon: GearIcon, name: 'settings', action: null },
  ];

  const handleNavClick = (name, action) => {
    if (action) { action(); return; }
    setView((prev) => (prev === name ? 'default' : name));
  };

  return (
    <div
      ref={containerRef}
      className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center overflow-visible"
    >
      {/* Hidden clone — gives react-use-measure the target size before animation */}
      <div
        ref={hiddenRef}
        aria-hidden="true"
        className="absolute left-[-9999px] invisible pointer-events-none"
      >
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/50">
          {content}
        </div>
      </div>

      {/* Animated submenu panel — opens upward above the toolbar */}
      <AnimatePresence mode="wait">
        {view !== 'default' && (
          <motion.div
            key="submenu"
            initial={{ opacity: 0, height: 0, width: 0 }}
            animate={{
              opacity: 1,
              height: hiddenBounds.height || 'auto',
              width: hiddenBounds.width || 'auto',
            }}
            exit={{ opacity: 0, height: 0, width: 0 }}
            transition={{ duration: 0.25, ease: [0.45, 0, 0.25, 1] }}
            style={{ transformOrigin: 'bottom center' }}
            className="absolute bottom-[80px]"
          >
            <div
              ref={elementRef}
              className="rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 shadow-xl"
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                  transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                  className="py-1"
                >
                  {content}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toolbar */}
      <div className="flex items-center gap-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-[22px] p-1.5 shadow-lg z-10 select-none">
        {mainNav.map(({ Icon, name, action }) => (
          <button
            key={name}
            className={`p-3.5 rounded-2xl transition-all duration-150 [-webkit-tap-highlight-color:transparent] select-none ${
              !action && view === name
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-500 dark:text-gray-400 md:hover:bg-gray-100 md:dark:hover:bg-gray-800'
            }`}
            onClick={() => handleNavClick(name, action)}
          >
            {name === 'theme' ? (
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={() => {}}
                size={22}
                moonColor="#818cf8"
                sunColor="#f59e0b"
              />
            ) : (
              <Icon />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;

